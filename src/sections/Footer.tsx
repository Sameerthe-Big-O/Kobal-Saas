import Logo from "@/assets/logosaas.png";
import Image from "next/image";
import X from '@/assets/social-x.svg';
import Ins from '@/assets/social-insta.svg';
import Pin from '@/assets/social-pin.svg';
import Linkden from '@/assets/social-linkedin.svg';
import Youtube from '@/assets/social-youtube.svg';

const arrayof = ['Features', 'Integration', 'Updates', 'FAQ', 'Pricing'];
const AboutArray = ['About', 'Blog', 'Careers', 'Manisfestio', 'Press'];
const ResourceArray = ['Exampples', 'Community', 'Guides', 'Docs'];
const LegalArray = ['Privacy', 'Terms', 'Security'];

export const Footer = () => {
  return (
    <section className="wrapper bg-black text-white py-10 text-sm">
      <div className="md:flex ">
        <div className="flex flex-col gap-6 flex-1 justify-between ">
          <div className="md:flex md:flex-col justify-between md:w-[300px] ">
            <Image src={Logo} alt="logo" width={40} height={40} />
            <p className="text-white/60 mt-3">
              Effortlessly turn your ideas into a fully functional, responsive, no-code SaaS website.
            </p>
          </div>
          <div className="icon-holder flex justify-start gap-4">
            <Linkden className="icon" />
            <Youtube className="icon" />
            <Pin className="icon" />
            <X className="icon" />
            <Ins className="icon" />
            <Linkden className="icon" />
          </div>
        </div>
        <div className="max-md:mt-10 md:flex md:items-start  gap-6">
          <div>
            <h3 className="mb-4">Product</h3>
            <ul className="flex flex-col gap-4">
              {arrayof.map((item, index) => (
                <li key={index}>
                  <a href="#" className="text-white/60 py-10" >{item}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="max-md:mt-10">
            <h3 className="mb-4">Resources</h3>
            <ul className="flex flex-col gap-4">
              {AboutArray.map((item, index) => (
                <li key={index}>
                  <a href="#" className="text-white/60 py-10">{item}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="max-md:mt-10">
            <h3 className="mb-4">About</h3>
            <ul className="flex flex-col gap-4">
              {ResourceArray.map((item, index) => (
                <li key={index}>
                  <a href="#" className="text-white/60 py-10">{item}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="max-md:mt-10">
            <h3 className="mb-4">Secuirty</h3>
            <ul className="flex flex-col gap-4">
              {LegalArray.map((item, index) => (
                <li key={index}>
                  <a href="#" className="text-white/60 py-10">{item}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section >
  );
};
