import React from "react";
import { cards } from "../lib/data";
import Card from "../ui/dashboard/card/card";
import Chart from "../ui/dashboard/chart/chart";
import Rightbar from "../ui/dashboard/rightbar/rightbar";
import Transactions from "../ui/dashboard/transactions/transactions";

const Dashboard = () => {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      <div className="lg:w-3/4 p-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
          {cards.map((item) => (
            <Card item={item} key={item.id} />
          ))}
        </div>
        <Transactions />
        <Chart />
      </div>
      <div className="lg:w-1/4 p-4">
        <Rightbar />
      </div>
    </div>
  );
};

export default Dashboard;
