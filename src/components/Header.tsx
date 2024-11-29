"use client";
import React, { useState } from "react";
import Link from "next/link";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { CiSearch } from "react-icons/ci";
import Image from "next/image";
import { LuMenu } from "react-icons/lu";
import { RxCross2 } from "react-icons/rx";
import logo from "../../public/logo.png";
import { useAppSelector } from "@/redux/hooks";

const Header = ({setShowCart}:any) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };


  const cartCount = useAppSelector((state) => state.cartReducer.length);

  return (
    <>
      <nav className="container bg-black shadow-sm text-white ">
        <div className="container flex justify-between items-center">
        <div className="text-3xl font-bold">
      <Link href="/">
        {logo ? (
          <Image
            src={logo}
            height={100}
            width={100}
            alt="Logo"
            className="cursor-pointer"
          />
        ) : (
          <div>No Logo Available</div>
        )}
      </Link>
    </div>

          {/* Centered Menu for Desktop */}
          <ul className="sm:flex hidden space-x-3 border-2 py-1 px-3 rounded-2xl border-Accent  text-sm text-gray-500">
            <li>
              <Link
                href="/"
                className="hover:text-white transition duration-300"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className="hover:text-white transition duration-300"
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className="hover:text-white transition duration-300"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className="hover:text-white transition duration-300"
              >
                Contact
              </Link>
            </li>
          </ul>

          {/* Icons Section */}
          <div
            className={`flex text-[26px] space-x-5 ${isOpen ? "hidden" : ""}`}
          >
            <div className="relative cursor-pointer" onClick={()=> setShowCart(true)}>
              <AiOutlineShoppingCart />
              <span className="absolute -top-1 -right-2 bg-red-600 text-white rounded-full px-1 text-xs">
                {cartCount} 
              </span>
            </div>
            <CiSearch />
          </div>

          {/* Mobile Menu Button */}
          <div className="sm:hidden text-white">
            <button onClick={toggleMenu}>
              {isOpen ? <RxCross2 /> : <LuMenu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isOpen && (
          <ul className="sm:hidden flex flex-col items-center space-y-3 py-2 px-3 rounded-2xl border-2 border-Accent  text-sm text-gray-500 w-full">
            <li>
              <Link
                href="/"
                className="hover:text-white transition duration-300"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className="hover:text-white transition duration-300"
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className="hover:text-white transition duration-300"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className="hover:text-white transition duration-300"
              >
                Contact
              </Link>
            </li>
          </ul>
        )}
      </nav>
    </>
  );
};

export default Header;
