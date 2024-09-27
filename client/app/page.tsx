"use client";

import { AnimatedBeamMultipleOutputDemo } from "@/components/demos/animated-beam-demo";
import { AnimatedShinyTextDemo } from "@/components/demos/animated-shiny-text-demo";
import BoxRevealDemo from "@/components/demos/box-reveal-demo";
import { CoverDemo } from "@/components/demos/cover-demo";
import { ScrollBasedVelocityDemo } from "@/components/demos/scroll-based-velocity-demo";
import { WordPullUpDemo } from "@/components/demos/word-pull-up-demo";
import BoxReveal from "@/components/magicui/box-reveal";
import NumberTicker from "@/components/magicui/number-ticker";
import { InfiniteMovingLogos } from "@/components/ui/infinite-moving-logos";
import Image from "next/image";
import Link from "next/link";
import { PiCheckBold } from "react-icons/pi";
import { Link as ScrollLink, Element } from "react-scroll";
import { IconStarFilled } from "@tabler/icons-react";
import { ShootingStarsAndStarsBackgroundDemo } from "@/components/demos/shooting-stars-demo";
import LetsMakeThingsHappenSection from "@/components/ui/lets-make-things-happen";



const services = [
  {
    icon: "/images/Services_1.jpg",
    title: "Finance & Accounting",
    description:
      "In today’s fast-paced business environment, managing finances efficiently is crucial for success. Our Finance and Accounting BPO services provide businesses with the expertise and technology to streamline operations, enhance accuracy, and ensure compliance. Whether you're a small start-up or a large corporation, we tailor our solutions to meet your specific needs.",
  },
  {
    icon: "/images/Services_2.jpg",
    title: "IT Support & Data Entry ",
    description:
      " In the current world where everything is moving so fast especially with the introduction of technology it is important for a business to have good IT support and proper handling of data. The Business Process Outsourcing services such as IT Support and Data Entry are designed to make your business more efficient and effective and enable you to accomplish your organizational objectives",
  },
  {
    icon: "/images/Services_3.jpg",
    title: "Zmedia Digital Solutions ",
    description:
      "In the current world where everything is moving so fast especially with the introduction of technology it is important for a business to have good IT support and proper handling of data. The Business Process Outsourcing services such as IT Support and Data Entry are designed to make your business more efficient and effective and enable you to accomplish your organizational objectives",
  },
  
];

