import React from "react";
import { m1, banner, profile, DiscussionVisual } from "../data/keywords.js";
import { Pending, networkUsers } from "../data/keywords.js";
import { FiSearch } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import BottomNav from "../components/layout/BottomNav.jsx";

export default function GroupDetail() {
    const David = Pending.find((u) => u.name === "David Chen");
    const Elena = Pending.find((u) => u.name === "Sarah Miller");
    const Anya = networkUsers.find((u) => u.name === "Anya Patel");
    const Vane = networkUsers.find((u) => u.name === "Julian Vane");

    const navigate = useNavigate();

    return (
        <div className="font-sans w-full bg-[#f5f7fb] text-gray-700">

            {/* 🔹 NAVBAR */}
            <nav className="w-full bg-white border-w shadow-sm sticky top-0 z-50">
                <div className="flex items-center justify-between px-4 py-3">
                    <div className="flex items-center gap-4">
                        <button
                            className="text-2xl cursor-pointer"
                            onClick={() => navigate("/groups")}
                        >
                            ←
                        </button>
                        <span className="font-bold text-lg">NammaQA</span>
                    </div>

                    <div className="flex items-center gap-4">
                        <FiSearch className="w-5 h-5 text-gray-600 cursor-pointer" />
                        <img
                            src={profile.image}
                            alt="profile"
                            className="w-9 h-9 rounded-lg"
                        />
                    </div>
                </div>
            </nav>

            {/* 🔹 BANNER */}
            <div className="w-full">
                <img
                    src={banner.image}
                    alt="banner"
                    className="w-full object-cover"
                />
            </div>

            {/* 🔹 HEADER */}
            <div className="relative bg-[#f5f7fb] px-4 md:px-6 pb-6">

                {/* Banner already above */}

                {/* Profile Image */}
                <img
                    src={profile.image}
                    alt="profile"
                    className="w-20 h-20 rounded-xl border-4 border-white absolute -top-10 left-4 md:static md:w-16 md:h-16 md:border-2 md:mr-4" />

                {/* Wrapper */}
                <div className="pt-14 md:pt-4 md:flex md:items-center md:justify-between ">

                    {/* LEFT SIDE */}
                    <div className="md:flex md:items-center md:gap-4">

                        {/* TEXT BLOCK */}
                        <div>
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                                AI Professionals
                            </h2>

                            {/* META */}
                            <div className="flex flex-wrap gap-4 mt-3 text-sm text-gray-500 d:flex-nowrap md:items-center">
                                <div className="flex items-center gap-2">
                                    <img src="/assets/icons/map.svg" className="w-4 h-4" />
                                    <span>Public Group</span>
                                </div>

                                <div className="flex items-center gap-2">
                                    <img src="/assets/icons/profile-settings.svg" className="w-4 h-4" />
                                    <span>12.8k Members</span>
                                </div>

                                <div className="flex items-center gap-2">
                                    <img src="/assets/icons/calander.svg" className="w-4 h-4" />
                                    <span>Created June 2023</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* BUTTON */}
                    <button
                        className="
        w-full mt-5 py-3 rounded-xl font-bold text-white bg-[#031D4E]
        md:w-auto md:px-6 md:py-2 md:mt-0
      "
                    >
                        Join Group
                    </button>

                </div>
            </div >

            {/* 🔹 CONTENT */}
            < div className="flex flex-col md:flex-row gap-5 p-5" >

                {/* 🔹 LEFT */}
                < div className="flex-[2]" >

                    {/* ABOUT */}
                    <div div className="bg-[#f3f3fa] p-5 rounded-xl mb-4" >
                        <h3 className="text-xl font-medium text-gray-900">
                            About this group
                        </h3>
                        <p className="mt-2 text-gray-600">
                            The premier hub for machine learning engineers, data scientists,
                            and AI researchers to discuss the latest breakthroughs.
                        </p>

                        <div className="mt-4 flex flex-wrap gap-2">
                            {["ML", "LLM", "ETHICS", "PYTORCH"].map((tag) => (
                                <span
                                    key={tag}
                                    className="bg-indigo-100 text-[#031D4E] text-xs font-bold px-3 py-1 rounded-md"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div >

                    {/* HEADER */}
                    <div div className="flex justify-between items-center mb-4" >
                        <h3 className="text-xl font-bold">Recent Discussions</h3>

                        <div className="flex bg-indigo-50 rounded-lg">
                            <button className="px-4 py-2 bg-[#031D4E] text-white rounded-lg">
                                Top
                            </button>
                            <button className="px-4 py-2">New</button>
                        </div>
                    </div >

                    {/* POSTS */}

                    {
                        David && (
                            <div className="bg-white rounded-2xl shadow-md mb-5 p-4">
                                <div className="flex gap-3 items-center">
                                    <img
                                        src={David.img}
                                        className="w-10 h-10 rounded-lg"
                                    />
                                    <div>
                                        <h4 className="font-bold">{David.name}</h4>
                                        <p className="text-xs text-gray-500">
                                            {David.designation}
                                        </p>
                                    </div>
                                </div>

                                <h3 className="mt-3 text-lg font-bold">{David.title}</h3>
                                <p className="text-sm text-gray-600">{David.desc}</p>

                                <div className="flex justify-between mt-4 text-sm">
                                    <div className="flex gap-4">
                                        <span className="flex items-center gap-1">
                                            <img src="/assets/icons/ThumbUpIcon.svg" className="w-5 h-5" />
                                            {David.likes}
                                        </span>
                                        <span className="flex items-center gap-1">
                                            <img src="/assets/icons/comments.svg" className="w-5 h-5" />
                                            {David.comments}
                                        </span>
                                    </div>
                                    <img src="/assets/icons/BookmarkIcon.svg" className="w-5 h-5 cursor-pointer" />
                                </div>
                            </div>
                        )
                    }

                    {
                        Elena && (
                            <div className="bg-white rounded-2xl shadow-md mb-5 overflow-hidden">
                                <img src={DiscussionVisual.image} className="w-full" />

                                <div className="p-4">
                                    <div className="flex gap-3 items-center">
                                        <img src={Elena.img} className="w-10 h-10 rounded-lg" />
                                        <div>
                                            <h4 className="font-bold">{Elena.name}</h4>
                                            <p className="text-xs text-gray-500">
                                                {Elena.designation}
                                            </p>
                                        </div>
                                    </div>

                                    <h3 className="mt-3 text-lg font-bold">{Elena.title}</h3>

                                    <div className="flex justify-between mt-4 text-sm">
                                        <div className="flex gap-4">
                                            <span className="flex items-center gap-1">
                                                <img src="/assets/icons/ThumbUpIcon.svg" className="w-5 h-5" />
                                                {Elena.likes}
                                            </span>
                                            <span className="flex items-center gap-1">
                                                <img src="/assets/icons/comments.svg" className="w-5 h-5" />
                                                {Elena.comments}
                                            </span>
                                        </div>
                                        <img src="/assets/icons/BookmarkIcon.svg" className="w-5 h-5 cursor-pointer" />
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div >

                {/* 🔹 RIGHT */}
                < div className="flex-1" >

                    {/* MEMBERS */}
                    < div className="bg-white p-5 rounded-2xl" >
                        <div className="flex justify-between">
                            <h4 className="font-bold">Members</h4>
                            <span className="text-blue-900 font-bold cursor-pointer">
                                View all
                            </span>
                        </div>

                        <div className="flex gap-2 mt-3">
                            {[1, 2, 3, 4].map((i) => (
                                <img
                                    key={i}
                                    src={m1.image}
                                    className="w-16 h-16 rounded-lg"
                                />
                            ))}
                            <div className="w-16 h-16 flex items-center justify-center bg-gray-200 rounded-lg">
                                +12k
                            </div>
                        </div>

                        <p className="text-xs mt-3 text-gray-500">
                            Join professionals from OpenAI, Google, NVIDIA.
                        </p>
                    </div >

                    {/* ADMINS */}
                    < div className="bg-white mt-6 p-5 rounded-2xl" >
                        <h4 className="font-bold mb-3">Admins</h4>

                        {
                            [Anya, Vane].map((admin, i) => (
                                admin && (
                                    <div key={i} className="flex gap-3 mb-3">
                                        <img src={admin.img} className="w-10 h-10 rounded-lg" />
                                        <div>
                                            <h4 className="font-bold">{admin.name}</h4>
                                            <p className="text-xs text-blue-900">
                                                {admin.designation}
                                            </p>
                                        </div>
                                    </div>
                                )
                            ))
                        }
                    </div >

                    {/* COMMUNITY */}
                    < div className="bg-[#eeeeF6] mt-6 p-5 rounded-2xl border-l-4 border-[#031D4E]" >
                        <h4 className="font-bold mb-3">Community Standards</h4>

                        <ul className="space-y-2 text-sm">
                            {["Be respectful", "No spam", "Safe discussions"].map((rule) => (
                                <li key={rule} className="flex items-center gap-2">
                                    ✔ {rule}
                                </li>
                            ))}
                        </ul>
                    </div >
                </div >
            </div >
            <BottomNav />
        </div >
    );
}