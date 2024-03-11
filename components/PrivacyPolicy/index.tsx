"use client";

import React from "react";
import { motion } from "framer-motion";

const PrivacyPolicy = () => {
  return (
    <section className="mx-auto max-w-c-1390 px-7 md:px-11 2xl:px-5 overflow-hidden">
          <div className="flex items-center gap-8 lg:gap-32.5">
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
              className="animate_left"
            >
              <h2 className="relative font-bold text-black text-3xl xl:text-hero mb-6">
                Privacy policy
              </h2>
              
              <h4 className="font-small text-lg xl:text-metatitle3 text-black mt-7.5 mb-3.5">
                Privacy statement
              </h4>
              <h4 className="font-medium text-lg xl:text-itemtitle2 text-black mt-7.5 mb-3.5">
                Collection, processing and use of personal data
              </h4>
              <p>
                We do not collect any personal data from you when you visit this website. 
                Personal data is only collected if you provide it to us via our contact form. 
                This data will only be used to answer your request and then deleted.
              </p>
              <h4 className="font-medium text-lg xl:text-itemtitle2 text-black mt-7.5 mb-3.5">
                Use of own cookies
              </h4>
              <p>
                When you access certain pages, a so-called &quot;session cookie&quot; is set. 
                This is a small text file that is automatically deleted from your computer at the end of the browser session. 
                This file is used exclusively to enable you to use certain applications. You can change the settings in most web browsers so that your browser does not accept new cookies or you can have cookies that have been received deleted. 
                You can usually find out how this works specifically for your browser using its help function.
              </p>
              <h4 className="font-medium text-lg xl:text-itemtitle2 text-black mt-7.5 mb-3.5">
                Google Analytics
              </h4>
              <p>
                This website uses Google Analytics, a web analysis service of Google Inc, 1600 Amphitheatre Parkway, Mountain View, CA 94043, USA. Google Analytics uses &quot;cookies&quot;, which are text files placed on your computer, to help the website analyze how users use the site. 
                Google uses this information on behalf of the operator of this website to evaluate your use of the website, to compile reports on website activity and to provide other services relating to website activity and internet usage to the website operator.
                The IP address transmitted by your browser as part of Google Analytics will not be merged with other Google data. You can prevent the storage of cookies or delete them by selecting the appropriate settings in your browser.
              </p>
              <h4 className="font-medium text-lg xl:text-itemtitle2 text-black mt-7.5 mb-3.5">
              Your rights
              </h4>
              <p>
                In principle, you have the rights to information, correction, deletion, restriction, data portability, revocation and objection. 
                If you believe that the processing of your data violates data protection law or your data protection rights have been violated in any other way, you can lodge a complaint with the supervisory authority. 
                You can reach us at the following contact details <br /> <br />
                <a href="https://maps.app.goo.gl/zvuqCPnQ7W7uwvNa9" className="hover:text-orange" target="_blank">
                  G-Tech Mechanical <br />
                  41 Chancellor Dr, Woodbridge <br />
                  ON L4L 7M9, Canada <br /> <br />
                </a>
                <a href="mailto:info@gtechmech.com" className="hover:text-orange">info@gtechmech.com</a>
              </p>
            </motion.div>
          </div>
    </section>
  );
};

export default PrivacyPolicy;
