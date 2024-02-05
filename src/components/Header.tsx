"use client";

import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import Avatar from "react-avatar";

const Header = () => {
    return (
        <header>
            <div className="flex flex-col md:flex-row items-center p-5 bg-gray-500/10 justify-between px-10">
                <h1 className="text-primary text-3xl">Planner</h1>
                <div className="flex items-center space-x-5">
                    <form
                        action=""
                        className="flex items-center space-between rounded-md p-2 shadow-md bg-white space-x-1"
                    >
                        <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />
                        <input
                            type="text"
                            placeholder="search"
                            className="flex-1 outline-none px-2"
                        />
                        <button type="submit" hidden></button>
                    </form>
                    <Avatar name="allwin" round color="#0055D1" size="40" />
                </div>
            </div>
        </header>
    );
};

export default Header;
