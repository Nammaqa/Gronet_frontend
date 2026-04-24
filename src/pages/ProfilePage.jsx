import { useState } from "react";
import PageLayout from "../components/layout/PageLayout";
import ContentWrapper from "../components/layout/ContentWrapper";
import { PROFILE_USER, PROFILE_TABS, PROFILE_POSTS } from "../data/keywords";
import { LocationIcon, BuildingIcon, HeartIcon, MessageIcon } from "../components/Icons";

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
        <div>
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
          <LocationIcon className="w-3.5 h-3.5 text-gray-400" />
          {PROFILE_USER.location}
        </div>
        <div className="flex items-center gap-2">
          <BuildingIcon className="w-3.5 h-3.5 text-gray-400" />
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
          <HeartIcon className="w-4 h-4" />
          {post.likes}
        </button>
        <button className="flex items-center gap-1.5 hover:text-blue-500 transition-colors">
          <MessageIcon className="w-4 h-4" />
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
      <ContentWrapper>
        <ProfileHeader />
        <div className="mt-6 grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-6">
          <div className="space-y-4"><SidebarAbout /></div>
          <div>
            <Tabs active={activeTab} onChange={setActiveTab} />
            <div className="mt-4 space-y-4">
              {PROFILE_POSTS.map((post) => (<PostCard key={post.id} post={post} />))}
            </div>
          </div>
        </div>
      </ContentWrapper>
    </PageLayout>
  );
}
