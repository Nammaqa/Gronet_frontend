import { useState } from "react";
import PageLayout from "../components/layout/PageLayout";
import { PROFILE_USER, PROFILE_TABS, PROFILE_POSTS } from "../data/keywords";

function ProfileHeader() {
  return (
    <div className="w-full rounded-2xl overflow-visible shadow-sm">
      {/* Banner */}
      <div
        className="relative w-full h-[180px] rounded-t-2xl"
        style={{
          background:
            "linear-gradient(135deg, #0f172a 0%, #1e3a5f 40%, #7f1d1d 100%)",
        }}
      >
        <svg
          className="absolute inset-0 w-full h-full opacity-10"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="grid"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 40 0 L 0 0 0 40"
                fill="none"
                stroke="white"
                strokeWidth="0.5"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
        {/* No connect button in banner */}
        {/* Avatar overlapping bottom-left of banner */}
        <div className="absolute left-8 bottom-0 translate-y-[50%] z-10">
          <div className="w-28 h-28 rounded-full border-4 border-white shadow-xl overflow-hidden bg-gray-200">
            <img
              src={PROFILE_USER.avatar}
              alt={PROFILE_USER.name}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* White info card */}
      <div className="bg-white rounded-b-2xl px-8 pt-4 pb-5">
        {/* Spacer for avatar overlap */}
        <div className="h-14" />
        <div className="flex items-end justify-between">
          <div>
            {/* Name, subtitle, tags below avatar */}
            <h1
              style={{ color: "#000000", fontWeight: 400, fontFamily: "Mada, sans-serif" }}
              className="text-2xl leading-tight"
            >
              {PROFILE_USER.name}
            </h1>
            <p className="text-sm text-gray-500 mt-1">{PROFILE_USER.subtitle}</p>
            <div className="flex flex-wrap gap-2 mt-3">
              {PROFILE_USER.tags.map((tag) => (
                <span key={tag.label} className={`text-[11px] font-bold tracking-wider px-3 py-1 rounded-full uppercase ${tag.color}`}>
                  {tag.label}
                </span>
              ))}
            </div>
          </div>
          {/* Connect button — bottom-right of card */}
          <button
            className="flex items-center gap-2 bg-[#191970] hover:bg-[#1e2d8a] text-white text-sm font-semibold transition-colors flex-shrink-0"
            style={{ height: '40px', borderRadius: '12px', paddingTop: '10px', paddingBottom: '10px', paddingLeft: '32px', paddingRight: '32px', gap: '7.99px' }}
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
              <circle cx="9" cy="7" r="4"/>
              <line x1="19" y1="8" x2="19" y2="14"/>
              <line x1="22" y1="11" x2="16" y2="11"/>
            </svg>
            Connect
          </button>
        </div>
      </div>
    </div>
  );
}

function ProfileInfo() {
  return null;
}

function SidebarAbout() {
  return (
    <div className="bg-gray-50 rounded-xl shadow-sm p-5 border border-gray-100">
      <h3 className="text-sm font-bold text-gray-800 mb-3">About</h3>
      <p className="text-sm text-gray-500 leading-relaxed">
        {PROFILE_USER.about}
      </p>
      <div className="mt-4 space-y-2 text-sm text-gray-500">
        <div className="flex items-center gap-2">
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-gray-400"
          >
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
            <circle cx="12" cy="10" r="3" />
          </svg>
          {PROFILE_USER.location}
        </div>
        <div className="flex items-center gap-2">
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-gray-400"
          >
            <rect x="2" y="7" width="20" height="14" rx="2" />
            <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
          </svg>
          {PROFILE_USER.organization}
        </div>
      </div>
    </div>
  );
}

const TABS = PROFILE_TABS;

function Tabs({ active, onChange }) {
  return (
    <div className="sticky top-0 z-20 bg-[#f5f7fa] pt-2 pb-0">
      <div className="flex gap-6 border-b border-black-200">
        {TABS.map((tab) => (
          <button
            key={tab}
            onClick={() => onChange(tab)}
            className={`pb-3 text-sm font-semibold transition-colors ${
              active === tab
                ? "text-[#2563eb] border-b-2 border-[#2563eb]"
                : "text-gray-400 hover:text-gray-700"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>
    </div>
  );
}

function PostCard({ post }) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5 hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start mb-3">
        <span className="text-[10px] font-bold tracking-widest text-blue-500 uppercase">
          {post.label}
        </span>
        <span className="text-xs text-gray-400">{post.time}</span>
      </div>
      <h2 className="text-base font-bold text-gray-900 leading-snug mb-2">
        {post.title}
      </h2>
      <p className="text-sm text-gray-500 line-clamp-2 mb-4">
        {post.description}
      </p>
      {post.image && (
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-44 object-cover rounded-xl mb-4"
        />
      )}
      <div className="flex items-center gap-5 text-sm text-gray-400">
        <button className="flex items-center gap-1.5 hover:text-blue-500 transition-colors">
          <svg
            width="15"
            height="15"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
          </svg>
          {post.likes}
        </button>
        <button className="flex items-center gap-1.5 hover:text-blue-500 transition-colors">
          <svg
            width="15"
            height="15"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
          {post.comments}
        </button>
      </div>
    </div>
  );
}

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState("All");

  return (
    <PageLayout>
      <div className="w-full px-4 md:px-6 lg:px-10 py-6">
        <ProfileHeader />
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-6">
          <div className="space-y-4">
            <SidebarAbout />
          </div>
          <div>
            <Tabs active={activeTab} onChange={setActiveTab} />
            <div className="mt-4 space-y-4">
              {PROFILE_POSTS.map((post) => (
                <PostCard key={post.id} post={post} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
