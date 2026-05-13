import { MoreVertical, Send, Smile, PlusCircle } from "lucide-react";

export default function ActiveChart({ selectedChat, onBack }) {
    return (
        <div className="flex flex-col h-full bg-[#f4f6fb]">

            {/* Header */}
            <div className="flex justify-between items-center px-4 py-3 bg-white border-b border-gray-200">
                <div className="flex items-center gap-3">
                    <div className="flex items-center gap-2">
                        {onBack && (
                            <button onClick={onBack} className="md:hidden text-lg">
                                ←
                            </button>
                        )}
                    </div>
                    <img
                        src={selectedChat.avatar}
                        alt=""
                        className="w-10 h-10 rounded-full"
                    />

                    <div>
                        <h4 className="text-sm font-semibold text-gray-800">
                            {selectedChat.name}
                        </h4>
                        <span className="text-xs text-green-600">Online</span>
                    </div>
                </div>

                <MoreVertical className="cursor-pointer text-gray-600" />
            </div>

            {/* Messages */}
            <div className="flex-1 p-5 overflow-y-auto space-y-3">

                <div className="bg-[#eef1f8] px-3 py-2 rounded-xl w-fit max-w-[70%]">
                    <p className="text-sm text-gray-800">
                        Hello {selectedChat.name}
                    </p>
                    <span className="text-[10px] text-gray-500 block mt-1">
                        10:15 AM
                    </span>
                </div>

                <div className="bg-[#031d4e] text-white px-3 py-2 rounded-xl ml-auto w-fit max-w-[70%]">
                    <p className="text-sm">
                        This is your chat UI
                    </p>
                    <span className="text-[10px] opacity-70 block mt-1">
                        10:20 AM
                    </span>
                </div>

            </div>

            {/* Input */}
            <div className=" flex items-center gap-3 px-3 py-3 bg-white border-t border-gray-200">

                <PlusCircle className="text-gray-500 cursor-pointer" />

                <input
                    type="text"
                    placeholder="Type your message..."
                    className="flex-1 px-4 py-2 rounded-full bg-[#f1f3f7] outline-none text-sm"
                />

                <Smile className="text-gray-500 cursor-pointer" />

                <button className="bg-[#031d4e] text-white p-2 rounded-full">
                    <Send size={18} />
                </button>
            </div>

        </div>
    );
}

