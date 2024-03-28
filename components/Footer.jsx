import Image from "next/image";
import Logo from "@/assets/images/logo.png";
function Footer() {
  return (
    <div
      className="  flex md:flex-row flex-col  px-2 rounded-xl justify-between
     mx-auto bg-slate-300 items-center flex-wrap w-screen  mt-auto"
    >
      <div className="flex items-center  mt-2 md:mt-0">
        <Image width={50} height={50} src={Logo} alt="" />
      </div>
      <div className="flex  gap-3 mt-2 md:mt-0">
        <span className="md:text-xl text-sm font-bold">Properties</span>

        <span className="md:text-xl text-sm font-bold">Terms of Service</span>
      </div>
      <div>
        <span className="text-slate-500 md:text-xl text-sm">
          @2024 PropertyType All Right Serviced
        </span>
      </div>
    </div>
  );
}

export default Footer;
