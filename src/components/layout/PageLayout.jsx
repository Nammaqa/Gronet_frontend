import { useState } from "react";
import Navbar from "../Navbar/Navbar";
import Drawer from "./Drawer";

export default function PageLayout({ children }) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <div className="w-full min-h-screen bg-[#f5f7fa] font-['Mada',sans-serif]">
      <Drawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} />
      <Navbar onMenuClick={() => setIsDrawerOpen(true)} />
      {children}
    </div>
  );
}
