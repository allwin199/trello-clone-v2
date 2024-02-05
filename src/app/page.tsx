import React from "react";
import Header from "@/components/Header";
import Board from "@/components/Board";
const Home = () => {
    return (
        <div className="text-gray-800 bg-slate-200 min-h-screen">
            <Header />
            <Board />
        </div>
    );
};

export default Home;
