'use client'
import ArrowRight from "@/assets/arrow-right.svg";
import Star from "@/assets/star.png";
import Spring from "@/assets/spring.png";
import { useTransform, motion, useScroll } from "framer-motion";
import { useRef } from "react";
export const CallToAction = () => {
  const refSec = useRef(null);
  const { scrollYProgress } = useScroll({
    target: refSec,
    offset: ['start end', 'end start']
  });
  const translateY = useTransform(scrollYProgress, [0, 1], [170, -170])

  return <section ref={refSec} className="wrapper  bg-gradient-to-b from-white to-[#D2DCFF] py-20 relative overflow-hidden">
    <div>
      <div className="max-w-[500px] mx-auto text-center">
        <h3 className="section-title mt-10">Sign up for free today</h3>
        <p className="section-description text-[21px] mt-6 ">
          Celebrate the joy of accomplishment with an app designed to trac your progress and motivate your efforts.
        </p>
        <div className="flex gap-2 items-center mt-6 justify-center">
          <button className="btn btn-primary">Get for free</button>
          <button className="btn btn-text">Learn More</button>
          <ArrowRight className="text-black cursor-pointer inline-flex" width={20} />
        </div>
      </div>
    </div>
    <motion.img src={Star.src} alt="star image" width={250} height={250}
      className="-left-32 absolute top-0 rotate-30 lg:left-10 max-md:hidden
      lg:w-[320px] lg:h-[320px]
      "
      style={{
        translateY: translateY,
      }}
    />
    <motion.img src={Spring.src} alt="Spring Image"
      width={250} height={250}
      className="-right-12 lg:bottom-0 absolute bottom-6 rotate-30 lg:right-0 max-md:hidden
      lg:w-[320px] lg:h-[320px]
      "
      style={{
        translateY: translateY,
      }}
    />
  </section >;
};
