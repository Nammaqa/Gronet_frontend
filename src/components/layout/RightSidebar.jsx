import { useNavigate } from "react-router-dom";
import { EXPERT_CONNECTIONS } from "../../data/keywords";

export default function RightSidebar() {
  const navigate = useNavigate();

  return (
    <div className="w-full flex flex-col gap-6 text-left font-['Mada']">
      {/* Expert Connections Card */}
      <div className="bg-white rounded-[2rem] shadow-sm border border-gray-100 p-8">
        <h3 className="text-xl font-bold text-gray-900 mb-8">Expert Connections</h3>
        <div className="space-y-10">
          {EXPERT_CONNECTIONS.map((expert) => (
            <div key={expert.name} className="flex flex-col items-center text-center">
              <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-gray-50 shadow-sm mb-4">
                <img src={expert.avatar} alt={expert.name} className="w-full h-full object-cover" />
              </div>
              <div className="mb-5">
                <h4 className="font-bold text-gray-900 text-[17px] mb-1">{expert.name}</h4>
                <p className="text-[13px] font-bold text-gray-400 leading-tight px-4">{expert.role}</p>
              </div>
              <button className="w-full py-2.5 border-2 border-[#191970] text-[#191970] text-[14px] font-bold rounded-xl hover:bg-[#191970] hover:text-white transition-all duration-300">
                Connect
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Create Post / Discussion FAB */}
      <div className="flex justify-center">
        <button
          onClick={() => navigate("/discussions")}
          title="Create Post or Discussion"
          className="w-14 h-14 rounded-2xl bg-[#191970] hover:bg-[#2563eb] active:scale-95 transition-all shadow-lg flex items-center justify-center"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            {/* 3 horizontal lines */}
            <line x1="3" y1="5" x2="14" y2="5" />
            <line x1="3" y1="10" x2="14" y2="10" />
            <line x1="3" y1="15" x2="10" y2="15" />
            {/* Half pencil bottom-right */}
            <path d="M15 13l3 3-4 1 1-4z" />
            <line x1="15" y1="13" x2="18" y2="10" />
          </svg>
        </button>
      </div>
    </div>
  );
}
