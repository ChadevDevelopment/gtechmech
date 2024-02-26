"use client";

import { motion } from "framer-motion";

type HeaderInfo = {
  title: string;
  description: string;
};

const SectionHeaderTwo = ({ headerInfo }: { headerInfo: HeaderInfo }) => {
  const { title, description } = headerInfo;

  return (
    <>
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
        className="animate_top text-start mb-8"
      >
        <h2 className="font-bold text-3xl xl:text-sectiontitle3 text-black md:w-4/5 xl:w-1/2 mt-8 mb-4">
          {title}
        </h2>
        <p className="md:w-4/5 lg:w-3/5 xl:w-[46%]">{description}</p>
      </motion.div>
    </>
  );
};

export default SectionHeaderTwo;
