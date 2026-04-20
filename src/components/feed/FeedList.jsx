import PostCard from "./PostCard";
import { FEED_POSTS, CURRENT_USER } from "../../data/keywords";

export default function FeedList() {
  return (
    <div className="flex-1 flex flex-col gap-6 max-w-full font-['Mada']">
      {/* Post Input Box */}
      <div className="bg-white rounded-[2rem] shadow-sm border border-gray-100 p-5 flex items-center gap-4">
        <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
          <img src={CURRENT_USER.avatar} alt={CURRENT_USER.name} className="w-full h-full object-cover" />
        </div>
        <div className="flex-1 bg-gray-50 rounded-full px-6 py-3 text-gray-400 text-[15px] font-bold cursor-text hover:bg-gray-100 transition-colors">
          Share your professional insight...
        </div>
      </div>

      {/* Posts */}
      <div className="space-y-6">
        {FEED_POSTS.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}
