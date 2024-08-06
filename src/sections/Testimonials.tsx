
'use client'
import avatar1 from "@/assets/avatar-1.png";
import avatar2 from "@/assets/avatar-2.png";
import avatar3 from "@/assets/avatar-3.png";
import avatar4 from "@/assets/avatar-4.png";
import avatar5 from "@/assets/avatar-5.png";
import avatar6 from "@/assets/avatar-6.png";
import avatar7 from "@/assets/avatar-7.png";
import avatar8 from "@/assets/avatar-8.png";
import avatar9 from "@/assets/avatar-9.png";
import { motion } from "framer-motion"
import React from "react";

const testimonials = [
  {
    text: "As a seasoned designer always on the lookout for innovative tools, Framer.com instantly grabbed my attention.",
    imageSrc: avatar1.src,
    name: "Jamie Rivera",
    username: "@jamietechguru00",
  },
  {
    text: "Our team's productivity has skyrocketed since we started using this tool.",
    imageSrc: avatar2.src,
    name: "Josh Smith",
    username: "@jjsmith",
  },
  {
    text: "This app has completely transformed how I manage my projects and deadlines.",
    imageSrc: avatar3.src,
    name: "Morgan Lee",
    username: "@morganleewhiz",
  },
  {
    text: "I was amazed at how quickly we were able to integrate this app into our workflow.",
    imageSrc: avatar4.src,
    name: "Casey Jordan",
    username: "@caseyj",
  },
  {
    text: "Planning and executing events has never been easier. This app helps me keep track of all the moving parts, ensuring nothing slips through the cracks.",
    imageSrc: avatar5.src,
    name: "Taylor Kim",
    username: "@taylorkimm",
  },
  {
    text: "The customizability and integration capabilities of this app are top-notch.",
    imageSrc: avatar6.src,
    name: "Riley Smith",
    username: "@rileysmith1",
  },
  {
    text: "Adopting this app for our team has streamlined our project management and improved communication across the board.",
    imageSrc: avatar7.src,
    name: "Jordan Patels",
    username: "@jpatelsdesign",
  },
  {
    text: "With this app, we can easily assign tasks, track progress, and manage documents all in one place.",
    imageSrc: avatar8.src,
    name: "Sam Dawson",
    username: "@dawsontechtips",
  },
  {
    text: "Its user-friendly interface and robust features support our diverse needs.",
    imageSrc: avatar9.src,
    name: "Casey Harper",
    username: "@casey09",
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

export const Testimonials = () => {

  return (
    <section className="wrapper bg-white py-10">
      <div className="max-w-[400px] mx-auto text-center">
        <div className="inline-flex section-title mt-10">Testimonials</div>
        <h2 className="section-description">What our users say</h2>
      </div>
      <div className="flex justify-center gap-6 mt-10">
        <div className="[mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] flex gap-10">
          <motion.div className="mt-5 flex flex-col gap-4"
            animate={{
              translateY: '-50%'
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              repeatType: "loop",
              ease: 'linear',
            }}
          >
            {[...new Array(2)].fill(0).map((_, index) => (
              <React.Fragment key={index}>
                {firstColumn.map((testimonial, index) => (
                  <div key={index} className="card" >
                    <p >{testimonial.text}</p>
                    <div className="flex mt-5 gap-2 items-center">
                      <img
                        src={testimonial.imageSrc}
                        alt={testimonial.name}
                        className="h-full"
                        width={40}
                        height={40} />
                      <div className="flex flex-col">
                        <h3 className="font-medium tracking-tight leading-5" >{testimonial.name}</h3>
                        <p className="leading-5 tracking-tight" >{testimonial.username}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </React.Fragment>
            ))}

          </motion.div>


          <motion.div className="max-md:hidden mt-5 flex flex-col gap-4"
            animate={{
              translateY: '-50%'
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              repeatType: "loop",
              ease: 'linear',

            }}
          >
            {[...new Array(2)].fill(0).map((_, index) => (
              <React.Fragment key={index}>
                {secondColumn.map((testimonial, index) => (
                  <div key={index} className="card" >
                    <p >{testimonial.text}</p>
                    <div className="flex mt-5 gap-2 items-center">
                      <img
                        src={testimonial.imageSrc}
                        alt={testimonial.name}
                        className="h-full"
                        width={40}
                        height={40} />
                      <div className="flex flex-col">
                        <h3 className="font-medium tracking-tight leading-5" >{testimonial.name}</h3>
                        <p className="leading-5 tracking-tight" >{testimonial.username}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </React.Fragment>
            ))}
          </motion.div>
          <motion.div className="max-lg:hidden mt-5 flex flex-col gap-4"
            animate={{
              translateY: '-50%'
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              repeatType: "loop",
              ease: 'linear',
            }}
          >
            {[...new Array(2)].fill(0).map((_, index) => (
              <React.Fragment key={index}>
                {thirdColumn.map((testimonial, index) => (
                  <div key={index} className="card" >
                    <p >{testimonial.text}</p>
                    <div className="flex mt-5 gap-2 items-center">
                      <img
                        src={testimonial.imageSrc}
                        alt={testimonial.name}
                        className="h-full"
                        width={40}
                        height={40} />
                      <div className="flex flex-col">
                        <h3 className="font-medium tracking-tight leading-5" >{testimonial.name}</h3>
                        <p className="leading-5 tracking-tight" >{testimonial.username}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </React.Fragment>
            ))}
          </motion.div>
        </div>
      </div>
    </section >
  );
};
