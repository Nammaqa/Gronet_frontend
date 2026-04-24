import { NavLink } from "react-router-dom";
import { HomeIcon, SearchIcon, DiscussionIcon, SettingsIcon } from "../Icons";

const BOTTOM_NAV = [
  { name: "Home", to: "/home", Icon: HomeIcon },
  { name: "Explore", to: "/explore", Icon: SearchIcon },
  { name: "Discussion", to: "/article", Icon: DiscussionIcon },
  { name: "Settings", to: "/settings", Icon: SettingsIcon },
];

export default function BottomNav() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-100 shadow-lg flex md:hidden">
      {BOTTOM_NAV.map(({ name, to, Icon }) => (
        <NavLink
          key={name}
          to={to}
          className={({ isActive }) =>
            `flex-1 flex flex-col items-center justify-center py-2 gap-0.5 transition-colors ${
              isActive ? "text-[#191970]" : "text-gray-400 hover:text-[#191970]"
            }`
          }
        >
          <Icon className="w-5 h-5" />
          <span className="text-[9px] font-semibold tracking-wide">{name}</span>
        </NavLink>
      ))}
    </nav>
  );
}
