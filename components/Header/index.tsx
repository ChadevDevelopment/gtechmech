"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import menuData from "./menuData";

const Header = () => {
  const [navigationOpen, setNavigationOpen] = useState(false);
  const [stickyMenu, setStickyMenu] = useState(false);

  const pathUrl = usePathname();


  const handleStickyMenu = () => {
    if (window.scrollY >= 80) {
      setStickyMenu(true);
    } else {
      setStickyMenu(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleStickyMenu);
  });

  return (
    <header
      className={`fixed top-0 w-full z-99999 bg-white shadow !py-3 transition duration-100 ${
        stickyMenu
          ? "bg-white shadow transition duration-100"
          : "absolute bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0 lg:flex items-center justify-between relative">
        <div className="w-full lg:w-1/4 flex items-center justify-between">
          <Link href="/">
            <Image
              src="/images/logo/logo.png"
              alt="logo"
              priority
              width={50}
              height={30}
              className="w-full"
            />
          </Link>

          <button
            onClick={() => setNavigationOpen(!navigationOpen)}
            id="navbarToggler"
            aria-label="Mobile Menu"
            // className="absolute right-4 top-1/2 block translate-y-[-50%] rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden"
            className="lg:hidden block"
          >
            <span
              className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${
                navigationOpen ? " top-[7px] rotate-45" : " "
              }`}
            />
            <span
              className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${
                navigationOpen ? "opacity-0 " : " "
              }`}
            />
            <span
              className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${
                navigationOpen ? " top-[-8px] -rotate-45" : " "
              }`}
            />
          </button>

        </div>

        <div
          className={`w-full lg:w-full h-0 lg:h-auto invisible lg:visible lg:flex items-center justify-end ${
            navigationOpen &&
            "!visible bg-white shadow-solid-5 h-auto max-h-[400px] overflow-y-scroll rounded-md mt-4 p-7.5"
          }`}
        >
          <nav>
            <ul className="flex lg:items-center flex-col lg:flex-row gap-5 lg:gap-10">
              {menuData.map((menuItem, key) => (
                <li key={key} 
                    className={menuItem.submenu && "group relative"}
                    onClick={() => setNavigationOpen(false)}
                    >
                  {menuItem.submenu ? (
                    <>
                    {/*
                      <a
                        onClick={() => setDropdownToggler(!dropdownToggler)}
                        className="hover:text-black flex items-center justify-between gap-3 cursor-pointer"
                      >
                        {menuItem.title}
                        <span>
                          <svg
                            className="fill-waterloo group-hover:fill-primary w-3 h-3 cursor-pointer"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                          >
                            <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
                          </svg>
                        </span>
                      </a>

                      <ul
                        className={`dropdown ${dropdownToggler ? "flex" : ""}`}
                      >
                        {menuItem.submenu.map((item, key) => (
                          <li key={key} className="hover:text-black">
                            <Link href={item.path || "#"}>{item.title}</Link>
                          </li>
                        ))}
                      </ul>
                        */}
                    </>
                  ) : (
                    <Link
                      href={`${menuItem.path}`}
                      className={
                        pathUrl === menuItem.path
                          ? "hover:text-orange text-orange"
                          : "hover:text-orange"
                      }
                    >
                      {menuItem.title}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};



export default Header;
