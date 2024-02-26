"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from 'next/link';

const AboutStyleTwo = () => {
  return (
    <>
      <section className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0 overflow-hidden">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0 overflow-hidden">   
          <div className="flex items-center gap-8 lg:gap-32.5 relative">
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  x: 20,
                },

                visible: {
                  opacity: 1,
                  x: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_right hidden md:block mb-5 md:w-2/5 relative mx-auto aspect-[1200/1600]"
            >
              <Image
                src="/images/about/furnace-with-front-panel-off.jpg"
                alt="About"
                className="rounded-3xl"
                fill
              />
            </motion.div>

            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  x: -20,
                },

                visible: {
                  opacity: 1,
                  x: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_left md:w-1/2"
            >
              <h2 className="relative font-bold text-black text-3xl xl:text-hero mb-3">
                Commercial Kitchen
              </h2>
              <p>
                Metal sheet work from commercial kitchen ventilation and stainless steel cladding to metal sheet work and ductwork, we have got you covered. 
                We have over 5 years of experience and we provide quality workmanship at all times. 
                Our services are available to customers in Toronto, Gta, Hamilton, Oakville, Burlington, Guelf, Dunham Region and more.. Contact G-tech mechanical. 
                We accept payment through Credit Cards, PayPal, Check and cash.
              </p>
              <div>
                <Link href="/aboutus"
                      className="flex items-center gap-2.5 text-black mt-7.5"
                >
                  <span className="hover:text-orange duration-500">Learn more</span>
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M10.4767 6.16701L6.00668 1.69701L7.18501 0.518677L13.6667 7.00034L7.18501 13.482L6.00668 12.3037L10.4767 7.83368H0.333344V6.16701H10.4767Z" />
                  </svg>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 xl:px-0">
          <div className="flex items-center gap-8 lg:gap-32.5">
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  x: 20,
                },

                visible: {
                  opacity: 1,
                  x: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_right md:w-1/2"
            >

              <h2 className="relative font-bold text-black text-3xl xl:text-hero mt-9 mb-2">
                Our Services
              </h2>
              
              <p>
                
              </p>

              <div className="mt-7.5 flex items-center gap-5">
                <div className="w-15 h-15 rounded-[50%] border border-stroke flex items-center justify-center">
                  <p className="text-black font-semibold text-metatitle2">
                    01
                  </p>
                </div>
                <div className="w-3/4">
                  <h5 className="text-black font-medium text-metatitle2 mb-0.5">
                    RESTAURANT EXHAUST SYSTEM
                  </h5>
                  <p>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr</p>
                </div>
              </div>

              <div className="mt-7.5 flex items-center gap-5">
                <div className="w-15 h-15 rounded-[50%] border border-stroke flex items-center justify-center">
                  <p className="text-black font-semibold text-metatitle2">
                    02
                  </p>
                </div>
                <div className="w-3/4">
                  <h5 className="text-black font-medium text-metatitle2 mb-0.5">
                    DUCTWORK INSTALLATION
                  </h5>
                  <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr</p>
                </div>
              </div>
              
              <div className="mt-7.5 flex items-center gap-5">
                <div className="w-15 h-15 rounded-[50%] border border-stroke flex items-center justify-center">
                  <p className="text-black font-semibold text-metatitle2">
                    03
                  </p>
                </div>
                <div className="w-3/4">
                  <h5 className="text-black font-medium text-metatitle2 mb-0.5">
                    HEATING SYSTEMS
                  </h5>
                  <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr</p>
                </div>
              </div>

              <div className="mt-7.5 flex items-center gap-5">
                <div className="w-15 h-15 rounded-[50%] border border-stroke flex items-center justify-center">
                  <p className="text-black font-semibold text-metatitle2">
                    04
                  </p>
                </div>
                <div className="w-3/4">
                  <h5 className="text-black font-medium text-metatitle2 mb-0.5">
                    COOLING SYSTEMS
                  </h5>
                  <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr</p>
                </div>
              </div>

              <div className="mt-7.5 flex items-center gap-5">
                <div className="w-15 h-15 rounded-[50%] border border-stroke flex items-center justify-center">
                  <p className="text-black font-semibold text-metatitle2">
                    05
                  </p>
                </div>
                <div className="w-3/4">
                  <h5 className="text-black font-medium text-metatitle2 mb-0.5">
                    REFRIGERATION SERVICES
                  </h5>
                  <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr</p>
                </div>
              </div>

              <div className="mt-7.5 flex items-center gap-5">
                <div className="w-15 h-15 rounded-[50%] border border-stroke flex items-center justify-center">
                  <p className="text-black font-semibold text-metatitle2">
                    06
                  </p>
                </div>
                <div className="w-3/4">
                  <h5 className="text-black font-medium text-metatitle2 mb-0.5">
                    DUCTWORK ACCESSORIES
                  </h5>
                  <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr</p>
                </div>
              </div>

              <a
                  href="features"
                  className="flex items-center gap-2.5 text-black my-7.5"
                >
                  <span className="hover:text-orange duration-500">Learn more</span>
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M10.4767 6.16701L6.00668 1.69701L7.18501 0.518677L13.6667 7.00034L7.18501 13.482L6.00668 12.3037L10.4767 7.83368H0.333344V6.16701H10.4767Z" />
                  </svg>
              </a>
            </motion.div>

            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  x: -20,
                },

                visible: {
                  opacity: 1,
                  x: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_left hidden md:block md:w-2/5 relative mx-auto aspect-[2048/1536]"
            >
              <Image
                src="/images/about/industrial-ventilation-system-pipes.jpeg"
                alt="About"
                className="rounded-3xl"
                fill
              />
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutStyleTwo;
