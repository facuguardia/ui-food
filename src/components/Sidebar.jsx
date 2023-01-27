import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  RiHome6Line,
  RiPercentLine,
  RiPieChartLine,
  RiMailLine,
  RiNotification3Line,
  RiSettings4Line,
  RiLogoutCircleRLine,
} from "react-icons/ri";
import { MdFastfood } from "react-icons/md";

function Sidebar(props) {
  const {showMenu} = props;
  return (
    <div
      className={`bg-[#1F1D28] fixed top-0 lg:left-0 w-28 h-full flex flex-col justify-between py-6 rounded-tr-xl rounded-br-xl z-50 transition-all ${
        showMenu ? "left-0" : "-left-full"
      }`}
    >
      <ul className="pl-4">
        <div className="p-4 flex justify-center">
          <h1 className="text-gray-300 font-bold text-3xl p-2 bg-[#ec7c6a]/50 rounded-lg">FF</h1>
        </div>
        <li className="bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl">
          <Link
            to="/"
            className="bg-[#ec7c6a] p-4  rounded-xl text-white flex justify-center "
          >
            <RiHome6Line className="text-2xl" />
          </Link>
        </li>
        <li className="hover:bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl group transition-colors">
          <Link
            to="/"
            className="group-hover:bg-[#ec7c6a] p-4 rounded-xl text-[#ec7c6a] group-hover:text-white transition-colors flex justify-center "
          >
            <RiPercentLine className="text-2xl" />
          </Link>
        </li>
        <li className="hover:bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl group transition-colors">
          <Link
            to="/"
            className="group-hover:bg-[#ec7c6a] p-4 rounded-xl text-[#ec7c6a] group-hover:text-white transition-colors flex justify-center "
          >
            <RiPieChartLine className="text-2xl" />
          </Link>
        </li>
        <li className="hover:bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl group transition-colors">
          <Link
            to="/"
            className="group-hover:bg-[#ec7c6a] p-4 rounded-xl text-[#ec7c6a] group-hover:text-white transition-colors flex justify-center "
          >
            <RiMailLine className="text-2xl" />
          </Link>
        </li>
        <li className="hover:bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl group transition-colors">
          <Link
            to="/"
            className="group-hover:bg-[#ec7c6a] p-4 rounded-xl text-[#ec7c6a] group-hover:text-white transition-colors flex justify-center "
          >
            <RiNotification3Line className="text-2xl" />
          </Link>
        </li>
        <li className="hover:bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl group transition-colors">
          <Link
            to="/"
            className="group-hover:bg-[#ec7c6a] p-4 rounded-xl text-[#ec7c6a] group-hover:text-white transition-colors flex justify-center "
          >
            <RiSettings4Line className="text-2xl" />
          </Link>
        </li>
      </ul>
      <div className="absolute bottom-0 left-0 w-full">
        <ul className="pl-4">
          <li className="p-4 rounded-tl-xl rounded-bl-xl">
            {/* cambiar por Link de router */}
            <Link
              to="/"
              className="p-4  rounded-xl text-[#ec7c6a] flex justify-center "
            >
              <RiLogoutCircleRLine className="text-2xl" />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
