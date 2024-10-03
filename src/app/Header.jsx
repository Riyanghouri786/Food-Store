"use client";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="p-4 shadow-md bg-gradient-to-r from-purple-500 to-pink-500">
      <div className="flex items-center justify-between mx-auto max-w-7xl">
        {/* Logo */}
        <div className="flex items-center gap-3 text-2xl font-bold text-white">
          <div className="w-10 rounded-3xl">
            <img
              className="rounded-3xl"
              src="https://static.vecteezy.com/system/resources/previews/017/737/861/non_2x/restaurant-logo-on-letter-f-concept-with-chef-hat-spoon-and-fork-for-restaurant-logo-free-vector.jpg"
              alt=""
            />
          </div>
          Food Store
        </div>

        {/* Desktop Menu */}
        <div className="hidden space-x-6 md:flex">
          <Link
            className="font-bold text-white hover:text-pink-200"
            href="/home"
          >
            Home
          </Link>

          <Link
            className="font-bold text-white hover:text-pink-200"
            href="/services"
          >
            Services
          </Link>
          <Link
            className="font-bold text-white hover:text-pink-200"
            href="/contact"
          >
            Contact
          </Link>
          <Link
            className="font-bold text-white hover:text-pink-200"
            href="/about"
          >
            About
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            className="text-white focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="p-4 mt-2 space-y-4 bg-purple-600 rounded-md md:hidden">
          <Link className="block text-white hover:text-pink-200" href="/home">
            Home
          </Link>
          <Link className="block text-white hover:text-pink-200" href="/about">
            About
          </Link>
          <Link
            className="block text-white hover:text-pink-200"
            href="/services"
          >
            Services
          </Link>
          <Link
            className="block text-white hover:text-pink-200"
            href="/contact"
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
}
