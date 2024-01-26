import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/chat_app_logo.png";
import { FaSearch } from "react-icons/fa";

export default function Header() {
  return (
    <header className="bg-white shadow-md">
      <div className="flex justify-between items-center max-w-6xl mx-auto px-1 py-1 sm:p-2">
        <img src={logo} alt="chat_app" className="w-20 object-cover" />
        <form
            // onSubmit={handleSubmit}
            className="relative w-full lg:w-[600px] h-[50px] text-base text-primeColor bg-slate-100 flex items-center gap-2 justify-between px-6 rounded-lg border-2"
          >
            <input
              className=" bg-transparent focus:outline-none w-full lg:w-[600px] sm:w-64"
              type="text"
            //   onChange={(e) => setSearchTerm(e.target.value)}
            //   value={searchTerm}
              placeholder="Search user..."
            />
            <FaSearch className="w-5 h-5" />
          </form>
          <div>
            <ul className="flex md:gap-8 cursor-pointer">
                {/* <Link to='/'> */}
                    <li className="hidden sm:inline text-slate-950 hover:text-red-500 ">
                        Chat
                    </li>
                {/* </Link> */}
                <li className="hidden sm:inline text-slate-950 hover:text-red-500">
                    About
                </li>

                <li className="hidden sm:inline text-slate-950 hover:text-red-500">
                    Login
                </li>
            </ul>
          </div>
      </div>
    </header>
  );
}
