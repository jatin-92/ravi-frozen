"use client";
import React, { useState, useEffect, useRef } from "react";
import { navLinks, NavLinks } from "./Helper";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const sidebarRef = useRef(null); // 🔥 Ref for sidebar

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const closeSidebar = () => setIsSidebarOpen(false);

  // Auto-close sidebar if screen is resized above xl (1280px)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1280) {
        setIsSidebarOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Disable body scroll when sidebar is open
  useEffect(() => {
    document.body.style.overflow = isSidebarOpen ? "hidden" : "auto";
  }, [isSidebarOpen]);

  // Detect click outside of sidebar
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setIsSidebarOpen(false);
      }
    };

    if (isSidebarOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isSidebarOpen]);

  return (
    <nav className="w-full mb-[-100px]">
      <div className=" px-4 relative">
        {/* Top Navbar */}
        <div className="max-w-[1142px] w-full flex justify-between mx-auto h-[80px] lg:h-[100px] items-center">
          <Link href="/" className="flex items-center">
            <Image
              src="/assets/images/logo.png"
              alt="Logo"
              className="max-w-[176px] w-full h-[74px]"
              width={176}
              height={74}
            />
          </Link>

          {/* Desktop NavLinks */}
          <div className="text-white hidden md:flex gap-[20px] lg:gap-[30px] items-center px-3 ">
            {navLinks.map((link, index) => (
              <Link
                key={index}
                className="hover:scale-[1.1] duration-500 leading-[120%] capitalize font-medium text-lg"
                onClick={closeSidebar}
                href={link.href}
              >
                {link.label}
              </Link>
            ))}
          </div>
          <button className=" bg-white  hidden md:flex  h-[40px] lg:h-[48px] justify-center items-center rounded-4xl w-[165px] lg:w-[175px] transition-all cursor-pointer text-[#29E0FF] text-center text-base font-bold leading-[120%] z-10 border border-white relative hover:bg-[#29E0FF] hover:text-white max-[320px]:h-[40px] duration-700">
            {/* <NavbarBtnIcon /> */}
            Customer Login
          </button>

          {/* Mobile Toggle Button */}
          <div className="md:hidden" onClick={toggleSidebar}>
            <Image
              src="/assets/images/menu-btn.png"
              alt="Logo"
              width={32}
              height={32}
            />
          </div>
        </div>

        {/* Sidebar (Mobile Only) with animation */}
        <div
          ref={sidebarRef}
          id="sidebar"
          className={`fixed top-0 bg-[#29E0FF] max-w-[800px] w-full h-screen z-50 overflow-auto transition-all duration-500 ease-in-out xl:hidden pt-10 ${
            isSidebarOpen ? "left-0" : "-left-[100%]"
          }`}
        >
          {/* Close Button */}
          <p
            className="rotate-45 text-5xl text-white absolute right-4 top-4 cursor-pointer"
            onClick={closeSidebar}
          >
            +
          </p>

          {/* Sidebar Links */}
          <div className="text-white flex flex-col gap-[30px] items-center px-3 ">
            {navLinks.map((link, index) => (
              <Link
                key={index}
                className="hover:scale-[2] leading-[120%] capitalize font-medium text-lg"
                onClick={closeSidebar}
                href={link.href}
              >
                {link.label}
              </Link>
            ))}

            <button
              onClick={closeSidebar}
              className=" bg-white flex  h-[40px] lg:h-[48px] justify-center items-center rounded-4xl w-full transition-all cursor-pointer text-[#29E0FF] text-center text-base font-bold leading-[120%] z-10 border border-white relative hover:bg-[#29E0FF] hover:text-white max-[320px]:h-[40px] duration-700"
            >
              Customer Login
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
