import { useState } from "react";
import PageLayout from "../components/layout/PageLayout";
import ContentWrapper from "../components/layout/ContentWrapper";
import {
  ProfileSettingsIcon, AccountIcon, NotificationsIcon, PrivacyIcon,
  ChangeCoverIcon, EditAvatarIcon, AddSkillIcon
} from "../components/Icons";

// ── Sidebar ──────────────────────────────────────────────────────
const NAV_ITEMS = [
  { label: "Profile Settings", icon: <ProfileSettingsIcon className="w-4 h-4" /> },
  { label: "Account",          icon: <AccountIcon className="w-4 h-4" /> },
  { label: "Notifications",    icon: <NotificationsIcon className="w-4 h-4" /> },
  { label: "Privacy",          icon: <PrivacyIcon className="w-4 h-4" /> },
];

function Sidebar({ active, onChange }) {
  return null;
}

// ── Input Field ──────────────────────────────────────────────────
function InputField({ label, value, onChange, placeholder }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">
        {label}
      </label>
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-gray-800 font-['Mada'] placeholder-gray-300 focus:outline-none focus:border-[#191970] focus:ring-2 focus:ring-[#191970]/10 transition"
      />
    </div>
  );
}

// ── Textarea ─────────────────────────────────────────────────────
function TextAreaField({ label, value, onChange, maxLength = 500 }) {
  return (
    <div className="flex flex-col gap-1.5">
      <div className="flex justify-between items-center">
        <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">
          {label}
        </label>
        <span
          className={`text-xs font-semibold ${value.length > maxLength * 0.9 ? "text-red-400" : "text-gray-400"}`}
        >
          {value.length} / {maxLength}
        </span>
      </div>
      <textarea
        value={value}
        onChange={onChange}
        maxLength={maxLength}
        rows={5}
        placeholder="Write a short bio..."
        className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-gray-800 font-['Mada'] placeholder-gray-300 focus:outline-none focus:border-[#191970] focus:ring-2 focus:ring-[#191970]/10 transition resize-none"
      />
    </div>
  );
}

// ── Skill Tag ────────────────────────────────────────────────────
function SkillTag({ label, onRemove }) {
  return (
    <span className="inline-flex items-center gap-1.5 bg-[#191970]/8 text-[#191970] text-xs font-bold px-3 py-1.5 rounded-full border border-[#191970]/15">
      {label}
      <button
        onClick={onRemove}
        className="w-4 h-4 flex items-center justify-center rounded-full hover:bg-red-100 hover:text-red-500 transition-colors text-[#191970]/50 text-sm leading-none"
      >
        ×
      </button>
    </span>
  );
}

// ── Skills Section ───────────────────────────────────────────────
function SkillsSection({ skills, onRemove, onAdd }) {
  const [input, setInput] = useState("");

  const handleAdd = () => {
    const trimmed = input.trim();
    if (trimmed && !skills.includes(trimmed)) {
      onAdd(trimmed);
      setInput("");
    }
  };

  return (
    <div className="flex flex-col gap-3">
      <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">
        Skills
      </label>
      <div className="flex flex-wrap gap-2 min-h-[36px]">
        {skills.map((s) => (
          <SkillTag key={s} label={s} onRemove={() => onRemove(s)} />
        ))}
      </div>
      <div className="flex gap-2 mt-1">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleAdd()}
          placeholder="Type a skill and press Enter..."
          className="flex-1 px-4 py-2.5 rounded-xl border border-gray-200 text-sm font-['Mada'] text-gray-800 placeholder-gray-300 focus:outline-none focus:border-[#191970] focus:ring-2 focus:ring-[#191970]/10 transition"
        />
        <button
          onClick={handleAdd}
          className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl border border-[#191970]/20 bg-[#191970]/5 text-[#191970] text-sm font-bold hover:bg-[#191970] hover:text-white hover:border-[#191970] transition-all"
        >
          <AddSkillIcon className="w-3.5 h-3.5" />
          Add Expertise
        </button>
      </div>
    </div>
  );
}

// ── Action Buttons ───────────────────────────────────────────────
function ActionButtons({ onCancel, onSave }) {
  return (
    <div className="flex items-center justify-end gap-3">
      <button
        onClick={onCancel}
        className="px-6 py-2.5 rounded-xl border border-gray-200 text-sm font-bold text-gray-500 hover:bg-gray-50 hover:border-gray-300 transition-all"
      >
        Cancel
      </button>
      <button
        onClick={onSave}
        className="px-6 py-2.5 rounded-xl bg-[#191970] text-white text-sm font-bold shadow-md shadow-[#191970]/20 hover:bg-[#1e2d8a] active:scale-[0.98] transition-all"
      >
        Save Changes
      </button>
    </div>
  );
}

// ── Section Card ─────────────────────────────────────────────────
function Card({ title, description, children }) {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
      {(title || description) && (
        <div className="px-6 pt-6 pb-4 border-b border-gray-50">
          {title && (
            <h2
              style={{
                color: "#000000",
                fontWeight: 400,
                fontFamily: "Mada, sans-serif",
              }}
              className="text-base"
            >
              {title}
            </h2>
          )}
          {description && (
            <p className="text-sm text-gray-400 mt-0.5">{description}</p>
          )}
        </div>
      )}
      <div className="p-6">{children}</div>
    </div>
  );
}

