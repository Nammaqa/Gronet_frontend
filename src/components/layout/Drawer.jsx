import { NavLink } from "react-router-dom";
import { CURRENT_USER } from "../../data/keywords";

const DRAWER_LINKS = [
  { name: "Home", to: "/home", icon: (props) => <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg> },
  { name: "Gronetters", to: "/gronetters", icon: (props) => <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg> },
  { name: "Explore", to: "/explore", icon: (props) => <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg> },
  { name: "Messages", to: "/messages", icon: (props) => <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg> },
  { name: "Discussion", to: "/article", icon: (props) => <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/><line x1="9" y1="10" x2="15" y2="10"/><line x1="9" y1="14" x2="13" y2="14"/></svg> },
  { name: "Profile", to: "/profile", icon: (props) => <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg> },
  { name: "Settings", to: "/settings", icon: (props) => <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg> },
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
          <div className="flex items-center gap-2">
            <span className="font-black text-3xl tracking-tighter text-[#191970]">Gronet</span>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full transition-colors text-gray-400">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto py-3 px-4">
          <ul className="space-y-2">
            {DRAWER_LINKS.map((link) => (
              <li key={link.name}>
                <NavLink
                  to={link.to}
                  onClick={onClose}
                  className={({ isActive }) =>
                    `w-full flex items-center gap-4 px-4 py-3.5 rounded-2xl font-bold text-[15px] transition-all ${
                      isActive ? 'bg-[#191970] text-white shadow-lg shadow-blue-100' : 'text-gray-400 hover:bg-[#CBD5E0] hover:text-gray-700'
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      <link.icon className={`w-5 h-5 ${isActive ? 'text-white' : ''}`} />
                      {link.name}
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
