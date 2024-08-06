'use client'
import Celestial from '../assets/logo-celestial.png';
import Echo from '../assets/logo-echo.png';
import Apex from '../assets/logo-apex.png';
import Acme from '../assets/logo-acme.png';
import Pluse from '../assets/logo-pulse.png';
import Quantum from '../assets/logo-quantum.png';
import Image from 'next/image';
import { motion } from 'framer-motion';


let logoArray = [
  Celestial,
  Echo,
  Apex,
  Acme,
  Pluse,
  Quantum,
];
export const LogoTicker = () => {
  return <section className='py-8 md:py-12 bg-white'>
    <div className='mt-4'>
      <div className='flex overflow-hidden
      [mask-image:linear-gradient(to_right,transparent,black,transparent)]
      '>
        <motion.div className="flex gap-14 flex-none "
          animate={{
            translateX: '-50%',
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
            repeatType: "loop"
          }}
        >
          {
            logoArray.map((logo, i) => (
              <Image src={logo} alt='brand'
                key={i}
                className='logo-ticker-image'
              />
            ))
          }
          {
            logoArray.map((logo, i) => (
              <Image src={logo} alt='brand'
                key={i}
                className='logo-ticker-image'
              />
            ))
          }
        </motion.div>
      </div>
    </div>
  </section>
};
