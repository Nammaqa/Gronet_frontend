import { NavLink } from "react-router-dom";
import { CURRENT_USER } from "../../data/keywords";
import { HomeIcon, SearchIcon, DiscussionIcon, UserIcon, SettingsIcon, CloseIcon } from "../Icons";

const DRAWER_LINKS = [
  { name: "Home", to: "/home", Icon: HomeIcon },
  { name: "Explore", to: "/explore", Icon: SearchIcon },
  { name: "Discussion", to: "/article", Icon: DiscussionIcon },
  { name: "Profile", to: "/profile", Icon: UserIcon },
  { name: "Settings", to: "/settings", Icon: SettingsIcon },
];

export default function Drawer({ isOpen, onClose }) {
  return (
    <>
      <div
        className={`fixed inset-0 bg-black/60 z-[60] transition-opacity duration-300 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={onClose}
      />
      <div
        className={`fixed left-0 top-0 h-full w-80 bg-white z-[70] shadow-2xl transform transition-transform duration-300 ease-in-out flex flex-col font-['Mada'] ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <div className="px-6 pt-5 pb-3 flex items-center justify-between border-b border-gray-100">
          <span className="font-black text-3xl tracking-tighter text-[#191970]">Gronet</span>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full transition-colors text-gray-400">
            <CloseIcon className="w-6 h-6" />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto py-3 px-4 scrollbar-hide">
          <ul className="space-y-2">
            {DRAWER_LINKS.map(({ name, to, Icon }) => (
              <li key={name}>
                <NavLink
                  to={to}
                  onClick={onClose}
                  className={({ isActive }) =>
                    `w-full flex items-center gap-4 px-4 py-3.5 rounded-2xl font-bold text-[15px] transition-all ${
                      isActive ? 'bg-[#191970] text-white shadow-lg shadow-blue-100' : 'text-gray-400 hover:bg-[#CBD5E0] hover:text-gray-700'
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      <Icon className={`w-5 h-5 ${isActive ? 'text-white' : ''}`} />
                      {name}
                    </>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="p-6 border-t border-gray-100">
          <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-[1.5rem]">
            <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white shadow-sm bg-blue-100">
              <img src={CURRENT_USER.avatar} alt={CURRENT_USER.name} className="w-full h-full object-cover" />
            </div>
            <div className="flex-1 min-w-0 text-left">
              <h4 className="font-bold text-gray-900 truncate">{CURRENT_USER.name}</h4>
              <p className="text-[11px] font-bold text-[#191970] uppercase tracking-[0.1em]">{CURRENT_USER.status}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
