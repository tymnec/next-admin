import React from "react";
import { usePathname } from "next/navigation";
import {
  MdNotifications,
  MdOutlineChat,
  MdPublic,
  MdSearch,
} from "react-icons/md";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <div className="bg-white shadow-md p-4 flex justify-between items-center">
      <div className="text-xl font-semibold">{pathname.split("/").pop()}</div>
      <div className="flex items-center space-x-4">
        <div className="flex items-center">
          <MdSearch size={20} className="text-gray-600" />
          <input
            type="text"
            placeholder="Search..."
            className="border border-gray-300 px-2 py-1 focus:outline-none"
          />
        </div>
        <div className="flex items-center space-x-2">
          <MdOutlineChat size={20} className="text-gray-600" />
          <MdNotifications size={20} className="text-gray-600" />
          <MdPublic size={20} className="text-gray-600" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
