import React from "react";
import { MdSupervisedUserCircle } from "react-icons/md";

const Card = ({ item }) => {
  return (
    <div className="bg-white shadow-md rounded p-4 flex items-center">
      <MdSupervisedUserCircle size={24} className="text-blue-500 mr-4" />
      <div className="flex flex-col">
        <span className="text-lg font-semibold">{item.title}</span>
        <span className="text-2xl font-bold">{item.number}</span>
        <span className="text-sm">
          <span
            className={`${
              item.change > 0 ? "text-green-500" : "text-red-500"
            } font-semibold`}
          >
            {item.change}%
          </span>{" "}
          {item.change > 0 ? "more" : "less"} than previous week
        </span>
      </div>
    </div>
  );
};

export default Card;
