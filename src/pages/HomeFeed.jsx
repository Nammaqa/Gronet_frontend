import Sidebar from "../components/layout/Sidebar";
import RightSidebar from "../components/layout/RightSidebar";
import FeedList from "../components/feed/FeedList";
import PageLayout from "../components/layout/PageLayout";

export default function HomeFeed() {
  return (
    <PageLayout>
      {/* Centered container with max-width */}
      <div className="w-full max-w-[1400px] mx-auto px-6 py-6 font-['Mada',sans-serif]">
        
        {/* 3-column flex layout */}
        <div className="flex items-start gap-6">
          
          {/* Left Sidebar — 260px, hidden on mobile */}
          <aside className="hidden lg:block w-[260px] flex-shrink-0">
            <Sidebar />
          </aside>

          {/* Center Feed — flexible width */}
          <main className="flex-1 min-w-0 flex flex-col gap-5">
            <FeedList />
          </main>

          {/* Right Sidebar — 280px, hidden below xl */}
          <aside className="hidden xl:block w-[280px] flex-shrink-0">
            <RightSidebar />
          </aside>
          
        </div>
      </div>
    </PageLayout>
  );
}
