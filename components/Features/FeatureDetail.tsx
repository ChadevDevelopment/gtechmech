"use client"

import { Feature } from '@/types/feature';
import React, { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "popmotion";
import Image from "next/image";

const variants = {
  enter: (direction: number) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1
  },
  exit: (direction: number) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    };
  }
};

const swipeConfidenceThreshold = 10000;

const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};

const checkIcon = (
  <svg width="24" height="24" viewBox="0 0 24 24" x="0px" y="0px">
  <g>
  <path d="M12,1.875C6.417,1.875,1.875,6.417,1.875,12S6.417,22.125,12,22.125S22.125,17.583,22.125,12S17.583,1.875,12,1.875z
      M12,19.875c-4.342,0-7.875-3.533-7.875-7.875S7.658,4.125,12,4.125S19.875,7.658,19.875,12S16.342,19.875,12,19.875z"/>
  <polygon points="16.205,8.205 11,13.409 8.795,11.205 7.205,12.795 11,16.591 17.795,9.795 	"/>
  </g>
  </svg>
);

const FeatureDetail = ({ feature }: { feature: Feature }) => {
  const { id, title, lists, long_desc, images} = feature;

  const [[page, direction], setPage] = useState([0, 0]);
  const imageIndex = wrap(0, images.length, page);

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  return (
    <>
      <section className="pt-35 lg:pt-45 xl:pt-50 pb-20 lg:pb-25 xl:pb-30">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className="flex flex-col-reverse lg:flex-row gap-7.5 xl:gap-12.5">
            <div className="animate_top rounded-md shadow-solid-13 bg-white border border-stroke p-7.5 md:p-10">
              <div className="mb-10 w-full overflow-hidden ">
                {images.length > 0 ? (
                  <div className="relative aspect-[97/60] w-full sm:aspect-[97/44] flex justify-center">
                    <AnimatePresence initial={false} custom={direction}>
                      <motion.img
                        key={page}
                        src={images[imageIndex]}
                        custom={direction}
                        variants={variants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        className="carousel_img"
                        transition={{
                          x: { type: "spring", stiffness: 300, damping: 30 },
                          opacity: { duration: 0.2 }
                        }}
                        drag="x"
                        dragConstraints={{ left: 0, right: 0 }}
                        dragElastic={1}
                        onDragEnd={(e, { offset, velocity }) => {
                          const swipe = swipePower(offset.x, velocity.x);

                          if (swipe < -swipeConfidenceThreshold) {
                            paginate(1);
                          } else if (swipe > swipeConfidenceThreshold) {
                            paginate(-1);
                          }
                        }}
                      />
                    </AnimatePresence>
                    <div className="absolute top-1/2 left-0 transform -translate-y-1/2 text-white p-1 rounded-full hover:bg-opacity-75 focus:outline-none cursor-pointer z-10"
                        onClick={() => paginate(1)}>
                      <Image className='rounded-full bg-white' src='/images/shape/circled-chevron-left_hires.png' width={42} height={42} alt="title" />
                    </div>
                    <div className="absolute top-1/2 right-0 transform -translate-y-1/2 text-white p-1 rounded-full hover:bg-opacity-75 focus:outline-none cursor-pointer z-10"
                        onClick={() => paginate(-1)}>
                      <Image className='rounded-full bg-white' src='/images/shape/circled-chevron-right_hires.png' width={42} height={42} alt="title" />
                    </div>
                  </div>
                ) : (
                  <div className="w-full flex justify-center items-center">
                    No image available yet
                  </div>
                )}
              </div>

              <h2 className="font-semibold text-3xl 2xl:text-sectiontitle2 text-black mt-11 mb-5">
                {title}
              </h2>

              <div className="blog-details">
                <p>
                  {long_desc}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default FeatureDetail;