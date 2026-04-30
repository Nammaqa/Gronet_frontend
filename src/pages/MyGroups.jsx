import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { groups } from "../data/keywords";
import Navbar from "../components/Navbar/Navbar";

export default function MyGroups() {
    const [activePage, setActivePage] = useState("My Groups");
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();
    const [selectedGroup, setSelectedGroup] = useState("My Groups");

    const tabsList = ["Invitations", "Sent Requests", "My Groups", "Suggestions"];

    const GroupCard = ({ group }) => {
        return (
            <div className="bg-white rounded-2xl overflow-hidden min-h-[370px] shadow-sm">
                {/* Image */}
                <div className="relative">
                    <img
                        src={group.image}
                        alt={group.title}
                        className="w-full h-[160px] object-cover"
                    />
                    {group.tag && (
                        <span className="absolute top-2 left-2 bg-yellow-400 text-sm font-bold px-3 py-1 rounded-full">
                            {group.tag}
                        </span>
                    )}
                </div>

                {/* Body */}
                <div className="p-4">
                    <h3 className="text-lg font-medium text-gray-900">
                        {group.title}
                    </h3>
                    <p className="text-sm text-gray-600 mt-2 leading-5">
                        {group.description}
                    </p>

                    {/* Footer */}
                    <div className="flex justify-between items-center mt-4 pt-4 border-t">
                        <span className="flex items-center gap-2 text-sm font-bold text-gray-900">
                            <img src="/assets/icons/members.png" alt="Members" />
                            {group.members}
                        </span>

                        <button
                            className="px-6 py-2 rounded-lg bg-indigo-100 text-indigo-900 font-bold hover:bg-indigo-900 hover:text-white transition"
                            onClick={() => {
                                setSelectedGroup("Group Detail");
                                navigate("/group-detail");
                            }}
                        >
                            View
                        </button>
                    </div>
                </div>
            </div>
        );
    };

    const CreateCard = () => {
        return (
            <div className="border-2 border-dashed border-gray-300 rounded-2xl bg-white text-center p-6 cursor-pointer">
                <div className="align-middle mt-10 lg:mt-20">
                    <div className="w-16 h-16 flex items-center justify-center mx-auto rounded-lg bg-indigo-900/10 text-indigo-900 text-2xl">
                        +
                    </div>

                    <h3 className="mt-5 text-lg font-bold text-gray-900">
                        Create New Circle
                    </h3>

                    <p className="mt-3 text-sm text-gray-600 px-2">
                        Start your own community and share your expertise.
                    </p>

                    <button
                        className="mt-4 px-4 py-2 bg-indigo-900 text-white rounded-lg"
                        onClick={() => {
                            setSelectedGroup("My Gronetters");
                            navigate("/create-group");
                        }}
                    >
                        Start Now
                    </button>
                </div>
            </div>
        );
    };

    return (
        <div className="bg-[#f5f7fb] min-h-screen">
            <Navbar />

            <div className="max-w-[1300px] mx-auto p-5">
                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between md:items-center gap-4 mb-5">

                    {/* Dropdown */}
                    <div className="relative">
                        <p className="text-xs font-bold">
                            PROFESSIONAL COMMUNITIES
                        </p>

                        <div
                            className="flex items-center gap-2 mt-2 px-4 py-2 border rounded-lg text-xl font-bold cursor-pointer bg-indigo-50 max-w-fit"
                            onClick={() => setOpen(!open)}
                        >
                            {selectedGroup}
                            <img src="/assets/icons/downarrow.png" alt="icon" />
                        </div>

                        {open && (
                            <div className="absolute mt-2 bg-indigo-50 rounded-lg p-2 shadow-lg z-50">
                                <div
                                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-red-100 font-bold cursor-pointer"
                                    onClick={() => {
                                        setSelectedGroup("My Gronetters");
                                        setOpen(false);
                                        navigate("/my-gronetters");
                                    }}
                                >
                                    <img src="/assets/icons/members.png" alt="members" className="w-5" />                                    My Gronetters
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Tabs */}
                    <div className="flex bg-indigo-50 rounded-lg overflow-x-auto">
                        {tabsList.map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActivePage(tab)}
                                className={`px-6 py-2 text-sm font-bold whitespace-nowrap rounded-lg ${activePage === tab
                                    ? "bg-indigo-900 text-white"
                                    : "hover:bg-indigo-200"
                                    }`}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {groups.map((group, i) => (
                        <GroupCard key={i} group={group} />
                    ))}
                    {activePage === "My Groups" && <CreateCard />}
                </div>
            </div>
        </div>
    );
}