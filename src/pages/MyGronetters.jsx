import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { networkUsers, tabsList, Pending } from "../data/keywords.js";
import Navbar from "../components/Navbar/Navbar";

export default function MyGronetters() {

    // ✅ Use dummy data only
    const [pending, setPending] = useState(Pending);

    const [activePage, setActivePage] = useState("Requests Received");
    const [open, setOpen] = useState(false);
    const [selectedGroup, setSelectedGroup] = useState("My Gronetters");

    const navigate = useNavigate();

    // ✅ NO API CALL
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

            <div className="max-w-[1300px] mx-auto p-5">

                {/* HEADER */}
                <div className="flex justify-between items-center mb-5 flex-wrap gap-3">

                    <div className="relative">
                        <div
                            onClick={() => setOpen(!open)}
                            className="flex items-center gap-2 bg-[#eff4ff] border border-[#BCC3E133] px-4 py-2 rounded-lg text-2xl font-bold cursor-pointer max-w-fit"
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
                                        navigate("/group-detail");
                                    }}
                                    className="flex items-center gap-2 px-3 py-2 bg-[#fde2e0] rounded-lg cursor-pointer font-semibold"
                                >
                                    <img src="/assets/icons/members.png" className="w-5" />
                                    My Groups
                                </div>
                            </div>
                        )}

                        <p className="text-sm mt-2 text-gray-600 max-w-md">
                            Manage your professional architecture network and collaborative connections.
                        </p>
                    </div>

                    {/* Tabs */}
                    <div className="flex bg-[#eff4ff] rounded-lg text-sm font-semibold overflow-x-auto ">
                        {tabsList.map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActivePage(tab)}
                                className={`px-6 py-2 rounded-lg ${activePage === tab
                                    ? "bg-[#031d4e] text-white"
                                    : "hover:bg-[#e0e7fd] w-fit"
                                    }`}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>
                </div>

                {/* CONTENT */}
                <div className="flex gap-8 mt-5 flex-col lg:flex-row">

                    {/* LEFT */}
                    <div className="lg:w-[45%] w-full">
                        <h3 className="font-semibold text-lg">
                            Pending Invitations
                            <span className="ml-2 bg-indigo-100 text-sm px-2 py-1 rounded-full">
                                {pending.length}
                            </span>
                        </h3>

                        {pending.map((user, i) => (
                            <div
                                key={i}
                                className="flex gap-4 bg-white p-4 rounded-xl mt-4 items-center"
                            >
                                <img
                                    src={user.img}
                                    className="w-16 h-16 rounded-lg object-cover"
                                />

                                <div className="flex-1">
                                    <h4 className="font-bold text-sm">{user.name}</h4>
                                    <p className="text-sm text-gray-600">
                                        {user.designation}
                                    </p>

                                    <div className="flex gap-2 mt-2">
                                        <button
                                            onClick={() => handleApprove(user.id)}
                                            className="bg-[#031d4e] text-white px-4 py-2 rounded-lg w-1/2"
                                        >
                                            ✔ Accept
                                        </button>
                                        <button
                                            onClick={() => handleReject(user.id)}
                                            className="bg-[#fde2e0] text-red-700 px-4 py-2 rounded-lg w-1/2"
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
                            <h3 className="font-semibold text-[#031d4e]">My Network</h3>
                        </div>

                        <div className="grid grid-cols-2 gap-3 mt-3">
                            {networkUsers.map((user, i) => (
                                <div
                                    key={i}
                                    className="bg-[#f8fafc] p-5 rounded-xl text-center"
                                >
                                    <img
                                        src={user.img}
                                        className="w-20 h-20 rounded-xl mx-auto object-cover"
                                    />
                                    <h4 className="mt-3 font-bold">{user.name}</h4>
                                    <p className="text-gray-600">{user.designation}</p>
                                    <button className="bg-[#031d4e] text-white px-4 py-2 rounded-lg cursor-pointer" on>Message</button>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}