"use client"; // Indicating that this is client-side code for Next.js
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

export default function Hero() {
  useEffect(() => {
    const scrollingText = document.getElementById("scrollingText");

    if (scrollingText) {
      const handleScroll = () => {
        const scrollPosition = window.scrollY;
        scrollingText.style.transform = `translateX(${scrollPosition * 1}px)`; // Moves text horizontally
      };

      // Attach scroll event listener
      window.addEventListener("scroll", handleScroll);

      // Cleanup the event listener when the component is unmounted
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, []); // Empty dependency array means this will only run once when the component mounts

  return (
    <div className="">
      <div className="relative w-full h-[600px] sm:h-[500px] md:h-[600px] lg:h-[700px]">
        {/* Background Image */}
        <Image
          className="object-cover"
          src="/p3.jpg"
          alt="Farming Background"
          layout="fill"
          objectFit="cover"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>
        {/* Header */}
        <header className="absolute top-0 left-0 w-full flex items-center justify-between px-4 py-4 sm:px-6 md:px-8 lg:px-12 z-10">
          <div className="text-xl sm:text-2xl md:text-3xl text-orange-300 font-cinzel">
            Flavor
          </div>
          <nav className="flex space-x-4 sm:space-x-6 md:space-x-8">
            <Link href="#home" className="text-white hover:text-gray-300">
              Home
            </Link>
            <Link href="#menu" className="text-white hover:text-gray-300">
              Menu
            </Link>
            <Link href="#about" className="text-white hover:text-gray-300">
              About
            </Link>
            <Link href="#contact" className="text-white hover:text-gray-300">
              Contact
            </Link>
          </nav>
        </header>
        <div
          id="scrollingText"
          className="absolute flex flex-col justify-center items-center top-0 h-full font-cinzel transition-transform duration-300 ease-linear px-4"
        >
          <h1 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl px-2 sm:px-4 text-center">
            Flavor Restaurant
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-orange-300 mt-4 px-4 sm:px-6 text-center max-w-[90%] sm:max-w-[80%] md:max-w-[60%] break-words">
            Flavor Restaurant offers a perfect blend of flavor and ambiance,
            <br />
            serving a variety of mouthwatering dishes crafted
            <br />
            with fresh, high-quality ingredients.
          </p>
          <button className="px-3 sm:px-4 py-1 sm:py-2 border border-orange-300 text-white mt-4">
            Our Menu
          </button>
        </div>
      </div>
    </div>
  );
}
