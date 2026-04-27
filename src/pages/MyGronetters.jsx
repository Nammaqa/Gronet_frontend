import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { networkUsers, tabsList, Pending } from "../data/keywords.js";
import Navbar from "../components/Navbar/Navbar";

export default function MyGronetters() {
    const [pending, setPending] = useState(Pending);
    const [activePage, setActivePage] = useState("Requests Received");
    const [open, setOpen] = useState(false);
    const [selectedGroup, setSelectedGroup] = useState("My Gronetters");

    const navigate = useNavigate();

    const handleApprove = (id) => {
        setPending((prev) => prev.filter((u) => u.id !== id));
        alert("Request Approved ✅");
    };

    const handleReject = (id) => {
        setPending((prev) => prev.filter((u) => u.id !== id));
        alert("Rejected ❌");
    };

    return (
        <div className="bg-[#f5f7fb] min-h-screen">
            <Navbar isMyGronetters />

            <div className="max-w-[1300px] mx-auto px-4 py-5">
                {/* HEADER */}
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 mb-5">
                    <div className="relative">
                        <div
                            onClick={() => setOpen(!open)}
                            className="flex items-center gap-2 bg-[#eff4ff] border border-[#BCC3E133] px-4 py-2 rounded-lg text-xl font-bold cursor-pointer w-fit"
                        >
                            {selectedGroup}
                            <img src="/assets/icons/downarrow.png" alt="" />
                        </div>

                        {open && (
                            <div className="absolute mt-2 bg-[#eff4ff] p-2 rounded-lg shadow-lg z-50">
                                <div
                                    onClick={() => {
                                        setSelectedGroup("My Gronetters");
                                        setOpen(false);
                                        navigate("/groups");
                                    }}
                                    className="flex items-center gap-2 px-3 py-2 bg-[#fde2e0] rounded-lg cursor-pointer font-semibold"
                                >
                                    <img src="/assets/icons/members.png" className="w-5" />
                                    My Groups
                                </div>
                            </div>
                        )}

                        <p className="text-sm mt-2 text-gray-600 max-w-md">
                            Manage your professional architecture network and collaborative
                            connections.
                        </p>
                    </div>

                    {/* Tabs */}
                    <div className="flex bg-[#eff4ff] rounded-lg text-sm font-semibold overflow-x-auto">
                        {tabsList.map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActivePage(tab)}
                                className={`px-5 py-2 rounded-lg whitespace-nowrap ${activePage === tab
                                        ? "bg-[#031d4e] text-white"
                                        : "hover:bg-[#e0e7fd]"
                                    }`}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>
                </div>

                {/* CONTENT */}
                <div className="flex flex-col lg:flex-row gap-6 mt-5">
                    {/* LEFT */}
                    <div className="w-full lg:w-[40%]">
                        <h3 className="font-semibold text-lg">
                            Pending Invitations
                            <span className="ml-2 bg-indigo-100 text-sm px-2 py-1 rounded-full">
                                {pending.length}
                            </span>
                        </h3>

                        {pending.map((user, i) => (
                            <div
                                key={i}
                                className="flex gap-4 bg-white p-4 rounded-2xl mt-4 items-center shadow-sm"
                            >
                                <img
                                    src={user.img}
                                    className="w-14 h-14 rounded-lg object-cover"
                                />

                                <div className="flex-1">
                                    <h4 className="font-semibold text-sm">{user.name}</h4>
                                    <p className="text-sm text-gray-600">
                                        {user.designation}
                                    </p>

                                    <div className="flex gap-3 mt-3">
                                        <button
                                            onClick={() => handleApprove(user.id)}
                                            className="bg-[#031d4e] text-white px-4 py-2 rounded-lg w-full text-sm font-semibold"
                                        >
                                            ✔ Accept
                                        </button>

                                        <button
                                            onClick={() => handleReject(user.id)}
                                            className="bg-[#fde2e0] text-red-600 px-4 py-2 rounded-lg w-full text-sm font-semibold"
                                        >
                                            ✖ Reject
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* RIGHT */}
                    <div className="flex-1 min-w-0">
                        <div className="flex justify-between items-center">
                            <h3 className="font-semibold text-[#031d4e] text-lg">
                                My Network
                            </h3>
                            <span className="text-sm text-[#031d4e] cursor-pointer">
                                View All →
                            </span>
                        </div>

                        {/* GRID */}
                        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 mt-4">
                            {networkUsers.map((user, i) => (
                                <div
                                    key={i}
                                    className="bg-white p-4 rounded-2xl text-center shadow-sm hover:shadow-md transition"
                                >
                                    {/* IMAGE + STATUS */}
                                    <div className="relative w-fit mx-auto">
                                        <img
                                            src={user.img}
                                            className="w-20 h-20 rounded-xl object-cover"
                                        />
                                        <span className="absolute bottom-1 right-1 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></span>
                                    </div>

                                    <h4 className="mt-3 font-semibold text-sm">
                                        {user.name}
                                    </h4>

                                    <p className="text-gray-500 text-xs uppercase tracking-wide">
                                        {user.designation}
                                    </p>

                                    <button className="mt-3 bg-[#e9edf5] text-[#031d4e] px-4 py-2 rounded-lg text-sm font-semibold w-full hover:bg-[#031d4e] hover:text-white transition">
                                        Message
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}