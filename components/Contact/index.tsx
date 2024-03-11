"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import axios from 'axios';
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
import SectionHeaderTwo from "../Common/SectionHeaderTwo";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const validateForm = () => {
    return formData.name !== '' && 
           formData.email !== '' && 
           formData.subject !== '' && 
           formData.message !== '';
  };

  const handleInputChange = (e:any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e:any) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await axios.post("/api/contact", formData, {
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
        }
      });

      if (response.status === 200) {
        
        setFormData({ name: '', email: '', subject: '',message: '' });

        router.push("/mail-success");
      } else {
        toast.error("Something went wrong!");
      }
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong!");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <section id="support" className="py-20 lg:py-25 xl:py-30">
        <div className="mx-auto max-w-c-1390 px-7 md:px-11 2xl:px-5">
          <SectionHeaderTwo
            headerInfo={{
              title: "Contact",
              description: ``,
            }}
          />

          <div className="flex flex-wrap md:flex-nowrap flex-col-reverse md:flex-row gap-8 xl:gap-20 md:justify-between">
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  y: -20,
                },

                visible: {
                  opacity: 1,
                  y: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_top w-full md:w-3/5 lg:w-3/4 rounded-lg bg-white"
            >
              <h2 className="text-3xl text-black font-medium mb-15">
                Get in Touch
              </h2>

              <form
                onSubmit={handleSubmit}
              >
               <div className="flex flex-col lg:flex-row lg:justify-between gap-7.5 lg:gap-14 mb-7.5">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name} 
                    onChange={handleInputChange}
                    placeholder="Name & Lastname"
                    className="w-full lg:w-1/2 border-b border-stroke focus-visible:outline-none focus:placeholder:text-black pb-3.5"
                  />
                  
                
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="E-Mail"
                    className="w-full lg:w-1/2 border-b border-stroke focus-visible:outline-none focus:placeholder:text-black pb-3.5"
                  />
                </div>

                <div className="flex flex-col lg:flex-row lg:justify-between gap-7.5 lg:gap-14 mb-12.5">
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="Subject"
                    className="w-full lg:w-1/2 bg-transparent border-b border-stroke focus-visible:outline-none focus:border-waterloo focus:placeholder:text-black pb-3.5"
                  />
                </div>

                <div className="flex mb-11.5">
                  <textarea
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Message"
                    className="w-full bg-transparent border-b border-stroke focus-visible:outline-none focus:border-waterloo focus:placeholder:text-black "
                  ></textarea>
                </div>

                <div className="flex flex-wrap xl:justify-between">
                  <button disabled={!validateForm() || isSubmitting }
                      className={`inline-flex items-center gap-2.5 bg-black hover:bg-blackho ease-in-out duration-300 font-medium text-white rounded-md px-6 py-3
                      ${(!validateForm() || isSubmitting ) ? 'cursor-not-allowed' : ''}`}
                    >
                    {isSubmitting ? 'Sending...' : 'Sent message'}
                    <svg
                      className="fill-white"
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.4767 6.16664L6.00668 1.69664L7.18501 0.518311L13.6667 6.99998L7.18501 13.4816L6.00668 12.3033L10.4767 7.83331H0.333344V6.16664H10.4767Z"
                        fill=""
                      />
                    </svg>
                  </button>
                </div>
              </form>
            </motion.div>

            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  y: -20,
                },

                visible: {
                  opacity: 1,
                  y: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 2, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_top w-full md:w-2/5 lg:w-[26%]"
            >
              <h2 className="text-black text-3xl font-semibold mb-8">
                Our contact details
              </h2>

              <div className="mb-6 5">
                <h4 className="font-medium text-black text-metatitle3 mb-3">
                  Adresse
                </h4>
                <p>
                  <a href="https://maps.app.goo.gl/zvuqCPnQ7W7uwvNa9" className="hover:text-orange" target="_blank">141 Chancellor Dr, Woodbridge, ON L4L 7M9, Canada</a>
                </p>
              </div>
              <div className="mb-6 5">
                <h4 className="font-medium text-black text-metatitle3 mb-3">
                  E-Mail
                </h4>

                <p>
                  <a href="mailto:info@gtechmech.com" className="hover:text-orange">info@gtechmech.com</a>
                </p>
              </div>
              
              <div>
                <h4 className="font-medium text-black text-metatitle3 mb-3">
                  Phone
                </h4>
                <p>
                  <a href="tel:92 423 567 7" className="hover:text-orange">+92 423 567 7</a>
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
