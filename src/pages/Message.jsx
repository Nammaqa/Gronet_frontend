import { useState } from "react";
import { Plus, Search, MessageSquare, Pencil } from "lucide-react";
import { chatData } from "../data/keywords.js";
import BottomNav from "../components/layout/BottomNav.jsx";
import ActiveChart from "./ActiveChart.jsx";
import { profile } from "../data/keywords.js";
import { useNavigate } from "react-router-dom";


// Chat Item
function ChatListItem({ name, message, time, active, avatar }) {
    return (
        <div
            className={`flex items-center gap-3 p-2.5 rounded-2xl cursor-pointer transition 
      ${active ? "bg-[rgba(196,198,207,0.2)]" : "hover:bg-[rgb(232,235,242)]"}`}
        >
            <img src={avatar} alt={name} className="w-10 h-10 rounded-full" />

            <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                    <h4 className="text-[15px] font-semibold truncate">{name}</h4>
                    <span className="text-[11px] text-[#031d4e]">{time}</span>
                </div>

                <p className="text-[14px] text-gray-500 truncate">{message}</p>
            </div>

            {active && <div className="w-2.5 h-2.5 bg-[#031d4e] rounded-full" />}
        </div>
    );
}

// Sidebar
function Sidebar({ onSelectChat, selectedChat }) {
    return (
        <div className="bg-[#f1f3f9] p-4 h-full overflow-y-auto">

            {/* Header */}
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold">Messages</h2>

                <button className="bg-[#031d4e] text-white p-2.5 rounded-xl shadow">
                    <Plus size={18} />
                </button>
            </div>

            {/* Search */}
            <div className="relative mb-4">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                <input
                    type="text"
                    placeholder="Search conversations..."
                    className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-[#e1e2ec] outline-none text-sm"
                />
            </div>

            {/* Chat List */}
            <div className="flex flex-col gap-2">
                {chatData.map((chat) => (
                    <div key={chat.id} onClick={() => onSelectChat(chat)}>
                        <ChatListItem
                            {...chat}
                            active={selectedChat?.id === chat.id}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

// Empty State
function EmptyState() {
    return (
        <div className="flex flex-col items-center text-center px-4">
            <div className="w-16 h-16 bg-[#e1e2ec] rounded-2xl flex items-center justify-center mb-5">
                <MessageSquare size={26} className="text-[#031d4e]" />
            </div>

            <h2 className="text-2xl font-semibold mb-2">
                Select a conversation
            </h2>

            <p className="text-gray-500 mb-5 max-w-[420px]">
                Choose an existing chat or start a new one.
            </p>

            <button className="bg-[#031d4e] text-white px-6 py-3 rounded-xl">
                Start New Message
            </button>
        </div>
    );
}

// Main Page
export default function Messaging() {

    const [selectedChat, setSelectedChat] = useState(null);
    const navigate = useNavigate();


    return (
        <>
            {/* 🔹 NAVBAR */}
            {!(selectedChat) && (
                <nav className="w-full bg-white shadow-sm sticky top-0 z-50">
                    <div className="flex items-center justify-between px-4 py-3">
                        <div className="flex items-center gap-4">
                            <img src="/assets/icons/MenuIcon.svg" className="text-2xl cursor-pointer w-5 h-5"
                                onClick={() => navigate("/groups")} />
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
            )}

            <div className="h-screen bg-[#f1f3f9] md:flex">

                <div className="md:hidden h-full">

                    {selectedChat ? (
                        <ActiveChart
                            selectedChat={selectedChat}
                            onBack={() => setSelectedChat(null)}
                        />
                    ) : (
                        <Sidebar
                            onSelectChat={setSelectedChat}
                            selectedChat={selectedChat}
                        />
                    )}

                </div>

                {/* 💻 DESKTOP VIEW */}
                <div className="hidden md:flex w-full">

                    {/* Sidebar */}
                    <div className="w-[300px] border-r">
                        <Sidebar
                            onSelectChat={setSelectedChat}
                            selectedChat={selectedChat}
                        />
                    </div>

                    {/* Right panel */}
                    <div className="flex-1">
                        {selectedChat ? (
                            <ActiveChart selectedChat={selectedChat} />
                        ) : (
                            <EmptyState />
                        )}
                    </div>

                </div>
                {!(selectedChat) && (
                    <BottomNav />
                )}
            </div>
        </>
    );
}
