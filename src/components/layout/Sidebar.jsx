import { CURRENT_USER } from "../../data/keywords";

export default function Sidebar() {
  return (
    <div className="w-full flex flex-col gap-4 font-['Mada']">
      {/* Profile Card */}
      <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden text-center">
        <div className="h-24 bg-[#191970] relative">
          <div className="absolute inset-0 opacity-10">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="dots-sidebar" width="20" height="20" patternUnits="userSpaceOnUse">
                  <circle cx="2" cy="2" r="1" fill="white" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#dots-sidebar)" />
            </svg>
          </div>
        </div>

        <div className="px-6 pb-8 -mt-12 relative z-10 flex flex-col items-center">
          <div className="w-24 h-24 rounded-full bg-white p-1 shadow-md mb-4 overflow-hidden border-2 border-white">
            <img src={CURRENT_USER.avatar} alt={CURRENT_USER.name} className="w-full h-full rounded-full bg-blue-50 object-cover" />
          </div>

          <div className="mb-8 font-['Mada']">
            <h2 style={{ color: '#000000', fontWeight: 400, fontFamily: 'Mada, sans-serif' }} className="text-2xl leading-tight">
              {CURRENT_USER.name}
            </h2>
            <p className="text-[14px] font-bold text-gray-400 mt-1 uppercase tracking-wide">
              {CURRENT_USER.designation}
            </p>
          </div>

          <div className="w-full space-y-6 pt-6 border-t border-gray-50 font-['Mada']">
            <div className="flex justify-between items-center px-2">
              <span className="text-[13px] font-bold text-gray-400 tracking-wide">Profile Views</span>
              <span className="text-[15px] font-bold text-[#191970]">{CURRENT_USER.profileViews}</span>
            </div>
            <div className="flex justify-between items-center px-2">
              <span className="text-[13px] font-bold text-gray-400 tracking-wide">Comments</span>
              <span className="text-[15px] font-bold text-[#191970]">{CURRENT_USER.comments}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
