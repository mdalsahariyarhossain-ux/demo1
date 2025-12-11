import React from "react";
import {
  FaTwitter,
  FaWhatsapp,
  FaInstagram,
  FaFacebook,
  FaLinkedin,
} from "react-icons/fa";
import { IoSend } from "react-icons/io5";

export default function Footer() {
  return (
    <footer className="bg-[#1d1d1d] py-16 text-white">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12">

        {/* ================= LEFT SIDE ================= */}
        <div>
          <p className="text-gray-400 text-sm mb-6">
            Your space… our smart ways!
          </p>

          {/* NEWSLETTER */}
          <div className="flex items-center bg-white rounded-lg overflow-hidden shadow w-full max-w-xs">
            <input
              type="email"
              placeholder="Enter Email For News Letter"
              className="flex-1 px-4 py-3 text-black outline-none"
            />
            <button className="bg-white px-4">
              <IoSend className="text-black text-xl" />
            </button>
          </div>

          {/* ✅ SOCIAL MEDIA LINKS */}
          <div className="flex items-center gap-4 mt-6">
            <a
              href="https://twitter.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter className="text-[#1DA1F2] text-2xl hover:scale-110 transition" />
            </a>

            <a
              href="https://wa.me/919999999999"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp className="text-[#25D366] text-2xl hover:scale-110 transition" />
            </a>

            <a
              href="https://instagram.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="text-[#E4405F] text-2xl hover:scale-110 transition" />
            </a>

            <a
              href="https://facebook.com/yourpage"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook className="text-[#1877F2] text-2xl hover:scale-110 transition" />
            </a>

            <a
              href="https://linkedin.com/in/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="text-[#0077b5] text-2xl hover:scale-110 transition" />
            </a>
          </div>
        </div>

        {/* ================= MIDDLE LINKS ================= */}
        <div className="grid grid-cols-2 gap-4 text-sm mt-6 md:mt-20">
          <div className="space-y-3">
            <a href="#home" className="font-semibold hover:text-gray-300 block">
              Home
            </a>
            <a href="#brand" className="hover:text-gray-300 block">
              Brand Story
            </a>
            <a href="#about" className="hover:text-gray-300 block">
              About
            </a>
            <a href="#services" className="hover:text-gray-300 block">
              Services
            </a>
          </div>

          <div className="space-y-3">
            <a href="#portfolio" className="hover:text-gray-300 block">
              Portfolio
            </a>
            <a href="#products" className="hover:text-gray-300 block">
              Products
            </a>
            <a href="#contact" className="hover:text-gray-300 block">
              Contact Us
            </a>
          </div>
        </div>

        {/* ================= RIGHT SIDE ================= */}
        <div className="space-y-4">
          {/* MAP IMAGE */}
          <div className="rounded-xl overflow-hidden shadow-lg">
            <img
              src="https://www.google.com/maps/about/images/mymaps/mymaps-desktop-16x9.png"
              alt="Map"
              className="w-full h-40 object-cover"
            />
          </div>

          {/* ADDRESS */}
          <div>
            <h4 className="font-semibold mb-2">Address</h4>
            <p className="text-gray-400 text-sm leading-relaxed">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.
            </p>
          </div>
        </div>

      </div>
    </footer>
  );
}
