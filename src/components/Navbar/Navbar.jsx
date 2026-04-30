import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Dropdown from "./Dropdown";
import { NAV_ITEMS } from "./navData";
import { MenuIcon, GridIcon, SearchIcon, ChevronDownIcon } from "../Icons";
import Drawer from "../layout/Drawer";

export default function Navbar({ onMenuClick }) {
  const [openMenu, setOpenMenu] = useState(null);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const navigate = useNavigate();

  return (
    <>
      <nav className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-100 font-['Mada']">
        <div className="flex items-center justify-between px-6 py-2 gap-4">
          {/* Left - Menu + Logo */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                if (onMenuClick) onMenuClick();
                setDrawerOpen(true);
              }}
              className="p-2 hover:bg-gray-50 rounded-lg text-gray-500 transition-colors w-12 h-12"
            >
              <MenuIcon className="w-6 h-6" />
            </button>
            <img src="/assets/icons/NammaQALogo.png" className="w-50" alt="" />
          </div>

          {/* Center - Navigation */}
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
                    <ChevronDownIcon className={`w-3 h-3 transition-transform duration-200 ${openMenu === item.label ? "rotate-180" : ""}`} />
                  )}
                </button>
                {item.dropdown && <Dropdown items={item.dropdown} visible={openMenu === item.label} />}
              </div>
            ))}
          </div>

          {/* Right - Search + Profile */}
          <div className="flex items-center gap-4">
            <button className="p-2 text-gray-400 hover:bg-gray-50 rounded-full transition-colors">
              <SearchIcon className="w-5 h-5" />
            </button>
            <div className="w-9 h-9 rounded-full bg-gray-100 border-2 border-white shadow-sm overflow-hidden cursor-pointer">
              <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop" alt="User" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </nav>
      <Drawer isOpen={drawerOpen} onClose={() => setDrawerOpen(false)} />
    </>
  );
}
