import React from "react";
import Container from "@/components/Container";

export default function Footer() {
  return (
    <footer className="text-gray-900 pt-10 pb-4 px-4 w-full">
      <Container className="flex flex-col md:flex-row md:items-start md:justify-between gap-4   ">
        {/* Left: Address & Socials */}
        <div className="flex-1 flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <span className="font-bold text-lg text-gray-900">logo</span>
            <span className="italic text-gray-500">@ipsum</span>
          </div>
          <div className="text-sm leading-relaxed text-gray-800">
            ODREVAL LIMITED Florins, 7 GREG TOWER, 2nd floor, 1065, Nicosia,
            Cyprus
          </div>
          <div className="flex gap-3 mt-2">
            {/* Social icons */}
            <a
              href="#"
              className="bg-[#4F7BFF] rounded-full p-2 hover:scale-105 transition"
            >
              <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
                <path
                  fill="#fff"
                  d="M22.675 0h-21.35C.6 0 0 .6 0 1.326v21.348C0 23.4.6 24 1.326 24h11.495v-9.294H9.692v-3.622h3.129V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.4 24 24 23.4 24 22.674V1.326C24 .6 23.4 0 22.675 0"
                />
              </svg>
            </a>
            <a
              href="#"
              className="bg-[#4F7BFF] rounded-full p-2 hover:scale-105 transition"
            >
              <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" fill="#fff" />
                <circle cx="12" cy="12" r="6" fill="#4F7BFF" />
              </svg>
            </a>
            <a
              href="#"
              className="bg-[#4F7BFF] rounded-full p-2 hover:scale-105 transition"
            >
              <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
                <rect width="20" height="20" x="2" y="2" rx="5" fill="#fff" />
                <rect
                  width="12"
                  height="12"
                  x="6"
                  y="6"
                  rx="3"
                  fill="#4F7BFF"
                />
              </svg>
            </a>
            <a
              href="#"
              className="bg-[#4F7BFF] rounded-full p-2 hover:scale-105 transition"
            >
              <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
                <rect width="20" height="16" x="2" y="4" rx="4" fill="#fff" />
                <rect width="12" height="8" x="6" y="8" rx="2" fill="#4F7BFF" />
              </svg>
            </a>
          </div>
        </div>
        {/* Center: Navigation */}
        <div className="md:flex-[1] lg:flex-[2] grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10 text-base mt-8 md:mt-0">
          <div className="flex flex-col gap-2">
            <a href="#" className="hover:text-gray-900">
              Who we are
            </a>
            <a href="#" className="hover:text-gray-900">
              How we teach
            </a>
            <a href="#" className="hover:text-gray-900">
              FAQ
            </a>
          </div>
          <div className="flex flex-col gap-2">
            <a href="#" className="hover:text-gray-900">
              Courses
            </a>
            <a href="#" className="hover:text-gray-900">
              Pricing
            </a>
            <a href="#" className="hover:text-gray-900">
              Accelerator
            </a>
            <a href="#" className="hover:text-gray-900">
              HUB
            </a>
          </div>
        </div>
        {/* Right: Stay updated */}
        <div className="flex-[1] lg:flex-[2] flex flex-col items-end mt-8 md:mt-0">
          <div className="w-full flex flex-col items-end">
            <span className="text-2xl font-medium text-gray-900 mb-10 mr-auto">
              Stay updated!
            </span>
            <form className="flex w-full gap-2">
              <input
                type="email"
                placeholder="Email"
                className="w-full rounded-xl px-5 py-3 text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-[#4F7BFF] text-base md:text-lg placeholder-gray-400 border"
              />
              <button
                type="submit"
                className="bg-[#4F7BFF] text-white rounded-xl px-7 py-3 font-medium text-lg hover:bg-blue-600 transition"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </Container>
      {/* Bottom row */}
      <Container className="border-t border-gray-300 mt-8 pt-4 flex flex-col md:flex-row items-center justify-between gap-2 text-sm text-gray-500">
        <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-8 w-full md:w-auto">
          <span>© Sakwe-Sakwe, 2022</span>
          <a href="#" className="hover:text-black">
            Privacy policy
          </a>
          <a href="#" className="hover:text-black">
            Terms of use
          </a>
        </div>
        <div className="w-full md:w-auto text-right md:text-left mt-2 md:mt-0">
          <span>made by</span>
        </div>
      </Container>
    </footer>
  );
}
