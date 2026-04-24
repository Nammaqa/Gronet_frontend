import { useState } from "react";
import Navbar from "../Navbar/Navbar";
import Drawer from "./Drawer";
import BottomNav from "./BottomNav";

export default function PageLayout({ children }) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <div
      className="font-['Mada',sans-serif]"
      style={{
        minHeight: "100vh",
        background: "#f5f7fb",
        overflowX: "hidden",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Drawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} />

      {/* Navbar — fixed height at top */}
      <Navbar onMenuClick={() => setIsDrawerOpen(true)} />

      {/* Main content — flex:1 fills all remaining vertical space */}
      <main
        style={{ flex: 1, display: "flex", flexDirection: "column" }}
        className="pb-16 md:pb-0"
      >
        {children}
      </main>

      {/* Mobile bottom nav — stays at bottom */}
      <BottomNav />
    </div>
  );
}
