'use client'
import Image from "next/image";
import Product from "@/assets/product-image.png";
import Pyramid from "@/assets/pyramid.png";
import SocialInsta from "@/assets/tube.png";
import Leaf from "@/assets/Icon.svg";
import Lock from "@/assets/Icon-2.svg";
import Security from "@/assets/icon-3.svg";
import Bell from "@/assets/icon-4.svg";
import { useTransform, motion, useScroll } from "framer-motion";
import { useRef } from "react";

const array = [
  {
    icon: Leaf,
    title: "Project Management",
    description: "Track your progress and motivate your efforts every day.",
  },
  {
    icon: Security,
    title: "Goal Setting and tracking",
    description: "Set and track goals with manageable task breakdowns.",
  },
  {
    icon: Bell,
    title: "Secure data encryption",
    description: "Ensure your data’s safety with top-tier encryption.",
  },
  {
    icon: Lock,
    title: "Privacy Protection",
    description:
      "Safeguard your personal information with advanced privacy measures.",
  },
];

export const ProductShowcase = () => {
  const refSec = useRef(null);
  const { scrollYProgress } = useScroll({
    target: refSec,
    offset: ['start end', 'end start']
  });
  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150])
  return (
    <section ref={refSec} className="bg-gradient-to-b from-white to-[#D2DCFF] py-20 ">
      <div >
        <div className="max-w-[540px] mx-auto">
          <div className="flex justify-center">
            <p className="tag inline-flex font-bold">Boost your Productivity</p>
          </div>
          <h2 className="section-title mt-5">
            A more effective way to track progress
          </h2>
          <p className="text-center text-[22px] leading-[30px] tracking-tight mt-8 text-[#010D3E] 
          sm:px-2
          ">
            Effortlessly turn your ideas into a fully functional, responsive,no-code SaaS website in just minutes with the set of free components
            for Framer.
          </p>
        </div>
        <div className="relative overflow-x-clip mt-10 md:px-4">
          <Image src={Product} alt="product image" className="w-70 h-full" />
          <motion.img
            src={Pyramid.src}
            alt="product image"
            className="md:absolute md:-right-[130px] md:-top-[150px] lg:-right-[70px]
            lg:top-20 max-md:hidden"
            width={260}
            height={260}
            style={{
              translateY: translateY,
            }}

          />
          <motion.img
            src={SocialInsta.src}
            alt="product image"
            className="absolute lg:bottom-[140px] lg:-left-20 max-md:hidden md:bottom-20 md:-left-[100px]"
            width={248}
            height={248}
            style={{
              translateY: translateY,
            }}
          />
        </div>
        <div
          className="md:flex flex-wrap md:justify-center gap-10
          mt-10  mb-40 wrapper 
          sm:gap-8
          "
        >
          {array.map((item, index) => (
            <div
              key={index}
              className="text-start px-6 py-4 border rounded  lg:flex-1 md:w-[300px] border-transparent text-lg flex flex-col items-start "

            >
              <item.icon />
              <h3 className="font-bold mt-4">{item.title}</h3>
              <p className="mt-2">{item.description}</p>
              {/* <div className="flex ">
                <button className="btn btn-text ">Learn More</button>
              </div> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


//*often we have cases like where we want that like content should get this much width and then want to center in that case we can simple margin-auto but first we've to fixed the width