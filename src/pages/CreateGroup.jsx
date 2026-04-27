import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";
import { createGroup } from "../data/keywords.js"

// ----------------------create group-----------------------
export const GroupCreate = (data) => {
    return api.post("/groups", data);
};

// ------------------------------- GET ALL GROUPS----------------------------
export const getAllGroups = () => {
    return api.get("/groups");
};

// ------------------------------------------- GET GROUP BY ID--------------------------------
export const getGroupById = (id) => {
    return api.get(`/groups/${id}`);
};

const CreateGroup = () => {

    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [about, setAbout] = useState("");
    const [industry, setIndustry] = useState("");
    const [guidelines, setGuidelines] = useState("");
    const [type, setType] = useState("");
    const [termsAccepted, setTermsAccepted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleCancel = () => {
        setName("");
        setAbout("");
        setIndustry("");
        setGuidelines("");
        setType("");
        setTermsAccepted(false);
    };

    const handleCreateGroup = async () => {

        if (!name.trim() || !about.trim()) {
            alert("Name and About are required");
            return;
        }
        if (!industry || industry === "Add industry") {
            alert("Please select an industry");
            return;
        }
        if (!type) {
            alert("Please select a group type (Public or Private)");
            return;
        }
        if (!termsAccepted) {
            alert("You must agree to the terms and conditions");
            return;
        }

        setIsLoading(true);
        try {
            await GroupCreate({
                name: name.trim(),
                about: about.trim(),
                industry: industry,
                guidelines: guidelines.trim(),
                type: type,
            });

            alert("Group created successfully!");
            setName("");
            setAbout("");
            setIndustry("");
            setGuidelines("");
            setType("");
            setTermsAccepted(false);

        } catch (err) {
            console.error(err);
            const errorMessage = err.response?.data?.message || err.message || "Error creating group";
            alert(`Error creating group: ${errorMessage}`);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className=" bg-[#f5f7fb] flex justify-center items-center">
            <div className=" w-[900px] mx-4 bg-white rounded-xl p-4 sm:p-6 shadow-[0_10px_25px_rgba(0,0,0,0.08)]">

                {/* Header */}
                <div className="flex items-center justify-between">

                    <span
                        className="cursor-pointer text-2xl text-gray-700 font-bold p-2 flex-shrink-0"
                        onClick={() => navigate("/groups")}
                    >
                        ✕
                    </span>

                    <h2 className="text-base sm:text-lg font-bold  flex-1">
                        Create Group
                    </h2>

                </div>

                {/* Tabs */}
                <div className="mt-2.5 border-b border-gray-300">
                    <button className="border-none bg-transparent py-2.5 border-b-2 border-[rgba(3,29,78,1)] text-[rgba(3,29,78,1)] font-bold">
                        Group
                    </button>
                </div>

                {/* Content */}
                <div className="flex flex-col md:flex-row gap-5 mt-5">
                    {/* LEFT */}
                    <div className="flex-1">

                        <div>
                            <h3 className="m-0 text-[rgba(25,28,30,1)] font-bold">
                                Group details
                            </h3>
                            <p className="text-[13px] text-gray-600">
                                Establish your collective identity within The Curator ecosystem.
                            </p>
                        </div>

                        {/* GROUP NAME */}
                        <div className="mt-[15px]">
                            <label className="text-xs font-bold text-[rgba(67,71,78,1)]">
                                GROUP NAME*
                            </label>
                            <input
                                type="text"
                                className="w-full mt-1.5 p-2.5 rounded-lg border-none bg-[#f1f3f7] outline-none text-[rgba(25,28,30,1)]"
                                placeholder="e.g. Architectural Knowledge Commons"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>

                        {/* ABOUT */}
                        <div className="mt-[15px]">
                            <label className="text-xs font-bold text-[rgba(67,71,78,1)]">
                                ABOUT*
                            </label>
                            <textarea
                                className="w-full mt-1.5 p-2.5 rounded-lg border-none bg-[#f1f3f7] outline-none h-[90px]"
                                placeholder="Describe the purpose and mission of this group..."
                                value={about}
                                onChange={(e) => setAbout(e.target.value)}
                            />
                        </div>

                        {/* INDUSTRY */}
                        <div className="mt-[15px]">
                            <label className="text-xs font-bold text-[rgba(67,71,78,1)]">
                                INDUSTRY*
                            </label>
                            <select
                                className="w-full mt-1.5 p-2.5 rounded-lg border-none bg-[#f1f3f7] outline-none"
                                value={industry}
                                onChange={(e) => setIndustry(e.target.value)}
                            >
                                <option value="">Add industry</option>
                                <option value="Technology">Technology</option>
                                <option value="Architecture & Design">Architecture & Design</option>
                                <option value="Sustainable">Sustainable</option>
                                <option value="Urban Planning">Urban Planning</option>
                            </select>
                        </div>

                        {/* GUIDELINES */}
                        <div className="mt-[15px]">
                            <label className="text-xs font-bold text-[rgba(67,71,78,1)]">
                                GUIDELINES
                            </label>
                            <textarea
                                className="w-full mt-1.5 p-2.5 rounded-lg border-none bg-[#f1f3f7] outline-none h-[90px]"
                                placeholder="Define rules for professional conduct..."
                                value={guidelines}
                                onChange={(e) => setGuidelines(e.target.value)}
                            />
                        </div>

                        {/* GROUP TYPE */}
                        <div className="mt-[15px]">
                            <label className="text-xs font-bold text-[rgba(67,71,78,1)]">
                                GROUP TYPE*
                            </label>

                            <div className="flex gap-1 bg-[#f1f3f7] p-1 rounded-lg w-fit">
                                <button
                                    className={`px-3.5 py-1.5 rounded-md font-bold ${type === "public"
                                        ? "bg-white shadow text-[rgba(3,29,78,1)]"
                                        : ""
                                        }`}
                                    onClick={() => setType("public")}
                                    type="button"
                                >
                                    Public
                                </button>

                                <button
                                    className={`px-3.5 py-1.5 rounded-md font-bold ${type === "private"
                                        ? "bg-white shadow text-[rgba(3,29,78,1)]"
                                        : ""
                                        }`}
                                    onClick={() => setType("private")}
                                    type="button"
                                >
                                    Private
                                </button>
                            </div>

                            <p className="text-xs text-gray-600 mt-1">
                                Public groups are searchable and anyone can request to join.
                            </p>
                        </div>

                        {/* CHECKBOX */}
                        <div className="flex gap-2 mt-[15px] text-xs items-start">
                            <input
                                type="checkbox"
                                className="accent-[rgba(3,29,78,1)]"
                                checked={termsAccepted}
                                onChange={(e) => setTermsAccepted(e.target.checked)}
                            />
                            <p>
                                I agree to the{" "}
                                <span className="text-[rgba(3,29,78,1)] cursor-pointer font-bold text-sm">
                                    terms and conditions
                                </span>{" "}
                                regarding group moderation and community standards.
                            </p>
                        </div>
                    </div>

                    {/* RIGHT */}
                    <div className="hidden md:block w-[240px]">
                        <div className="bg-white p-[15px] rounded-xl shadow-[0_8px_20px_rgba(0,0,0,0.08)]">
                            <h4 className="mb-2.5 text-[rgba(25,28,30,1)] font-bold text-sm">
                                Curator Tips
                            </h4>

                            <div className="flex flex-col gap-3 mt-2.5">
                                <div className="flex items-start gap-2">
                                    <img src="/assets/icons/Margin.svg" alt="Margin" className="w-4 h-4 mt-[3px]" />
                                    <p className="text-xs text-gray-600 m-0">
                                        Groups with clear industry tags receive 40% higher engagement.
                                    </p>
                                </div>

                                <div className="flex items-start gap-2">
                                    <img src="/assets/icons/tips.svg" alt="tips" className="w-4 h-4 mt-[3px]" />
                                    <p className="text-xs text-gray-600 m-0">
                                        Keep your About section concise but aspirational.
                                    </p>
                                </div>
                            </div>

                            <img
                                src={createGroup.image}
                                alt="team"
                                className="w-full mt-2.5 rounded-lg"
                            />
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <div className="sticky bottom-0 bg-white z-10 flex justify-between items-center mt-5">
                    <div className="flex items-center gap-3 whitespace-nowrap">
                        <button
                            className="text-gray-600 cursor-pointer text-sm font-bold"
                            onClick={handleCancel}
                        >
                            Cancel
                        </button>

                        <button className="text-gray-600 cursor-pointer text-sm font-bold">
                            Save as Draft
                        </button>
                    </div>

                    <button
                        className="bg-[#0f2a5f] text-white px-[18px] py-[10px] rounded-lg whitespace-nowrap"
                        onClick={handleCreateGroup}
                        disabled={isLoading}
                    >
                        {isLoading ? "Creating..." : "Create Group →"}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CreateGroup;