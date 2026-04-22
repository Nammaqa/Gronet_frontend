import Sidebar from "../components/layout/Sidebar";
import RightSidebar from "../components/layout/RightSidebar";
import FeedList from "../components/feed/FeedList";
import PageLayout from "../components/layout/PageLayout";

export default function HomeFeed() {
  return (
    <PageLayout>
      <div className="w-full px-4 md:px-6 lg:px-10 py-6 flex flex-col lg:flex-row gap-6 font-['Mada',sans-serif]">
        {/* Left Sidebar — hidden on mobile */}
        <div className="hidden lg:block">
          <Sidebar />
        </div>

        {/* Center Feed — full width on mobile */}
        <div className="flex-[2] flex flex-col gap-6 min-w-0">
          <FeedList />
        </div>

        {/* Right Sidebar — hidden on mobile/tablet */}
        <div className="hidden xl:block flex-1 min-w-[280px]">
          <RightSidebar />
        </div>
      </div>
    </PageLayout>
  );
}
