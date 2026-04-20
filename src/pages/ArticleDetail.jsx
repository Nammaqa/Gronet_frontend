import { useState } from "react";
import PageLayout from "../components/layout/PageLayout";
import { ARTICLE, ARTICLE_COMMENTS } from "../data/keywords";

function CommentItem({ comment, nested = false }) {
  const [liked, setLiked] = useState(false);
  return (
    <div className={`flex gap-3 ${nested ? "ml-10 mt-3" : ""}`}>
      <img src={comment.avatar} alt={comment.name} className={`rounded-full object-cover flex-shrink-0 ${nested ? "w-7 h-7" : "w-9 h-9"}`} />
      <div className="flex-1">
        <div className="bg-gray-50 rounded-2xl px-4 py-3">
          <div className="flex items-center justify-between mb-1">
            <span className="text-sm font-bold text-gray-800">{comment.name}</span>
            <span className="text-xs text-gray-400">{comment.time}</span>
          </div>
          <p className="text-sm text-gray-600 leading-relaxed">{comment.text}</p>
        </div>
        <div className="flex items-center gap-4 mt-1.5 px-2">
          <button onClick={() => setLiked(!liked)} className={`flex items-center gap-1 text-xs font-semibold transition-colors ${liked ? "text-[#2563eb]" : "text-gray-400 hover:text-[#2563eb]"}`}>
            <svg width="13" height="13" viewBox="0 0 24 24" fill={liked ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
            </svg>
            {comment.likes + (liked ? 1 : 0)}
          </button>
          <button className="text-xs font-semibold text-gray-400 hover:text-[#2563eb] transition-colors">Reply</button>
        </div>
        {comment.replies?.map((r) => <CommentItem key={r.id} comment={r} nested />)}
      </div>
    </div>
  );
}

export default function ArticleDetail() {
  const [comment, setComment] = useState("");
  const [liked, setLiked] = useState(false);
  const [bookmarked, setBookmarked] = useState(false);

  return (
    <PageLayout>
      <div className="w-full bg-[#f5f7fb] min-h-screen font-['Mada']">

        {/* Hero Banner */}
        <div className="relative w-full h-72 overflow-hidden"
          style={{ background: "linear-gradient(135deg, #0f172a 0%, #1e3a5f 45%, #064e3b 100%)" }}>
          <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
            <defs><pattern id="hero-grid" width="40" height="40" patternUnits="userSpaceOnUse"><path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5"/></pattern></defs>
            <rect width="100%" height="100%" fill="url(#hero-grid)"/>
          </svg>
          <div className="absolute inset-0 flex items-center justify-center gap-20 select-none pointer-events-none overflow-hidden opacity-[0.04]">
            <span className="text-white font-black tracking-widest whitespace-nowrap text-[90px]">COLLABORATION</span>
            <span className="text-white font-black tracking-widest whitespace-nowrap text-[90px]">DEEP WORK</span>
          </div>
          <div className="absolute inset-0 flex items-center justify-center gap-3">
            {ARTICLE.categories.map((cat) => (
              <span key={cat} className="bg-white/15 backdrop-blur-sm text-white text-xs font-black tracking-widest px-5 py-2 rounded-full border border-white/25 uppercase">{cat}</span>
            ))}
          </div>
        </div>

        {/* Article Card */}
        <div className="flex justify-center px-4 -mt-12 pb-16 relative z-10">
          <div className="w-full bg-white shadow-lg border border-gray-100 flex flex-col rounded-2xl overflow-hidden" style={{ maxWidth: '848px' }}>

            {/* Header */}
            <div className="px-10 pt-10 pb-6 border-b border-gray-50">
              <h1 className="text-[26px] font-bold text-[#0f172a] leading-snug mb-6" style={{ fontFamily: 'Mada, sans-serif', margin: 0 }}>
                {ARTICLE.title}
              </h1>
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div className="flex items-center gap-3">
                  <img src={ARTICLE.author.avatar} alt={ARTICLE.author.name} className="w-11 h-11 rounded-full object-cover border-2 border-gray-100 shadow-sm" />
                  <div>
                    <p className="text-sm font-bold text-gray-800">{ARTICLE.author.name}</p>
                    <p className="text-xs text-gray-400 mt-0.5">{ARTICLE.author.meta}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 flex-wrap">
                  {ARTICLE.tags.map((tag) => (
                    <span key={tag} className="text-xs font-semibold text-[#2563eb] bg-blue-50 px-3 py-1 rounded-full">{tag}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* Body */}
            <div className="px-10 py-8 flex flex-col gap-6">
              <blockquote className="bg-gray-50 border-l-4 border-[#2563eb] rounded-r-xl px-6 py-5">
                <p className="text-[15px] text-gray-600 italic leading-relaxed">"{ARTICLE.quote}"</p>
              </blockquote>
              {ARTICLE.paragraphs.map((p, i) => (
                <p key={i} className="text-[15px] text-gray-600 leading-8">{p}</p>
              ))}
            </div>

            {/* Engagement */}
            <div className="px-10 py-5 border-t border-gray-100 flex items-center justify-between">
              <div className="flex items-center gap-6">
                <button onClick={() => setLiked(!liked)} className={`flex items-center gap-2 text-sm font-semibold transition-colors ${liked ? "text-[#2563eb]" : "text-gray-400 hover:text-[#2563eb]"}`}>
                  <svg width="17" height="17" viewBox="0 0 24 24" fill={liked ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                  </svg>
                  {ARTICLE.engagement.likes + (liked ? 1 : 0)}
                </button>
                <button className="flex items-center gap-2 text-sm font-semibold text-gray-400 hover:text-[#2563eb] transition-colors">
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                  </svg>
                  {ARTICLE.engagement.comments}
                </button>
                <button className="flex items-center gap-2 text-sm font-semibold text-gray-400 hover:text-[#2563eb] transition-colors">
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/>
                    <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>
                  </svg>
                  {ARTICLE.engagement.shares}
                </button>
              </div>
              <div className="flex items-center gap-4">
                <button onClick={() => setBookmarked(!bookmarked)} className={`transition-colors ${bookmarked ? "text-[#2563eb]" : "text-gray-400 hover:text-[#2563eb]"}`}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill={bookmarked ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/>
                  </svg>
                </button>
                <button className="text-gray-400 hover:text-[#2563eb] transition-colors">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/>
                    <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>
                  </svg>
                </button>
              </div>
            </div>

            {/* Discussion */}
            <div className="px-10 py-8 border-t border-gray-100">
              <h3 className="text-base font-bold text-gray-800 mb-6">Discussion</h3>
              <div className="flex items-center gap-3 mb-8">
                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop" alt="You" className="w-10 h-10 rounded-full object-cover flex-shrink-0 border-2 border-gray-100" />
                <div className="flex-1 flex items-center gap-3 bg-gray-50 rounded-2xl px-5 py-3 border border-gray-200 focus-within:border-[#2563eb] focus-within:ring-2 focus-within:ring-[#2563eb]/10 transition">
                  <input type="text" value={comment} onChange={(e) => setComment(e.target.value)}
                    placeholder="Add to the discussion..."
                    className="flex-1 bg-transparent text-sm text-gray-700 placeholder-gray-400 focus:outline-none font-['Mada']" />
                  <button className={`flex-shrink-0 transition-colors ${comment ? "text-[#2563eb]" : "text-gray-300"}`}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>
                    </svg>
                  </button>
                </div>
              </div>
              <div className="flex flex-col gap-6">
                {ARTICLE_COMMENTS.map((c) => <CommentItem key={c.id} comment={c} />)}
              </div>
              <div className="mt-8 flex justify-center">
                <button className="px-8 py-3 rounded-xl border border-gray-200 text-sm font-semibold text-gray-500 hover:bg-gray-50 hover:border-gray-300 transition-all">
                  View 10 more comments
                </button>
              </div>
            </div> 

          </div>
        </div>
      </div>
    </PageLayout>
  );
}
