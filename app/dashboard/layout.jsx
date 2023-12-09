import React from "react";
import Navbar from "../ui/dashboard/navbar/navbar";
import Sidebar from "../ui/dashboard/sidebar/sidebar";
import Footer from "../ui/dashboard/footer/footer";

const Layout = ({ children }) => {
  return (
    <div className="flex h-screen">
      <div className="w-64 bg-gray-800 text-white">
        <Sidebar />
      </div>
      <div className="flex-1 flex flex-col overflow-hidden">
        <div className="bg-gray-200 p-4">
          <Navbar />
        </div>
        <div className="flex-1 overflow-x-hidden overflow-y-auto p-4">
          {children}
        </div>
        <div className="bg-gray-200 p-4">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Layout;
