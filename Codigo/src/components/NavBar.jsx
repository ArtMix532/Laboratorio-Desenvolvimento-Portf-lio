import Logo from "../assets/Logo.png";
import { MenuDefault } from "./MenuDeFaut";

function NavBar() {
  return (
    <div className="flex text-center w-screen justify-around items-center py-8 bg-slate-300 h-[7.5vh]">
      <img src={Logo} alt="" className=" h-10 flex justify-center" />
      <ul className="md:block md:space-x-16 md:p-1 md:w-3/4  hidden">
        <a href="#Home" className="text-blue-900 font-oswald font-medium">
          Home
        </a>
        <a href="#About" className="text-blue-900 font-oswald font-medium">
          About
        </a>
        <a href="#Projects" className="text-blue-900 font-oswald font-medium">
          Projects
        </a>
        <a href="#Portfolio" className="text-blue-900 font-oswald font-medium">
          Portfolio
        </a>
        <a href="#Contact" className="text-blue-900 font-oswald font-medium">
          Contact
        </a>
      </ul>
      <div className=" md:hidden px-6">
        <MenuDefault />
      </div>
    </div>
  );
}

export default NavBar;
