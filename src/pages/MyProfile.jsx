// pages/MyProfile.jsx
import Sidebar from "../components/layout/Sidebar";
import Navbar from "../components/layout/Navbar";
import ProfileInfoCard from "../components/profile/ProfileInfoCard";
import DailyStreak from "../components/profile/DailyStreak";
import SummaryCard from "../components/profile/SummaryCard";

export default function MyProfile() {
  return (
    <div className="flex">
      <Sidebar />

      <div className="flex-1 bg-gray-100 min-h-screen">
        <Navbar />

        <div className="p-6 space-y-6">
          <h1 className="text-xl font-semibold">My Profile</h1>

          {/* Top Section */}
          <div className="grid grid-cols-3 gap-4">
            <ProfileInfoCard />
            <DailyStreak />

            <div className="bg-white rounded-xl shadow p-4 space-y-2">
              <p className="cursor-pointer hover:text-blue-500">My nAcademy</p>
              <p className="cursor-pointer hover:text-blue-500">My Gronet</p>
              <p className="cursor-pointer hover:text-blue-500">My Abyasa</p>
              <p className="cursor-pointer hover:text-blue-500">My nConnect</p>
            </div>
          </div>

          {/* Summary */}
          <div className="grid grid-cols-4 gap-4">
            <SummaryCard title="Total Visits" value="40" color="#3730a3" />
            <SummaryCard title="Active Days" value="50" color="#7e22ce" />
            <SummaryCard title="Avg Time" value="5" color="#065f46" />
            <SummaryCard title="Engagement" value="5" color="#0f766e" />
          </div>

          {/* Charts Section */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded-xl shadow h-64 flex items-center justify-center text-gray-400">
              Activity Chart
            </div>

            <div className="bg-white p-4 rounded-xl shadow h-64 flex items-center justify-center text-gray-400">
              Topic Distribution
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
