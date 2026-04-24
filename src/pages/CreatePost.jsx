import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { COMMUNITIES, INDUSTRIES, POST_TAGS, DISCUSSION_TAGS } from "../data/keywords";
import { createPost } from "../services/api";

function Toggle({ checked, onChange }) {
  return (
    <button onClick={() => onChange(!checked)}
      className={`relative w-11 h-6 rounded-full border-none cursor-pointer flex-shrink-0 transition-colors duration-200 ${checked ? "bg-[#0f172a]" : "bg-slate-200"}`}>
      <span className={`absolute top-[3px] w-[18px] h-[18px] rounded-full bg-white shadow transition-all duration-200 ${checked ? "left-[23px]" : "left-[3px]"}`} />
    </button>
  );
}

function TBtn({ title, active, onMouseDown, children }) {
  return (
    <button title={title} onMouseDown={onMouseDown}
      className={`w-8 h-8 flex items-center justify-center rounded-md border-none cursor-pointer transition-all ${active ? "bg-[#0f172a] text-white" : "bg-transparent text-gray-500 hover:bg-gray-100"}`}>
      {children}
    </button>
  );
}

export default function CreatePost() {
  const navigate = useNavigate();
  const [tab, setTab] = useState("Post");
  const [community, setCommunity] = useState(COMMUNITIES[0]);
  const [industry, setIndustry] = useState("");
  const [title, setTitle] = useState("");
  const [coverPreview, setCoverPreview] = useState(null);
  const [isPublic, setIsPublic] = useState(true);
  const [activeTags, setActiveTags] = useState([]);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const fileRef = useRef();
  const editorRef = useRef();
  const savedRange = useRef(null);
  const [fmt, setFmt] = useState({ bold: false, italic: false });

  const isDiscussion = tab === "Discussion";
  const SUGGESTED_TAGS = isDiscussion ? DISCUSSION_TAGS : POST_TAGS;

  // Reset form when switching tabs
  const handleTabSwitch = (newTab) => {
    setTab(newTab);
    setTitle("");
    setActiveTags([]);
    if (editorRef.current) editorRef.current.innerHTML = "";
  };

  const saveSelection = () => {
    const sel = window.getSelection();
    if (sel && sel.rangeCount > 0) savedRange.current = sel.getRangeAt(0).cloneRange();
  };
  const restoreSelection = () => {
    const sel = window.getSelection();
    if (savedRange.current) { sel.removeAllRanges(); sel.addRange(savedRange.current); }
  };
  const wrap = (tag) => {
    editorRef.current.focus(); restoreSelection();
    const sel = window.getSelection();
    if (!sel || sel.rangeCount === 0 || sel.isCollapsed) return;
    const range = sel.getRangeAt(0);
    const parent = range.commonAncestorContainer.parentElement;
    if (parent && parent.tagName === tag.toUpperCase() && editorRef.current.contains(parent)) {
      const frag = document.createDocumentFragment();
      while (parent.firstChild) frag.appendChild(parent.firstChild);
      parent.replaceWith(frag);
    } else {
      const el = document.createElement(tag);
      try { range.surroundContents(el); } catch { el.appendChild(range.extractContents()); range.insertNode(el); }
    }
    updateFmt();
  };
  const handleLink = () => {
    saveSelection();
    const url = window.prompt("Enter URL:");
    if (!url) return;
    editorRef.current.focus(); restoreSelection();
    const sel = window.getSelection();
    if (!sel || sel.rangeCount === 0 || sel.isCollapsed) return;
    const range = sel.getRangeAt(0);
    const a = document.createElement("a");
    a.href = url; a.target = "_blank"; a.style.color = "#2563eb"; a.style.textDecoration = "underline";
    try { range.surroundContents(a); } catch { a.appendChild(range.extractContents()); range.insertNode(a); }
  };
  const updateFmt = () => {
    const sel = window.getSelection();
    if (!sel || sel.rangeCount === 0) return;
    let node = sel.getRangeAt(0).startContainer;
    if (node.nodeType === 3) node = node.parentElement;
    setFmt({ bold: !!node.closest?.("b,strong"), italic: !!node.closest?.("i,em") });
  };
  const toggleTag = (tag) =>
    setActiveTags((prev) => prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]);

  const handleSubmit = async () => {
    if (!title.trim()) { alert("Please enter a title."); return; }
    if (!industry) { alert("Please select an industry."); return; }
    const content = editorRef.current?.innerHTML || "";
    const payload = {
      title: title.trim(), content, community, industry,
      images: [], groupId: "f30e50c1-1061-4ddf-bb2b-19ef98a8cd3e",
      isPublic, tags: activeTags.map((t) => t.replace("#", "")),
    };
    setLoading(true);
    try {
      await createPost(payload);
      setSubmitted(true);
      setTimeout(() => navigate("/home"), 1500);
    } catch (err) {
      alert(`Failed: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="fixed inset-0 bg-black/20 flex items-center justify-center z-[1000] font-['Inter',sans-serif]">
        <div className="bg-white rounded-2xl shadow-2xl p-10 flex flex-col items-center gap-4">
          <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12"/>
            </svg>
          </div>
          <p className="text-lg font-semibold text-gray-900">{isDiscussion ? "Discussion Created!" : "Post Published!"}</p>
          <p className="text-sm text-gray-500">Redirecting to home...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black/20 flex items-center justify-center z-[1000] p-5 font-['Inter',sans-serif]">
      <div className="w-full max-w-[900px] bg-white rounded-2xl shadow-2xl p-7 overflow-y-auto max-h-[95vh] scrollbar-hide">

        {/* Header */}
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center gap-3">
            <button onClick={() => navigate(-1)} className="p-1 bg-transparent border-none cursor-pointer hover:bg-gray-100 rounded-lg transition-colors">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#111827" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
            </button>
            <span className="text-lg font-semibold text-gray-900">
              {isDiscussion ? "Create Discussion" : "Create Post"}
            </span>
          </div>

          {/* Tab Switcher */}
          <div className="inline-flex bg-slate-100 rounded-xl p-1 gap-1">
            {["Post", "Discussion"].map((t) => (
              <button key={t} onClick={() => handleTabSwitch(t)}
                className={`px-5 py-1.5 rounded-lg border-none cursor-pointer text-sm font-medium transition-all ${tab === t ? "bg-white text-gray-900 shadow-sm" : "bg-transparent text-gray-500 hover:text-gray-700"}`}>
                {t}
              </button>
            ))}
          </div>
        </div>

        {/* Body */}
        <div className="flex gap-5">
          <div className="flex-1 flex flex-col gap-4">

            {/* Community + Industry */}
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-[11px] font-semibold text-gray-400 tracking-wider uppercase mb-1.5">Community</label>
                <select value={community} onChange={(e) => setCommunity(e.target.value)}
                  className="w-full h-10 px-3 rounded-lg bg-slate-100 border-none text-[13px] text-gray-900 cursor-pointer focus:outline-none focus:ring-2 focus:ring-slate-300">
                  {COMMUNITIES.map((c) => <option key={c}>{c}</option>)}
                </select>
              </div>
              <div>
                <label className="block text-[11px] font-semibold text-gray-400 tracking-wider uppercase mb-1.5">Industry *</label>
                <select value={industry} onChange={(e) => setIndustry(e.target.value)}
                  className={`w-full h-10 px-3 rounded-lg bg-slate-100 border-none text-[13px] cursor-pointer focus:outline-none focus:ring-2 focus:ring-slate-300 ${industry ? "text-gray-900" : "text-gray-400"}`}>
                  <option value="">Select industry</option>
                  {INDUSTRIES.map((i) => <option key={i}>{i}</option>)}
                </select>
              </div>
            </div>

            {/* Title */}
            <div>
              <label className="block text-[11px] font-semibold text-gray-400 tracking-wider uppercase mb-1.5">
                {isDiscussion ? "Discussion Title *" : "Title *"}
              </label>
              <input type="text" value={title} onChange={(e) => setTitle(e.target.value)}
                placeholder={isDiscussion ? "Enter discussion title..." : "What's on your mind?"}
                className="w-full h-[42px] px-3 rounded-lg bg-slate-100 border-none text-[13px] text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-slate-300" />
            </div>

            {/* Cover Image */}
            <div>
              <label className="block text-[11px] font-semibold text-gray-400 tracking-wider uppercase mb-1.5">Cover Image (16:9)</label>
              <div onClick={() => fileRef.current.click()}
                className="relative h-[160px] rounded-xl border-2 border-dashed border-gray-200 flex flex-col items-center justify-center cursor-pointer overflow-hidden hover:border-blue-300 transition-colors"
                style={{ background: coverPreview ? "none" : "linear-gradient(135deg, #eff6ff 0%, #dbeafe 50%, #e0f2fe 100%)" }}>
                {coverPreview ? (
                  <img src={coverPreview} alt="cover" className="absolute inset-0 w-full h-full object-cover" />
                ) : (
                  <>
                    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#93c5fd" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="mb-2">
                      <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/>
                      <circle cx="12" cy="13" r="4"/>
                    </svg>
                    <p className="text-[13px] font-medium text-gray-500">Click to upload cover photo</p>
                    <p className="text-[11px] text-gray-400 mt-1">High-resolution PNG or JPG preferred</p>
                  </>
                )}
                <input ref={fileRef} type="file" accept="image/*" className="hidden"
                  onChange={(e) => { const f = e.target.files[0]; if (f) setCoverPreview(URL.createObjectURL(f)); }} />
              </div>
            </div>

            {/* Content Editor */}
            <div>
              <label className="block text-[11px] font-semibold text-gray-400 tracking-wider uppercase mb-1.5">Content</label>
              <div className="border border-gray-200 rounded-lg overflow-hidden">
                <div className="flex items-center gap-0.5 px-2 py-1 bg-gray-50 border-b border-gray-200 h-10">
                  <TBtn title="Bold" active={fmt.bold} onMouseDown={(e) => { e.preventDefault(); wrap("strong"); }}>
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 4h8a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z"/><path d="M6 12h9a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z"/></svg>
                  </TBtn>
                  <TBtn title="Italic" active={fmt.italic} onMouseDown={(e) => { e.preventDefault(); wrap("em"); }}>
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="4" x2="10" y2="4"/><line x1="14" y1="20" x2="5" y2="20"/><line x1="15" y1="4" x2="9" y2="20"/></svg>
                  </TBtn>
                  <TBtn title="Link" active={false} onMouseDown={(e) => { e.preventDefault(); handleLink(); }}>
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>
                  </TBtn>
                  <TBtn title="Bullet List" active={false} onMouseDown={(e) => { e.preventDefault(); document.execCommand("insertUnorderedList"); }}>
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/></svg>
                  </TBtn>
                  <TBtn title="Numbered List" active={false} onMouseDown={(e) => { e.preventDefault(); document.execCommand("insertOrderedList"); }}>
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="10" y1="6" x2="21" y2="6"/><line x1="10" y1="12" x2="21" y2="12"/><line x1="10" y1="18" x2="21" y2="18"/><path d="M4 6h1v4"/><path d="M4 10h2"/><path d="M6 18H4c0-1 2-2 2-3s-1-1.5-2-1"/></svg>
                  </TBtn>
                </div>
                <div ref={editorRef} contentEditable suppressContentEditableWarning
                  onKeyUp={() => { saveSelection(); updateFmt(); }}
                  onMouseUp={() => { saveSelection(); updateFmt(); }}
                  data-placeholder={isDiscussion ? "Share your thoughts to start a discussion..." : "Write your post content here..."}
                  className="min-h-[90px] px-3 py-2.5 text-[13px] text-gray-700 leading-relaxed focus:outline-none bg-white empty:before:content-[attr(data-placeholder)] empty:before:text-gray-300"
                />
              </div>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="w-[220px] flex-shrink-0">
            <div className="bg-slate-50 rounded-xl p-4">
              <p className="text-xs font-semibold text-gray-500 mb-3">Publishing Settings</p>
              <div className="flex items-center justify-between gap-2">
                <div>
                  <p className="text-[13px] font-medium text-gray-900">Public Visibility</p>
                  <p className="text-[11px] text-gray-400 mt-0.5">Visible to everyone on Gronet</p>
                </div>
                <Toggle checked={isPublic} onChange={setIsPublic} />
              </div>
              <p className="text-[11px] font-semibold text-gray-400 tracking-wider uppercase mt-5 mb-2.5">Suggested Tags</p>
              <div className="flex flex-col gap-2">
                {SUGGESTED_TAGS.map((tag) => (
                  <button key={tag} onClick={() => toggleTag(tag)}
                    className={`px-3 py-1.5 rounded-full border-none cursor-pointer text-xs font-medium text-left transition-all ${activeTags.includes(tag) ? "bg-[#0f172a] text-white" : "bg-slate-200 text-slate-800 hover:bg-slate-300"}`}>
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between mt-6 pt-4 border-t border-slate-100">
          <button onClick={() => navigate(-1)} className="text-sm text-gray-500 bg-transparent border-none cursor-pointer hover:text-gray-700 transition-colors">Cancel</button>
          <button className="text-sm text-gray-900 bg-transparent border-none cursor-pointer hover:text-gray-600 transition-colors">Save as Draft</button>
          <button onClick={handleSubmit} disabled={loading}
            className={`px-5 py-2.5 rounded-xl text-white text-sm font-semibold border-none cursor-pointer active:scale-95 transition-all ${loading ? "bg-slate-400 cursor-not-allowed" : "bg-[#0f172a] hover:bg-slate-800"}`}>
            {loading ? "Posting..." : isDiscussion ? "Create Discussion" : "Post"}
          </button>
        </div>
      </div>
    </div>
  );
}
