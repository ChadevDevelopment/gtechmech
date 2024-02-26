"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from 'next/link';

const Footer = () => {
  return (
    <>
      <footer className="bg-white border-t border-stroke">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">

          <div className="py-20 lg:py-25">
            <div className="flex items-center flex-wrap lg:justify-between gap-8 lg:gap-0">
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
                transition={{ duration: 1, delay: 0.5 }}
                viewport={{ once: true }}
                className="animate_top w-full lg:w-1/4"
              >
                <Link href="/"
                      className="relative"
                >
                  <Image
                    src="/images/logo/logo.png"
                    alt="Logo"
                    priority
                    width={90}
                    height={6}
                    className="px-1"
                  />
                </Link>
              </motion.div>

              <div className="w-full lg:w-2/3 xl:w-8/12 flex flex-col md:flex-row md:justify-between gap-8 md:gap-0 px-3">
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
                  className="animate_top"
                >
                  <h1 className="font-medium text-black text-itemtitle2 mb-9">
                    Navigation
                  </h1>

                  <ul>
                    <li>
                      <Link href="/aboutus">
                        <p className="inline-block hover:text-orange mb-3">
                          About us
                        </p>
                      </Link>
                    </li>
                    <li>
                      <Link href="/features">
                        <p className="inline-block hover:text-orange mb-3">
                          Features
                        </p>
                      </Link>
                    </li>
                    <li>
                      <Link href="/contact">
                        <p className="inline-block hover:text-orange mb-3">
                          Contact
                        </p>
                      </Link>
                    </li>
                  </ul>
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
                  transition={{ duration: 1, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="animate_top"
                >
                  <h1 className="font-medium text-black text-itemtitle2 mb-9">
                    Legal information
                  </h1>

                  <ul>
                    <li>
                      <Link href="/privacy-policy">
                        <p className="inline-block hover:text-orange mb-3">
                          Privacy Policy
                        </p>
                      </Link>
                    </li>
                  </ul>
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
                  transition={{ duration: 1, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="animate_top"
                >
                  <h1 className="font-medium text-black text-itemtitle2 mb-9">
                    Opening hours
                  </h1>
                  <p className="mb-4 w-[90%]">
                    Monday - Friday
                  </p>
                  <p className="mb-4 w-[90%]">
                    07:00am - 12:00pm
                  </p>
                  <p className="mb-4 w-[90%]">
                    13:00pm - 19:00pm
                  </p>
                </motion.div>
              </div>
            </div>
          </div>


          <div className="border-t border-stroke flex flex-wrap flex-col lg:flex-row items-center justify-center gap-5 lg:gap-0 py-7">
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
              className="animate_top"
            >
              <p>&copy; 2024 - G-Tech Mechanical | <a href="https://www.chadev.ch/" className="hover:text-black" target="_blank">chadev.ch</a>
              </p>
            </motion.div>
          </div>
          
        </div>
      </footer>
    </>
  );
};

export default Footer;
