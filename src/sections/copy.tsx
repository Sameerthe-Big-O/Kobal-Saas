import "./her.css";
import Cog from "@/assets/cog.png";
import Image from "next/image";
import ArrowRight from "@/assets/arrow-right.svg";
import Cylinder from "@/assets/cylinder.png";
export const Hero = () => {
    return (
        <section className="pt-8 pb-20 px-8  overflow-hidden "
            style={{ background: 'radial-gradient(ellipse 200% 100% at bottom left, #183EC2, #EAEEFE 66%)' }}
        >
            <div className="md:flex relative h-[100%]">
                <div className="md:w-[62%]  md:flex md:flex-col h-[100%] md:gap-4">
                    <p className="p-3 py-1 rounded-full border-[2px] border-[#222]/10 text-sm tracking-tight w-[150px]">
                        Version 2.0 is here
                    </p>
                    <h1 className="text-5xl md:text-[75px] font-semibold tracking-tight bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text mt-5">
                        Pathway to
                        productivity
                    </h1>
                    <p className="text-[#010D3E] text-xl py-4 tracking-tight mt-4">
                        Celebrate the joy of accomplishment with an app designed to track
                        your progress, motivate your efforts, and celebrate your successes.
                    </p>
                    <div className="flex gap-2 items-center mt-4">
                        <button className="btn btn-primary">Get for free</button>
                        <button className="b4n btn-text">Learn More</button>
                        <ArrowRight className="text-black cursor-pointer" width={20} />
                    </div>
                </div>
                <Image src={Cylinder} alt='Cylinder Image' className="max-md:hidden md:absolute md:top:0 md:right-[90px] md:top-[-50px] w-[200px]  [200px]" />
                <div className="max-md:mt-10  md:absolute md:right-[-400px] 
         flex-1
        ">
                    <Image src={Cog} alt="Cog" className="h-[600px] md:w-[700px] cover" />
                </div>
            </div>
        </section>
    );
};