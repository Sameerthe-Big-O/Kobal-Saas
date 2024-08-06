import CheckIcon from "@/assets/check.svg";
import { useTransform, motion } from "framer-motion";
import { twMerge } from "tailwind-merge";

const pricingTiers = [
  {
    title: "Free",
    monthlyPrice: 0,
    buttonText: "Get started for free",
    popular: false,
    inverse: false,
    features: [
      "Up to 5 project members",
      "Unlimited tasks and projects",
      "2GB storage",
      "Integrations",
      "Basic support",
    ],
  },
  {
    title: "Pro",
    monthlyPrice: 9,
    buttonText: "Sign up now",
    popular: true,
    inverse: true,
    features: [
      "Up to 50 project members",
      "Unlimited tasks and projects",
      "50GB storage",
      "Integrations",
      "Priority support",
      "Advanced support",
      "Export support",
    ],
  },
  {
    title: "Business",
    monthlyPrice: 19,
    buttonText: "Sign up now",
    popular: false,
    inverse: false,
    features: [
      "Up to 500 project members",
      "Unlimited tasks and projects",
      "200GB storage",
      "Integrations",
      "Dedicated account manager",
      "Custom fields",
      "Advanced analytics",
      "Export capabilities",
      "API access",
      "Advanced security features",
    ],
  },
];


//*remember that use tailindMerge
//*learn gradient to create beautifull background
//*created utility
//*
export const Pricing = () => {
  return (
    <section className="wrapper py-20 bg-white">
      <div className="max-w-[400px] mx-auto text-center">
        <h3 className="section-title mt-10">Pricing</h3>
        <p className="section-description text-[21px] mt-4">
          Free forever, Upgrade for unlimited tasks, better security, and
          exclusive features.
        </p>
      </div>
      <div className="mt-20 flex max-lg:flex-col gap-10 lg:items-end lg:justify-center">
        {pricingTiers.map((tier, index) => (
          <div
            key={index}
            className={twMerge("p-10 border-[#e0dfdf] border-[2px] rounded-3xl shadow-[0_7px_14px_#EAEAEA] w-full max-w-[400px] mx-auto", tier.inverse === true && 'border-black text-white bg-black')}
          >
            <div className="header mb-4 flex justify-between">
              <h4 className={twMerge(`text-lg font-bold text-black/50`, tier.inverse === true && 'text-white/60')}>{tier.title}</h4>
              {tier.popular && (
                <div className="inline-flex text-sm px-4 py-1.5 rounded-xl border border-white/20 items-center">
                  <span className="bg-gradient-to-r from-[#DD7DDF] via-[#E1CD86] via-[#BBCB92] via-[#71C2EF] to-[#3BFFFF] font-medium text-transparent bg-clip-text">
                    Most Popular
                  </span>
                </div>
              )}
            </div>
            <p className="text-3xl tracking-tight leading-none font-bold">
              ${tier.monthlyPrice}
              <span className={twMerge("text-grey tracking-tight font-bold text-sm", tier.inverse === true && 'text-white/60')}>/month</span>
            </p>
            <button
              className={twMerge("mt-8 w-full py-2 px-4 rounded-lg bg-black text-white", tier.inverse === true && 'text-black bg-white')}
            >
              {tier.buttonText}
            </button>
            <ul className="flex flex-col gap-5 mt-8">
              {tier.features.map((feature, i) => (
                <li key={i} className="flex gap-2 text-sm items-center">
                  <CheckIcon className="h-6 w-6" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section >
  );
};

//*first step is break into html structure
//*then display the content step by step
