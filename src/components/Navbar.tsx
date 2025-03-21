import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#1C126D] shadow-md top-0 left-0 w-full z-10 fixed">
      <div className="mx-auto px-4">
        <div className="flex justify-between sm:justify-center items-center py-6">

          <div className="hidden md:flex space-x-18 font-[Montserrat]">
            <a href="#about" className="text-white hover:text-pink-500">About</a>
            <a href="#timeline" className="text-white hover:text-pink-500">Timeline</a>
            <a href="#schedule" className="text-white hover:text-pink-500">Schedule</a>
            <a href="#team" className="text-white hover:text-pink-500">Team</a>
            <a href="#faq" className="text-white hover:text-pink-500">FAQ</a>
          </div>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white text-lg pb-1 focus:outline-none"
          >
            {isOpen ? "✖" : "☰"}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden flex flex-col space-y-2 pb-4 font-montserrat">
            <a href="#about" className="text-white hover:text-pink-500">About</a>
            <a href="#timeline" className="text-white hover:text-pink-500">Timeline</a>
            <a href="#schedule" className="text-white hover:text-pink-500">Schedule</a>
            <a href="#team" className="text-white hover:text-pink-500">Team</a>
            <a href="#faq" className="text-white hover:text-pink-500">FAQ</a>
          </div>
        )}
      </div>
    </nav>
  );
}
