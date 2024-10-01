import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#fafafa] py-10  px-6 md:px-0 md:mx-auto border-t">
      <div className="flex flex-col  justify-between gap-y-3 xl:w-4/5 2xl:w-[68%] mx-auto">
        <h1 className="text-3xl md:text-5xl font-medium ">
          <p className="text-red-600 font-bold font-mono">Walkers.</p>
        </h1>
        <p className="text-left  text-xl  text-gray-500">+(94) 774 458 225</p>
        <p className="text-left  text-xl  text-gray-500">
          info@walkers.com
        </p>
      </div>

      <div className="flex md:justify-center gap-x-4 mt-10">
        © 2025 Walkers (PVT) Ltd. All Rights Reserved.
        <Link href="/" className="text-blue-500">
        Terms and Conditions
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
