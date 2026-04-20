import Sidebar from "../components/layout/Sidebar";
import RightSidebar from "../components/layout/RightSidebar";
import FeedList from "../components/feed/FeedList";
import PageLayout from "../components/layout/PageLayout";

export default function HomeFeed() {
  return (
    <PageLayout>
      <div className="w-full px-6 lg:px-10 py-8 flex flex-col lg:flex-row gap-8 font-['Mada',sans-serif]">
        {/* Left Column: Profile Card */}
        <Sidebar />

        {/* Center Column: Feed */}
        <div className="flex-[2] flex flex-col gap-6">
          <FeedList />
        </div>

        {/* Right Column: Expert Connections */}
        <div className="flex-1 min-w-[320px]">
          <RightSidebar />
        </div>
      </div>
    </PageLayout>
  );
}