export default function Home() {
  return (
    <div
//      className="overflow-clip 
//  inset-0 
//  -z-10 h-full w-full bg-[#fafafa]
//   bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)]
//    bg-[size:14px_24px]"
  > 
<video
  className="absolute top-0 left-0 w-full h-full object-cover -z-10 filter blur-[2px]"
  src="/images/video.mp4"
  autoPlay
  loop
  muted
/>

      <Element
        name="top"
        className="overflow-hidden rounded-[14px] top-8 sticky md:mx-auto z-50 
   xl:w-4/5 2xl:w-[90%] bg-gray-200 flex items-center 
   justify-between py-6 px-4 md:px-8 mx-6"
      >
        <Link href={"/"}>
        <h1 className="text-5xl font-bold text-red-700">.Walkers.</h1>
          {/* <Image
            src={"/logo/logo.webp"}
            alt="Logo"
            width={1000}
            height={1000}
            className="w-28"
          /> */}
        </Link>

        <div className="absolute right-1/2 translate-x-1/2 transform">
          <div className="hidden md:flex gap-x-16 items-center text-gray-800 font-bold text-lg cursor-pointer">
            <Link href={"/showcase"} className="hover:text-blue-700 text-lg">
              Our Services
            </Link>

            <ScrollLink
              to="services"
              smooth={true}
              className="hover:text-blue-500 text-lg"
            >
              Projects
            </ScrollLink>

            <ScrollLink
              to="process"
              smooth={true}
              className="hover:text-blue-500 text-lg"
            >
              About
            </ScrollLink>

            <ScrollLink
              to="guarentees"
              smooth={true}
              className="hover:text-blue-500 text-lg"
            >
              Clients
            </ScrollLink>

            <ScrollLink
              to="guarentees"
              smooth={true}
              className="hover:text-blue-500 text-lg"
            >
              Guarentees
            </ScrollLink>
          </div>
        </div>

        <div className="flex items-center gap-x-4">
          <a href="" className="hidden lg:flex">
            <button className="px-4 py-3 rounded-md flex items-center gap-x-3  border-2 font-bold
  border-black hover:bg-[#4bf765]  duration-200
     hover:shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)] dark:shadow-[1px_1px_rgba(255,255,255),2px_2px_rgba(255,255,255),3px_3px_rgba(255,255,255),4px_4px_rgba(255,255,255),5px_5px_0px_0px_rgba(255,255,255)] ">
              +(94) 77 5879225
            </button>
          </a>

          <Link
            href={"/meeting"}
            className="
  py-3 
  px-6
  text-lg 
  hover:bg-[#abcbff]
  rounded-[6px]
  border-2
  border-black
  text-white
  bg-[#121212]
  transition
  duration-200
     hover:shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)] dark:shadow-[1px_1px_rgba(255,255,255),2px_2px_rgba(255,255,255),3px_3px_rgba(255,255,255),4px_4px_rgba(255,255,255),5px_5px_0px_0px_rgba(255,255,255)] "
          >
            Hire Us Now
          </Link>
        </div>
      </Element>

<main className="relative md:pb-4">
  {/* Background Video */}
  
  
  <div className="md:px-0 mx-6 xl:w-4/5 2xl:w-[68%] md:mx-auto mt-14 relative z-10">
    <AnimatedShinyTextDemo />

    <h1>
      <CoverDemo />
    </h1>
    <p className="md:text-center text-xl md:text-2xl my-6 md:my-10 md:w-4/5 mx-auto text-gray-900 font-bold">
      Schedule a call with us to discuss your project and get a quote in minutes
    </p>

    <div className="flex md:justify-center items-center gap-x-4">
      <Link
        href="/meeting"
        className="py-3 px-10 md:px-16 md:text-xl hover:bg-[#abcbff] rounded-[6px] border-2 border-black dark:border-white bg-[#121212] text-white transition duration-200 hover:shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)] dark:shadow-[1px_1px_rgba(255,255,255),2px_2px_rgba(255,255,255),3px_3px_rgba(255,255,255),4px_4px_rgba(255,255,255),5px_5px_0px_0px_rgba(255,255,255)]"
      >
        Hire Us Now
      </Link>
      <Link
        href={"/showcase"}
        className="bg-white py-3 px-10 md:px-16 md:text-xl border-4 border-black rounded-[6px] hover:shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)] dark:shadow-[1px_1px_rgba(255,255,255),2px_2px_rgba(255,255,255),3px_3px_rgba(255,255,255),4px_4px_rgba(255,255,255),5px_5px_0px_0px_rgba(255,255,255)]"
      >
        Our Projects
      </Link>
    </div>

    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 items-center text-left md:justify-items-center md:mx-auto mt-10 md:mt-16">
      <BoxReveal boxColor={"#3b82f6"} duration={0.5}>
        <p className="md:text-xl font-semibold flex gap-x-2 md:gap-x-4 items-center text-black">
          <PiCheckBold className="text-xl text-blue-600" />
          Design
        </p>
      </BoxReveal>
      <BoxReveal boxColor={"#3b82f6"} duration={0.5}>
        <p className="md:text-xl font-semibold flex gap-x-2 md:gap-x-4 items-center text-black">
          <PiCheckBold className="text-xl text-blue-600" />
          Development
        </p>
      </BoxReveal>
      <BoxReveal boxColor={"#3b82f6"} duration={0.5}>
        <p className="md:text-xl font-semibold flex gap-x-2 md:gap-x-4 items-center text-black">
          <PiCheckBold className="text-xl text-blue-600" />
          Marketing
        </p>
      </BoxReveal>
      <BoxReveal boxColor={"#3b82f6"} duration={0.5}>
        <p className="md:text-xl font-semibold flex gap-x-2 md:gap-x-4 items-center text-black">
          <PiCheckBold className="text-xl text-blue-600" />
          Strategy
        </p>
      </BoxReveal>
    </div>

    <div className="md:flex items-center justify-between gap-y-4 my-10 gap-x-28 mx-auto text-white">
      <div className="md:w-2/5">
        <h1 className="text-2xl font-medium text-blue-300  w-4/5">
          Trusted by fast moving brands worldwide
        </h1>

        <div className="flex my-6 gap-x-5 w-full">
          <div>
            <h1 className="text-blue-500 text-3xl md:text-5xl ">
              <NumberTicker value={150} className="text-white"  /> +
              <p className="text-orange-400 text-sm md:text-md">
                Happy Clients
              </p>
            </h1>
          </div>

          <div className="w-px bg-gray-300 self-stretch"></div>

          <div className="flex-1 min-w-0">
            <h1 className="text-blue-500 text-3xl md:text-5xl whitespace-nowrap overflow-hidden">
              <NumberTicker value={30} className="text-white" /> +
              <p className="text-orange-400 text-sm md:text-md ">
                Projects Completed
              </p>
            </h1>
          </div>
        </div>
      </div>

      <section className="overflow-hidden mt-10 md:w-4/5">
        <InfiniteMovingLogos
          speed="1500"
          direction="left"
          items={[
            {
              logo: "/images/logo.png",
              name: "Logo",
            },
            {
              logo: "/images/logo.png",
              name: "Logo",
              
            },
          ]}
        />
      </section>
    </div>
  </div>
</main>


      {<Element name="service">
        <div className="md:px-0 mx-6 xl:w-4/5 2xl:w-[75%] md:mx-auto ">
        <h1>
          <WordPullUpDemo />
        </h1>
        <p className="md:text-center py-4 md:w-full mx-auto text-xl md:text-2xl text-blue-500">
        All of our services are to help your business stand out 
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10 mb-10">
            {services.map((service) => (
              <div
                key={service.title}
                className="flex flex-col justify-between h-full space-y-4 text-center bg-blue-50 p-4 cursor-pointer hover:scale-105 transition-transform rounded-md font-bold"
              >
                <Image
                  src={service.icon}
                  width={15000}
                  height={15000}
                  className="object-contain bg-gray-100 p-4 w-full h-90 rounded-md"
                  alt="image"
                />
                <h1 className="text-xl font-medium">{service.title}</h1>
                <p className="text-gray-500 text-justify">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Element> }
{/* 
       <section className="py-20">
        <ScrollBasedVelocityDemo />
      </section>

      <Element name="process">
        <main className="md:px-0 mx-6 md:mx-auto">
        <h1 className="text-3xl md:text-5xl md:text-center font-medium flex items-center gap-x-2 mx-auto justify-center">
        Our{" "}
            <span className="text-blue-500 flex gap-x-1 items-center">
              {" "}
              <Image
                src={"/icons/squiggle.svg"}
                width={10000}
                height={10000}
                className="w-6"
                alt="image"
              />
              Creative
              <Image
                src={"/icons/star.svg"}
                width={10000}
                height={10000}
                className="w-6 mb-8"
                alt="image"
              />
            </span>{" "}
            Process
          </h1>

          <p className="text-center 
          py-4 md:w-1/2 mx-auto 
          text-xl md:text-2xl text-gray-500">
            All of our services are designed to help your business to get
            noticed.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center w-full md:w-1/2 mx-auto">
          <div className="w-full md:w-1/2 order-2 md:order-1">
            <AnimatedBeamMultipleOutputDemo />
          </div>
          <div className="w-full md:w-1/2 order-1 md:order-2 md:ml-0">
            <BoxRevealDemo />
          </div>

          </div>

        </main>
      </Element> */}

      {/* <section>
        <main className="md:flex items-center justify-center space-y-6 md:space-y-0 md:gap-x-20 xl:w-4/5 2xl:w-[68%] mx-auto px-6 md:px-0">
          <Image
            src={"/logo/logo.webp"}
            width={10000}
            height={10000}
            className=" md:w-1/3 rounded-md"
            alt="image"
          />
          <div className="flex flex-col gap-y-5 md:w-1/2">
            <h1 className="text-lg md:text-2xl ">
              &quot;We&apos;ve been working with Bird for over 2 years and
              they&apos;ve been amazing to work with. They&apos;ve helped us
              grow our business and we couldn&apos;t be happier with the
              results. &quot;
            </h1>
            <div className="flex items-center gap-x-1">
              <IconStarFilled className="text-4xl text-yellow-500" />
              <IconStarFilled className="text-4xl text-yellow-500" />
              <IconStarFilled className="text-4xl text-yellow-500" />
              <IconStarFilled className="text-4xl text-yellow-500" />
              <IconStarFilled className="text-4xl text-yellow-500" />
            </div>

            <span className="text-xl font-medium">
              Jordan, Brisson <br />
              CEO, Atlas Massage
            </span>
          </div>
        </main>
      </section> */}

      {/* <Element name="guarentees">
        <ShootingStarsAndStarsBackgroundDemo />
      </Element>

      <section className="my-10 md:py-20 xl:w-4/5 2xl:w-[68%] md:mx-auto">
      <LetsMakeThingsHappenSection />
      </section> */}

      <footer className="bg-[#fafafa] py-10  px-6 md:px-0 md:mx-auto border-t">
        <div className="flex flex-col  justify-between gap-y-3 xl:w-4/5 2xl:w-[68%] mx-auto">
          <h1 className="text-3xl md:text-5xl font-medium ">
            <h1 className="text-red-700">Walkers.</h1>
            {/* <Image
              src={"/logo/logo.webp"}
              width={10000}
              height={10000}
              className="w-40"
              alt="image"
            />{" "} */}
          </h1>
          <p className="text-left  text-xl  text-gray-500">+(94) 77 5478225</p>
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
    </div>
  );
}
