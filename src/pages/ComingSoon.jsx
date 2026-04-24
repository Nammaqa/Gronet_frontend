import { useNavigate, useLocation } from "react-router-dom";
import PageLayout from "../components/layout/PageLayout";
import ContentWrapper from "../components/layout/ContentWrapper";

export default function ComingSoon() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const pageName = pathname.split("/").filter(Boolean).pop()?.replace(/-/g, " ") || "Page";

  return (
    <PageLayout>
      <ContentWrapper>
        <div className="flex flex-col items-center justify-center min-h-[60vh] font-['Mada']">
        <div className="w-16 h-16 bg-[#191970]/10 rounded-2xl flex items-center justify-center mb-6">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#191970" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10"/>
            <line x1="12" y1="8" x2="12" y2="12"/>
            <line x1="12" y1="16" x2="12.01" y2="16"/>
          </svg>
        </div>
        <h1 className="text-2xl font-semibold mb-2 capitalize" style={{ color: '#000000', fontFamily: 'Mada, sans-serif', fontWeight: 600 }}>
          {pageName}
        </h1>
        <p className="text-sm text-gray-600 mb-8 text-center max-w-xs">
          This section is coming soon. We're working hard to bring it to you.
        </p>
        <button
          onClick={() => navigate(-1)}
          className="px-6 py-2.5 rounded-xl bg-[#191970] text-white text-sm font-semibold hover:bg-[#1e2d8a] transition-colors"
        >
          Go Back
        </button>
        </div>
      </ContentWrapper>
    </PageLayout>
  );
}
