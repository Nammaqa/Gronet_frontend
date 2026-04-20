import { useState } from "react";
import PageLayout from "../components/layout/PageLayout";
import {
  GRONETTERS_TABS,
  GRONETTERS_INVITATIONS,
  GRONETTERS_LIST,
} from "../data/keywords";

function InvitationCard({ person, onAccept, onReject }) {
  return (
    <div className="w-full bg-white rounded-xl border border-gray-100 shadow-sm p-4">
      <div className="flex gap-3 items-start">
        <img
          src={person.avatar}
          alt={person.name}
          className="w-12 h-12 rounded-lg object-cover flex-shrink-0"
        />
        <div className="flex-1 min-w-0">
          <p className="text-base font-semibold text-gray-900 truncate">
            {person.name}
          </p>
          <p className="text-[13px] text-gray-500 mt-0.5 truncate">
            {person.role}
          </p>
          <p className="text-xs text-blue-600 mt-1">{person.mutual}</p>
        </div>
      </div>
      <div className="flex gap-3 mt-3">
        <button
          onClick={() => onAccept(person.id)}
          className="flex-1 h-9 rounded-lg bg-[#0F2A5C] text-white text-sm font-semibold hover:opacity-90 transition-opacity font-['Mada']"
        >
          Accept
        </button>
        <button
          onClick={() => onReject(person.id)}
          className="flex-1 h-9 rounded-lg bg-[#F3D6D3] text-[#B91C1C] text-sm font-semibold hover:opacity-80 transition-opacity font-['Mada']"
        >
          Reject
        </button>
      </div>
    </div>
  );
}

function GronettterCard({ person }) {
  return (
    <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-4 flex flex-col items-center text-center min-h-[220px]">
      <div className="relative mb-3">
        <img
          src={person.avatar}
          alt={person.name}
          className="w-16 h-16 rounded-xl object-cover"
        />
        {person.online && (
          <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-400 rounded-full border-2 border-white" />
        )}
      </div>
      <p className="text-sm font-semibold text-gray-900">{person.name}</p>
      <p className="text-xs text-gray-500 mt-1 mb-3">{person.role}</p>
      <button className="w-full h-8 rounded-lg bg-[#EEF2F7] text-xs font-semibold text-[#0F2A5C] mt-auto hover:bg-[#0F2A5C] hover:text-white transition-colors font-['Mada']">
        Message
      </button>
    </div>
  );
}

export default function MyGronetters() {
  const [activeTab, setActiveTab] = useState("All Gronetters");
  const [invitations, setInvitations] = useState(GRONETTERS_INVITATIONS);

  const handleAccept = (id) =>
    setInvitations((prev) => prev.filter((p) => p.id !== id));
  const handleReject = (id) =>
    setInvitations((prev) => prev.filter((p) => p.id !== id));

  return (
    <PageLayout>
      <div className="w-full min-h-screen bg-[#F5F7FA] p-8 font-['Mada']">
        {/* Header */}
        <div className="flex items-start justify-between flex-wrap gap-4 mb-6">
          <div>
            <h1
              className="text-[28px] font-semibold leading-tight"
              style={{ color: '#000000', fontFamily: 'Mada, sans-serif', fontWeight: 600 }}
            >
              My Gronetters
            </h1>
            <p className="text-sm text-gray-500 mt-2">
              Manage your professional connections and pending invitations.
            </p>
          </div>

          {/* Tabs */}
          <div className="flex items-center gap-2 bg-[#F3E8E6] rounded-xl p-1.5 flex-wrap">
            {GRONETTERS_TABS.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all whitespace-nowrap ${
                  activeTab === tab
                    ? "bg-white text-[#0F2A5C] shadow-sm"
                    : "text-gray-500 hover:text-[#0F2A5C]"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <div className="flex gap-6 items-start flex-wrap lg:flex-nowrap">
          {/* Left Panel */}
          <div className="w-full lg:w-[380px] flex-shrink-0 flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <p className="text-xs font-bold text-gray-900 uppercase tracking-widest">
                Pending Invitations
              </p>
              <span className="text-[11px] font-bold text-white bg-[#0F2A5C] rounded-full px-2 py-0.5">
                {invitations.length}
              </span>
            </div>
            {invitations.length === 0 ? (
              <div className="bg-white rounded-xl border border-gray-100 p-8 text-center">
                <p className="text-sm text-gray-400">No pending invitations</p>
              </div>
            ) : (
              invitations.map((person) => (
                <InvitationCard
                  key={person.id}
                  person={person}
                  onAccept={handleAccept}
                  onReject={handleReject}
                />
              ))
            )}
          </div>

          {/* Right Panel */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-4">
              <p className="text-xs font-bold text-gray-900 uppercase tracking-widest">
                All Gronetters
              </p>
              <span className="text-[11px] font-bold text-white bg-[#0F2A5C] rounded-full px-2 py-0.5">
                {GRONETTERS_LIST.length}
              </span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {GRONETTERS_LIST.map((person) => (
                <GronettterCard key={person.id} person={person} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
