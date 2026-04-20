// components/layout/Navbar.jsx
import logo from "../../assets/NammaQALogo.png";

export default function Navbar() {
  return (
    <div className="flex justify-between items-center bg-white px-6 py-3 shadow">
      {/* Logo Only */}
      <img src={logo} alt="logo" className="h-10 w-auto" />

      <div className="flex items-center gap-4">
        <span>🔔</span>
 
        <div className="flex items-center gap-2">
          <img
            src="https://i.pravatar.cc/40"
            alt="avatar"
            className="w-8 h-8 rounded-full"

          />
          <span>Aleena</span>
        </div>
      </div>
    </div>
  );
}
