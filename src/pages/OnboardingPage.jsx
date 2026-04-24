import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { TOPICS } from "../data/keywords";

const CheckIcon = () => (
  <svg
    width="10"
    height="8"
    viewBox="0 0 12 10"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M1 5L4.5 8.5L11 1.5" />
  </svg>
);

export default function OnboardingPage() {
  const [selectedTopics, setSelectedTopics] = useState([]);
  const navigate = useNavigate();

  const toggleTopic = (topic) =>
    setSelectedTopics((prev) =>
      prev.includes(topic) ? prev.filter((t) => t !== topic) : [...prev, topic],
    );

  return (
    <div className="min-h-screen bg-[#f3f4f6] flex items-center justify-center p-8 font-['Inter',sans-serif]">
      <div className="relative w-full max-w-[980px]">
        {/* Main Card */}
        <div className="bg-white w-full rounded-2xl shadow-2xl p-10">
          {/* Header */}
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 bg-[#0f172a] rounded-md flex items-center justify-center flex-shrink-0">
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="3" y="3" width="7" height="7" />
                <rect x="14" y="3" width="7" height="7" />
                <rect x="14" y="14" width="7" height="7" />
                <rect x="3" y="14" width="7" height="7" />
              </svg>
            </div>
            <span className="text-[12px] font-semibold tracking-[1px] text-slate-600 uppercase">
              Onboarding
            </span>
          </div>

          {/* Title */}
          <h1
            className="text-[32px] font-semibold leading-tight mt-4 mb-0"
            style={{
              color: "#000000",
              fontFamily: "Inter, sans-serif",
              fontWeight: 400,
            }}
          >
            Select topics based on your interest
          </h1>
          <p className="text-sm text-gray-500 mt-1.5">
            Choose at least one to continue
          </p>

          {/* Sections */}
          <div className="mt-1">
            {TOPICS.map((section) => {
              const isEmerging = section.category === "Emerging Technologies";
              return (
                <div key={section.category} className="mt-7">
                  <div className="flex items-center mb-3">
                    <span
                      className={`inline-block w-10 h-px flex-shrink-0 ${isEmerging ? "bg-emerald-400" : "bg-gray-200"}`}
                    />
                    <span className="text-[11px] font-semibold text-gray-400 uppercase tracking-[1px] ml-2.5 whitespace-nowrap">
                      {section.category}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {section.items.map((topic) => {
                      const isSelected = selectedTopics.includes(topic);
                      return (
                        <button
                          key={topic}
                          type="button"
                          onClick={() => toggleTopic(topic)}
                          className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-[13px] font-medium border transition-all cursor-pointer ${
                            isSelected
                              ? "bg-[#191970] text-white border-transparent"
                              : "bg-slate-100 text-gray-900 border-gray-200 hover:bg-gray-200"
                          }`}
                        >
                          {isSelected && <CheckIcon />}
                          {topic}
                        </button>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom Actions */}
          <div className="flex items-center justify-end mt-8 gap-4">
            <button
              type="button"
              onClick={() => navigate("/home")}
              className="text-sm text-gray-500 bg-transparent border-none cursor-pointer hover:text-gray-700 transition-colors"
            >
              Skip
            </button>
            <button
              type="button"
              disabled={selectedTopics.length === 0}
              onClick={() => selectedTopics.length > 0 && navigate("/home")}
              className={`flex items-center gap-1.5 px-5 py-2.5 rounded-xl text-sm font-semibold border-none transition-all ${
                selectedTopics.length > 0
                  ? "bg-[#191970] text-white cursor-pointer hover:bg-[#1e2d8a]"
                  : "bg-gray-200 text-gray-400 cursor-not-allowed"
              }`}
            >
              Continue
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </button>
          </div>
        </div>

        {/* Sarah J. — inside card on mobile, fixed bottom-left on desktop */}
        <div className="lg:fixed lg:bottom-8 lg:left-8 lg:w-60 lg:shadow-xl lg:z-50
          mt-6 lg:mt-0 w-full bg-white rounded-xl shadow-sm p-3.5 font-['Inter',sans-serif] border border-gray-100 lg:border-0">
          <div className="flex items-center gap-2.5 mb-2">
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-blue-400 to-purple-400 flex-shrink-0" />
            <div>
              <p className="text-sm font-semibold text-gray-900 leading-tight">
                Sarah J.
              </p>
              <p className="text-[10px] text-gray-500 tracking-wide">
                DESIGN CURATOR
              </p>
            </div>
          </div>
          <p className="text-xs text-gray-500 leading-relaxed">
            Welcome! Selecting interests helps tailor your feed with the
            highest-quality professional insights.
          </p>
        </div>
      </div>
    </div>
  );
}
