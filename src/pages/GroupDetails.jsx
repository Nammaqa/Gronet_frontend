import React, { useState, useEffect } from "react";
import {
    m1,
    banner,
    profile,
    DiscussionVisual,
    Pending,
    networkUsers,
} from "../data/keywords.js";
import { Search } from "lucide-react";
import { useNavigate } from "react-router-dom";
import BottomNav from "../components/layout/BottomNav.jsx";


function getTimeAgo(date) {
    const now = new Date();
    const past = new Date(date);
    const diff = Math.floor((now - past) / 1000);

    if (diff < 60) return `${diff}s ago`;
    if (diff < 3600) return `${Math.floor(diff / 60)}m ago`;
    if (diff < 86400) return `${Math.floor(diff / 3600)}h ago`;
    if (diff < 2592000) return `${Math.floor(diff / 86400)}d ago`;

    return past.toLocaleDateString();
}

export default function GroupDetail() {
    const [groupData, setGroupData] = useState(null);
    const navigate = useNavigate();
    const [likedPosts, setLikedPosts] = useState({});
    const [savedPosts, setSavedPosts] = useState({});
    const toggleLike = (id) => {
        setLikedPosts((prev) => ({
            ...prev,
            [id]: !prev[id],
        }));
    };

    const toggleSave = (id) => {
        setSavedPosts((prev) => ({
            ...prev,
            [id]: !prev[id],
        }));
    };


    //    // Fetch group details from API
    //     useEffect(() => {
    //   api.get("/group-details")
    //     .then(res => setGroupData(res.data))
    //     .catch(err => console.error(err));
    // }, []);

    // Dummy data (replace with API later)
    useEffect(() => {
        setGroupData({
            name: "AI Professionals",
            visibility: "Public Group",
            membersCount: "12.8k Members",
            createdAt: "2023-06-15",
            description: "The premier hub for machine learning engineers, data scientists, and AI researchers to discuss the latest breakthroughs in LLMs, computer vision, and neural architecture.",
            tags: ["MACHINE LEARNING", "LLM", "ETHICS", "PYTORCH"],
            members: [
                { id: 1, image: m1.image },
                { id: 2, image: m1.image },
                { id: 3, image: m1.image },
                { id: 4, image: m1.image },
            ],

            totalMembers: 12800,

            membersDescription:
                "Join professionals from OpenAI, Google, NVIDIA.",
        });
    }, []);

    const David = Pending.find((u) => u.name === "David Chen");
    const Elena = Pending.find((u) => u.name === "Sarah Miller");
    const Anya = networkUsers.find((u) => u.name === "Anya Patel");
    const Vane = networkUsers.find((u) => u.name === "Julian Vane");

    return (
        <div className="font-sans w-full bg-[#f5f7fb] text-gray-700">

            {/* NAVBAR */}
            <nav className="w-full bg-white shadow-sm sticky top-0 z-50">
                <div className="flex items-center justify-between px-4 py-3">
                    <div className="flex items-center gap-4">
                        <img
                            src="/assets/icons/MenuIcon.svg"
                            className="cursor-pointer w-5 h-5"
                            onClick={() => navigate("/groups")}
                        />
                        <img
                            src="/assets/icons/NammaQALogo.png"
                            className="w-[200px]"
                        />
                    </div>

                    <div className="flex items-center gap-4">
                        <Search className="w-5 h-5 text-gray-600 cursor-pointer" />
                        <img
                            src={profile.image}
                            alt="profile"
                            className="w-9 h-9 rounded-lg"
                        />
                    </div>
                </div>
            </nav>

            {/* BANNER */}
            <div className="w-full">
                <img src={banner.image} className="w-full object-cover" />
            </div>

            {/* HEADER */}
            {/* 🔹 HEADER */}
            <div className="bg-[#f5f7fb] px-4 md:px-6 pb-6">

                <div className="flex flex-col md:flex-row md:items-center md:justify-between">

                    {/* LEFT SIDE */}
                    <div className="flex items-start md:items-center gap-4 -mt-20">

                        {/* Profile Image */}
                        <img
                            src={profile.image}
                            alt="profile"
                            className="w-30 h-30 rounded-xl border-4 border-white shadow-md"
                        />

                        {/* Text */}
                        <div>
                            <h2 className="pt-[90px] text-xl md:text-4xl font-bold text-gray-900">
                                {groupData?.name || "AI Professionals"}
                            </h2>

                            <div className="flex flex-wrap items-center gap-4 mt-1 text-sm text-gray-500">

                                <span className="flex items-center gap-1">
                                    <img src="/assets/icons/map.svg" className="w-4 h-4" />
                                    {groupData?.visibility || "Public Group"}
                                </span>

                                <span className="flex items-center gap-1">
                                    <img src="/assets/icons/profile-settings.svg" className="w-4 h-4" />
                                    {groupData?.membersCount || "0 Members"}
                                </span>

                                <span className="flex items-center gap-1">
                                    <img src="/assets/icons/calander.svg" className="w-4 h-4" />
                                    {groupData?.createdAt
                                        ? `Created ${new Date(groupData.createdAt).toLocaleDateString(
                                            "en-IN",
                                            { month: "long", year: "numeric" }
                                        )}`
                                        : "Created Date"}
                                </span>

                            </div>
                        </div>
                    </div>

                    {/* RIGHT SIDE BUTTON */}
                    <button className="mt-4 md:mt-0 bg-[#031D4E] text-white px-6 py-2 rounded-xl font-semibold shadow-md">
                        Join Group
                    </button>

                </div>
                {/* 🔹 CONTENT */}
                <div className="flex flex-col md:flex-row gap-5 px-4 md:px-6 pb-10">

                    {/* LEFT */}
                    <div className="flex-[2]">

                        {/* ABOUT */}
                        <div className="bg-[#f3f3fa] p-5 rounded-xl mb-4">
                            <h3 className="text-xl font-medium text-gray-900">
                                About this group
                            </h3>

                            <p className="mt-2 text-gray-600">
                                {groupData?.description || "No description available"}
                            </p>

                            <div className="mt-4 flex flex-wrap gap-2">
                                {groupData?.tags?.length > 0 ? (
                                    groupData.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="bg-indigo-100 text-[#031D4E] text-xs font-bold px-3 py-1 rounded-md"
                                        >
                                            {tag}
                                        </span>
                                    ))
                                ) : (
                                    <span className="text-gray-400 text-sm">No tags</span>
                                )}
                            </div>
                        </div>

                        {/* DISCUSSIONS HEADER */}
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="text-2xl font-extrabold">Recent Discussions</h3>

                            <div className="flex bg-indigo-50 rounded-lg">
                                <button className="px-4 py-2 bg-[#031D4E] text-white rounded-lg">
                                    Top
                                </button>
                                <button className="px-4 py-2">New</button>
                            </div>
                        </div>

                        {David && (
                            <div className="bg-white rounded-2xl shadow-md mb-5 p-4">

                                <div className="flex gap-3 items-center">
                                    <img src={David.img} className="w-10 h-10 rounded-lg" />
                                    <div>
                                        <h4 className=" font-bold">{David.name}</h4>
                                        <p className="text-xs text-gray-500">
                                            {David.designation} • {David.createdAt ? getTimeAgo(David.createdAt) : ""}
                                        </p>
                                    </div>
                                </div>

                                <h3 className="pt-10 text-3xl">{David.title}</h3>

                                <p className="text-xl text-gray-600">{David.desc}</p>

                                <div className="flex justify-between mt-4 text-sm">
                                    <div className="flex gap-4">
                                        <span className="flex items-center gap-2">
                                            <img src="\assets\icons\ThumbUpIcon.svg" alt={David.likes} />
                                        </span>
                                        <span className="flex items-center gap-2">
                                            <img src="\assets\icons\MessageIcon.svg" alt={David.comments} width={25} height={25} />
                                        </span>
                                        <span className="flex justify-items-end gap-2">
                                            <img src="\assets\icons\BookmarkIcon.svg" width={25} height={25} />
                                        </span>

                                    </div>
                                </div>

                            </div>
                        )}

                        {/* POST 2 */}
                        {Elena && (
                            <div className="bg-white rounded-2xl shadow-md mb-5 overflow-hidden">

                                <img src={DiscussionVisual.image} className="w-full" />

                                <div className="p-4">
                                    <div className="flex gap-3 items-center">
                                        <img src={Elena.img} className="w-10 h-10 rounded-lg" />
                                        <div>
                                            <h4 className="font-bold">{Elena.name}</h4>
                                            <p className="text-xs text-gray-500">
                                                {Elena.designation} • {Elena.createdAt ? getTimeAgo(Elena.createdAt) : ""}
                                            </p>
                                        </div>
                                    </div>

                                    <h3 className="pt-10 text-4xl ">{Elena.title}</h3>
                                </div>

                            </div>
                        )}

                    </div>



                    {/* RIGHT */}
                    <div className="flex-1">

                        {/* MEMBERS */}
                        <div className="bg-white p-5 rounded-2xl">
                            <div className="flex justify-between">
                                <h4 className="font-bold">Members</h4>
                                <span className="text-blue-900 font-bold cursor-pointer">
                                    View all
                                </span>
                            </div>

                            <div className="flex gap-2 mt-3">

                                {groupData?.members?.slice(0, 4).map((member) => (
                                    <img
                                        key={member.id}
                                        src={member.image}
                                        className="w-16 h-16 rounded-lg"
                                    />
                                ))}

                                <div className="w-16 h-16 flex items-center justify-center bg-gray-200 rounded-lg text-sm font-bold">
                                    +{groupData?.totalMembers
                                        ? `${Math.floor(groupData.totalMembers / 1000)}k`
                                        : "0"}
                                </div>

                            </div>

                            <p className="text-xs mt-3 text-gray-500">
                                {groupData?.membersDescription || "No data available"}
                            </p>
                        </div>

                        {/* ADMINS */}
                        <div className="bg-white mt-6 p-5 rounded-2xl">
                            <h4 className="font-bold mb-3">Admins</h4>

                            {[Anya, Vane].map((admin, i) =>
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
                            )}
                        </div>

                        {/* COMMUNITY */}
                        <div className="bg-[#eeeeF6] mt-6 p-5 rounded-2xl border-l-4 border-[#031D4E]">
                            <h4 className="font-bold mb-3">Community Standards</h4>

                            <ul className="space-y-2 text-sm">
                                <li>✔ Be respectful</li>
                                <li>✔ No spam</li>
                                <li>✔ Safe discussions</li>
                            </ul>
                        </div>

                    </div>
                </div>

                {/* FOOTER */}
                <BottomNav />

            </div>

        </div>
    );
}
