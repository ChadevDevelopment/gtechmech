
import { Feature } from "@/types/feature";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const SingleFeature = ({ feature }: { feature: Feature }) => {
  const { id, icon, title, description } = feature;

  return (
    <>
      <motion.div
        variants={{
          hidden: {
            opacity: 0,
            y: -10,
          },

          visible: {
            opacity: 1,
            y: 0,
          },
        }}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="animate_top border border-white shadow-solid-3 rounded-lg p-7.5 xl:p-12.5 transition-all hover:shadow-solid-4 z-10 bg-white"
      >
        <Link href={`/features/${id}`}>
          <div className="flex items-center justify-start rounded-[4px]w-16 h-16 relative">
            <Image src={icon} width={36} height={36} alt="title" />
          </div>
          <h3 className="font-semibold text-xl xl:text-itemtitle text-black mt-7.5 mb-5">
            {title}
          </h3>
          <p>{description}</p>

        </Link>
      </motion.div>
    </>
  );
};

export default SingleFeature;