// ── Page ─────────────────────────────────────────────────────────
export default function Settings() {
  const [activeNav, setActiveNav] = useState("Profile Settings");
  const [form, setForm] = useState({
    name: "Felix Anderson",
    designation: "Senior Data Architect",
    bio: "Passionate about building scalable data systems and architectural solutions. Focused on delivering high-performance infrastructure for modern applications.",
  });
  const [skills, setSkills] = useState([
    "Data Architecture",
    "Cloud Infrastructure",
    "System Design",
  ]);
  const [cover, setCover] = useState(null);
  const [avatar, setAvatar] = useState(
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop",
  );

  const handleFile = (setter) => (e) => {
    const file = e.target.files[0];
    if (file) setter(URL.createObjectURL(file));
  };

  return (
    <PageLayout>
      <ContentWrapper>
        <div className="w-full bg-[#f5f7fb] font-['Mada']">
          {/* ── Top headings row ── */}
          <div className="flex flex-col lg:flex-row gap-6 mb-5 items-baseline">
            <div className="w-full lg:w-52 flex-shrink-0">
              <h1
                className="text-xl font-normal tracking-tight"
                style={{ color: "#000000", fontFamily: "Mada, sans-serif" }}
              >
                Settings
              </h1>
            </div>
            <div className="flex-1">
              <h1
                className="text-xl font-normal tracking-tight"
                style={{ color: "#000000", fontFamily: "Mada, sans-serif" }}
              >
                Profile Settings
              </h1>
            </div>
          </div>

          {/* ── Main layout ── */}
          <div className="flex flex-col lg:flex-row gap-5 items-start">
            {/* Left sidebar */}
            <aside className="w-full lg:w-52 flex-shrink-0">
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                {NAV_ITEMS.map(({ label, icon }) => (
                  <button
                    key={label}
                    onClick={() => setActiveNav(label)}
                    className={`w-full flex items-center gap-3 px-5 py-3.5 text-sm font-bold transition-all border-b border-gray-50 last:border-0
                      ${
                        activeNav === label
                          ? "text-[#191970] border-l-4 border-l-[#191970] bg-blue-50/60"
                          : "text-gray-400 hover:bg-gray-50 hover:text-[#191970] border-l-4 border-l-transparent"
                      }`}
                  >
                    {icon}
                    {label}
                  </button>
                ))}
              </div>
            </aside>

            {/* Right content */}
            <div className="flex-1 min-w-0 flex flex-col gap-6">
              {/* Section 1: Profile Photo & Cover */}
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="px-6 pt-6 pb-4 border-b border-gray-50">
                  <h2
                    style={{
                      color: "#000000",
                      fontWeight: 400,
                      fontFamily: "Mada, sans-serif",
                    }}
                    className="text-base"
                  >
                    Profile Photo &amp; Cover
                  </h2>
                  <p className="text-sm text-gray-400 mt-0.5">
                    Update your public profile visuals.
                  </p>
                </div>
                <div className="px-6 py-5">
                  {/* Two-column: Cover left, Profile Photo right */}
                  <div className="flex flex-col sm:flex-row gap-6">
                    {/* Cover banner */}
                    <div className="flex-1 flex flex-col">
                      <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">
                        Cover Photo
                      </p>
                      <div
                        className="relative w-full h-36 rounded-2xl overflow-hidden shadow-sm"
                        style={{
                          background:
                            "linear-gradient(135deg, #0f172a 0%, #1e3a5f 50%, #7f1d1d 100%)",
                        }}
                      >
                        {cover && (
                          <img
                            src={cover}
                            alt="cover"
                            className="absolute inset-0 w-full h-full object-cover"
                          />
                        )}
                        <label className="absolute inset-0 flex items-center justify-center cursor-pointer">
                          <span className="flex items-center gap-2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white text-xs font-bold px-4 py-2 rounded-full border border-white/30 transition-colors">
                            <ChangeCoverIcon className="w-3.5 h-3.5" />
                            Change Cover
                          </span>
                          <input
                            type="file"
                            accept="image/*"
                            className="hidden"
                            onChange={handleFile(setCover)}
                          />
                        </label>
                      </div>
                      <p className="text-[11px] text-gray-400 mt-1.5">
                        Recommended: 1500 × 500 px
                      </p>
                    </div>

                    {/* Profile Photo */}
                    <div className="flex flex-col items-center gap-3 sm:w-40">
                      <p className="text-xs font-bold text-gray-400 uppercase tracking-wider self-start">
                        Profile Photo
                      </p>
                      <div className="relative w-24 h-24">
                        <div className="w-24 h-24 rounded-full border-4 border-white shadow-lg overflow-hidden bg-gray-100">
                          <img
                            src={avatar}
                            alt="avatar"
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <label className="absolute bottom-0 right-0 w-8 h-8 bg-[#191970] hover:bg-[#1e2d8a] hover:scale-110 rounded-full flex items-center justify-center cursor-pointer shadow-lg transition-all duration-200">
                          <EditAvatarIcon className="w-4 h-4" />
                          <input type="file" accept="image/*" className="hidden" onChange={handleFile(setAvatar)} />
                        </label>
                      </div>
                      <p className="text-[11px] text-gray-400 text-center">
                        JPG, PNG · Max 2MB
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Section 2: Basic Information */}
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="px-6 pt-6 pb-4 border-b border-gray-50">
                  <h2
                    style={{
                      color: "#000000",
                      fontWeight: 400,
                      fontFamily: "Mada, sans-serif",
                    }}
                    className="text-base"
                  >
                    Basic Information
                  </h2>
                  <p className="text-sm text-gray-400 mt-0.5">
                    Your name and role shown on your profile.
                  </p>
                </div>
                <div className="px-6 py-5 flex flex-col gap-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <InputField
                      label="Display Name"
                      value={form.name}
                      onChange={(e) =>
                        setForm({ ...form, name: e.target.value })
                      }
                      placeholder="Your full name"
                    />
                    <InputField
                      label="Designation"
                      value={form.designation}
                      onChange={(e) =>
                        setForm({ ...form, designation: e.target.value })
                      }
                      placeholder="e.g. Senior Engineer"
                    />
                  </div>
                  <TextAreaField
                    label="Bio"
                    value={form.bio}
                    onChange={(e) => setForm({ ...form, bio: e.target.value })}
                  />
                </div>
              </div>

              {/* Section 3: Skills */}
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="px-6 pt-6 pb-4 border-b border-gray-50">
                  <h2
                    style={{
                      color: "#000000",
                      fontWeight: 400,
                      fontFamily: "Mada, sans-serif",
                    }}
                    className="text-base"
                  >
                    Skills
                  </h2>
                  <p className="text-sm text-gray-400 mt-0.5">
                    Add skills that represent your professional strengths.
                  </p>
                </div>
                <div className="px-6 py-5">
                  <SkillsSection
                    skills={skills}
                    onRemove={(s) => setSkills(skills.filter((x) => x !== s))}
                    onAdd={(s) => setSkills([...skills, s])}
                  />
                </div>
              </div>

              {/* Actions */}
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 px-6 py-4">
                <ActionButtons
                  onCancel={() => {}}
                  onSave={() => alert("Changes saved!")}
                />
              </div>
            </div>
          </div>
        </div>
      </ContentWrapper>
    </PageLayout>
  );
}
