"use client";

import React from "react";
import { motion } from "framer-motion";

const About = () => {
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
            About us
          </h2>
          <h2 className="font-small text-lg xl:text-metatitle3 text-black mb-6">
            About G-Tech,
          </h2>
          <p>
            At G Tech, we have a passion for renewable energy. 
            Our company was founded with the vision of revolutionizing the way we generate and consume energy. 
            With a team of experienced professionals and cutting-edge solar technology, we strive to make a positive impact on the environment while delivering exceptional results to our customers.
            <br /> <br />
            We have over 5 years of experience and we provide quality workmanship at all times. 
            Our services are available to customers in Toronto, Gta, Hamilton, Oakville, Burlington, Guelf, Dunham Region and more..
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
