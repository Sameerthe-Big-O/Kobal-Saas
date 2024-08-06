import ArrowRight from "../assets/arrow-right.svg";
import Logo from "@/assets/logosaas.png";
import Image from "next/image";
import Link from "next/link";
import MenuIcon from "@/assets/menu.svg";
export const Header = () => {
  return (
    <header className="sticky top-0 z-50">
      <div className="flex justify-center items-center py-3 bg-black text-white text-sm gap-2">
        <p className="max-md:hidden text-white/60">
          This page is included in a free SaaS Website Kit.
        </p>
        <div className="flex gap-1 items-center">
          <p> View the complete Kit</p>
          <ArrowRight className="h-4 inline-flex w-4 justify-center items-center" />
        </div>
      </div>

      <div className="py-5 wrapper backdrop-blur-sm">
        <div className="flex items-center justify-between">
          <Image src={Logo} alt="logo" width={40} height={40} />
          <MenuIcon className="h-5 w-20 cursor-pointer md:hidden" />

          <nav className="hidden md:flex items-center justify-center">
            <ul className="flex gap-4 text-black/60 items-center">
              <li>
                <Link href={"#about"}>About</Link>
              </li>
              <li>
                <Link href={"#Features"}>Features</Link>
              </li>
              <li>
                <Link href={"#Customer"}>Customer</Link>
              </li>
              <li>
                <Link href={"#Updates"}>Updates</Link>
              </li>
              <li>
                {" "}
                <Link href={"#help"}>Help</Link>
              </li>
              <button className="btn btn-primary">
                {" "}
                Get for free{" "}
              </button>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};


//*always go each section by section
//*always go first mobile  first approach
//*the main flex-inline made the parent inline as well
//try to visualize more and break into smaller elements
