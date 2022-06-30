import React from "react";
import Leaderboard from "../components/Leaderboard";
import Navbar from "../components/Navbar";

const AdminDashboardPage = () => {
  return (
    <>
      <div className="w-full flex flex-col justify-start items-center text-7xl h-screen text-gray-700 bg-black">
        <Navbar />
        <Leaderboard />
      </div>
    </>
  );
};

export default AdminDashboardPage;
