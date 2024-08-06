'use client'
import Cog from "@/assets/cog.png";
import Image from "next/image";
import ArrowRight from "@/assets/arrow-right.svg";
import Cylinder from "@/assets/cylinder.png";
import NoodleImage from "@/assets/noodle.png";
import { motion, useScroll, useTransform, useMotionValueEvent } from 'framer-motion'
import { useRef } from "react";
export const Hero = () => {

  const heroRef = useRef(null);
  //*basically here we're telling the points where we want framer to start consider scroll recognize
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start end", "end end"]
  });
  //offset we basically tell that we shoudld it start and end
  //*useTransform let's us control the starting and ending value
  const transFormY = useTransform(scrollYProgress, [0, 1], [150, -150]);

  useMotionValueEvent(scrollYProgress, 'change', (value) => console.log(value))
  return (
    <section
      ref={heroRef}
      className="pt-8 pb-20 wrapper overflow-clip "
      style={{
        background: "radial-gradient(ellipse 200% 100% at bottom left, #183EC2, #EAEEFE 100%)"
      }}
    >
      <div className="md:flex items-center lg:gap-10">
        <div className="md:w-[475px] lg:w-[40%]">
          <p className="tag inline-flex">
            Version 2.0 is here
          </p>
          <h1 className="text-5xl md:text-7xl heading">
            Pathway to productivity
          </h1>
          <p className="section-description text-start">
            Celebrate the joy of accomplishment with an app designed to track
            your progress, motivate your efforts, and celebrate your successes.
          </p>
          <div className="flex gap-2 items-center mt-4">
            <button className="btn btn-primary">Get for free</button>
            <button className="btn btn-text">Learn More</button>
            <ArrowRight className="text-black cursor-pointer" width={20} />
          </div>
        </div>

        <div className="max-md:mt-10 md:h-[648px] flex-1 relative">
          <motion.img
            src={Cog.src}
            alt="Cog"
            animate={{
              translateY: [-30, 30],
            }}
            transition={{
              repeat: Infinity,
              repeatType: "mirror",
              duration: 2,
              ease: "easeInOut"
            }}

            className="md:h-full md:w-auto md:max-w-none md:absolute lg:right-5
            "
          />
          <motion.img
            src={Cylinder.src}
            style={{
              translateY: transFormY
            }}
            alt="Cylinder Image"
            className="max-md:hidden md:absolute  md:top-10  md:-left-8 lg:-left-18
            "
            width={200}
            height={200}
          />
          <motion.img
            src={NoodleImage.src}
            style={{
              rotate: 30,
              translateY: transFormY
            }}
            alt="noodle image"
            className="max-lg:hidden absolute -bottom-[250px] right-[-40px] z-100
            "
            width={220}
            height={220}
          />
        </div>
      </div>
    </section>
  );
};

//*the backgroup clip says that only the text not the background, or basically this property let us choose what how much background color or image should extent
//*remember that when it comes to the gradient function we first tell the direction like towward right or what but remember that the direction we told is the second color value means that we said the second color paint direction we told eg (to top left,red,blue) if you think that red be on top left you're wrong it'll be blue meams second color takes places or basicall we tell the ending directon and seccond color will that as place

//*when we  have cases like where we have the one image that absolute at right and some content at, in that case we usually give the either the fix width or width in percentage

//*when we want to position the image in the hero section then try to actually put position absolute on that image not the parent div
