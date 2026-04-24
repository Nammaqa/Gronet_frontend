import { EyeIcon, MessageIcon, ThumbUpIcon, UploadIcon, MoreIcon } from "../Icons";

export default function PostCard({ post }) {
  const { isFeatured, author, title, content, timestamp, tag, engagement, hashtags } = post;

  if (isFeatured) {
    return (
      <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 text-left font-['Mada']">
        <div className="relative h-48 bg-gray-900 flex items-center justify-center overflow-hidden">
          <span className="text-gray-700 font-bold text-xl tracking-[0.2em]">COVER</span>
          <div className="absolute top-4 right-4">
            <span className="bg-[#191970] text-white text-[10px] font-bold px-3 py-1 rounded-full tracking-wider">FEATURED</span>
          </div>
          <div className="absolute bottom-4 left-6 right-6">
            <h2 className="text-2xl font-bold text-white leading-tight">{title}</h2>
          </div>
        </div>

        <div className="p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-full overflow-hidden border border-gray-100">
              <img src={author.avatar} alt={author.name} className="w-full h-full object-cover" />
            </div>
            <div>
              <h4 className="font-bold text-gray-900 leading-tight">
                {author.name} <span className="text-gray-400 font-medium">from {author.org}</span>
              </h4>
              <p className="text-[12px] font-bold text-gray-400 uppercase tracking-wide mt-0.5">{timestamp}</p>
            </div>
          </div>

          <p className="text-gray-500 text-[14px] leading-relaxed mb-4">{content}</p>

          <div className="flex flex-wrap gap-2 mb-6">
            {hashtags?.map(t => (
              <span key={t} className="px-3 py-1 bg-gray-100 text-gray-500 text-[11px] font-bold rounded-full">{t}</span>
            ))}
          </div>

          <div className="flex items-center gap-6 pt-5 border-t border-gray-50">
            <span className="flex items-center gap-1.5 text-[13px] font-bold text-gray-400">
              <EyeIcon className="w-4 h-4" />
              {engagement.views} views
            </span>
            <span className="flex items-center gap-1.5 text-[13px] font-bold text-gray-400">
              <MessageIcon className="w-4 h-4" />
              {engagement.comments} comments
            </span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-6 text-left font-['Mada']">
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full overflow-hidden border border-gray-100">
            <img src={author.avatar} alt={author.name} className="w-full h-full object-cover" />
          </div>
          <div>
            <div className="flex items-center gap-2 mb-1">
              <h4 className="font-bold text-gray-900 leading-none">{author.name}</h4>
              <span className="bg-blue-50 text-[#191970] text-[9px] font-bold px-2 py-0.5 rounded-full uppercase tracking-widest">{tag}</span>
            </div>
            <span className="text-[12px] font-bold text-gray-400 uppercase tracking-wide">{timestamp}</span>
          </div>
        </div>
        <button className="text-gray-400 hover:text-gray-600 p-1">
          <MoreIcon className="w-5 h-5" />
        </button>
      </div>

      <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">{title}</h3>
      <p className="text-gray-500 text-[14px] leading-relaxed mb-6">{content}</p>

      <div className="flex items-center gap-8 pt-6 border-t border-gray-50">
        <button className="flex items-center gap-2 text-[14px] font-bold text-gray-400 hover:text-[#191970] transition-colors">
          <ThumbUpIcon className="w-4 h-4" />
          {engagement.likes}
        </button>
        <button className="flex items-center gap-2 text-[14px] font-bold text-gray-400 hover:text-[#191970] transition-colors">
          <MessageIcon className="w-4 h-4" />
          {engagement.comments}
        </button>
        <button className="flex items-center gap-2 text-[14px] font-bold text-gray-400 hover:text-[#191970] transition-colors ml-auto">
          <UploadIcon className="w-4 h-4" />
          Share
        </button>
      </div>
    </div>
  );
}
