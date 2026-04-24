// ContentWrapper — centered max-width container for all pages
// Single column: <ContentWrapper>{children}</ContentWrapper>
// 3-column:      <ContentWrapper sidebar={...} right={...}>{children}</ContentWrapper>

export default function ContentWrapper({ children, sidebar, right, className = "" }) {

  if (sidebar || right) {
    return (
      <div
        className="w-full"
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          padding: "24px",
          boxSizing: "border-box",
          flex: 1,
        }}
      >
        <div className="flex items-start" style={{ gap: "24px" }}>
          {sidebar && (
            <aside className="hidden lg:block flex-shrink-0" style={{ width: "260px" }}>
              {sidebar}
            </aside>
          )}
          <main
            className={`flex-1 min-w-0 flex flex-col ${className}`}
            style={{ gap: "20px" }}
          >
            {children}
          </main>
          {right && (
            <aside className="hidden xl:block flex-shrink-0" style={{ width: "280px" }}>
              {right}
            </aside>
          )}
        </div>
      </div>
    );
  }

  return (
    <div
      className={`w-full ${className}`}
      style={{
        maxWidth: "1400px",
        margin: "0 auto",
        padding: "24px",
        boxSizing: "border-box",
      }}
    >
      {children}
    </div>
  );
}
