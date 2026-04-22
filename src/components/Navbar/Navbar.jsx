import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Dropdown from "./Dropdown";
import { NAV_ITEMS } from "./navData";
import "../../styles/global.css";

export default function Navbar({ onMenuClick }) {
  const [openMenu, setOpenMenu] = useState(null);
  const navigate = useNavigate();

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-100 px-6 py-2 flex items-center justify-between font-['Mada']">
      {/* Left */}
      <div className="flex items-center gap-1">
        <button onClick={onMenuClick} className="p-2 hover:bg-gray-50 rounded-lg text-gray-500 transition-colors">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="3" y1="6" x2="21" y2="6"/>
            <line x1="3" y1="12" x2="21" y2="12"/>
            <line x1="3" y1="18" x2="21" y2="18"/>
          </svg>
        </button>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-gray-500 flex-shrink-0">
          <rect x="3" y="3" width="7" height="7"/>
          <rect x="14" y="3" width="7" height="7"/>
          <rect x="14" y="14" width="7" height="7"/>
          <rect x="3" y="14" width="7" height="7"/>
        </svg>
        <span className="text-[20px] font-black text-[#191970] tracking-tight leading-none">Gronet</span>
      </div>

      {/* Center */}
      <div className="hidden xl:flex items-center gap-1">
        {NAV_ITEMS.map((item) => (
          <div key={item.label} className="relative"
            onMouseEnter={() => item.dropdown && setOpenMenu(item.label)}
            onMouseLeave={() => setOpenMenu(null)}
          >
            <button
              onClick={() => navigate(item.to)}
              className={`nav-link flex items-center gap-1 px-3 py-2 text-[14px] font-semibold rounded-lg transition-colors
                ${openMenu === item.label ? "text-[#191970] bg-blue-50" : "text-gray-500 hover:text-[#191970] hover:bg-gray-50"}`}
            >
              {item.label}
              {item.dropdown && (
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                  className={`transition-transform duration-200 ${openMenu === item.label ? "rotate-180" : ""}`}>
                  <polyline points="6 9 12 15 18 9"/>
                </svg>
              )}
            </button>
            {item.dropdown && <Dropdown items={item.dropdown} visible={openMenu === item.label} />}
          </div>
        ))}
      </div>

      {/* Right */}
      <div className="flex items-center gap-4">
        <button className="p-2 text-gray-400 hover:bg-gray-50 rounded-full transition-colors">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8"/>
            <line x1="21" y1="21" x2="16.65" y2="16.65"/>
          </svg>
        </button>
        <div className="w-9 h-9 rounded-full bg-gray-100 border-2 border-white shadow-sm overflow-hidden cursor-pointer">
          <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop" alt="User" className="w-full h-full object-cover" />
        </div>
      </div>
    </nav>
  );
}
