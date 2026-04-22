import { useState } from "react";
import Navbar from "../Navbar/Navbar";
import Drawer from "./Drawer";
import BottomNav from "./BottomNav";

export default function PageLayout({ children }) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <div className="w-full min-h-screen bg-[#f5f7fa] font-['Mada',sans-serif]">
      <Drawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} />
      <Navbar onMenuClick={() => setIsDrawerOpen(true)} />
      {/* pb-16 on mobile to avoid content hiding behind BottomNav */}
      <div className="pb-16 md:pb-0">
        {children}
      </div>
      <BottomNav />
    </div>
  );
}
