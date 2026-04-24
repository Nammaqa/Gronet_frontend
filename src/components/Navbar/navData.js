export const NAV_ITEMS = [
  {
    label: "Community",
    to: "/community",
    dropdown: [
      { label: "Parichaya", to: "/community/parichaya" },
      { label: "Gronet", to: "/home" },
      { label: "nConnect", to: "/community/nconnect" },
      { label: "Success Stories", to: "/community/success-stories" },
      { label: "Testimonials", to: "/community/testimonials" },
    ],
  },
  { label: "nAcademy", to: "/nacademy", dropdown: null },
  { label: "Articles", to: "/articles", dropdown: null },
  {
    label: "Abyasa",
    to: "/abyasa",
    dropdown: [
      { label: "Programming Compiler", to: "/abyasa/compiler" },
      { label: "Testcase Management", to: "/abyasa/testcase" },
      { label: "Quiz Management", to: "/abyasa/quiz" },
      { label: "Website, API, SQL", to: "/abyasa/web-api-sql" },
      { label: "Quiz of the Day", to: "/abyasa/quiz-of-the-day" },
    ],
  },
  {
    label: "nCareer",
    to: "/ncareer",
    dropdown: [
      { label: "Jobs", to: "/ncareer/jobs" },
      { label: "Interview Questions", to: "/ncareer/interview" },
      { label: "BoWizzy", to: "/ncareer/bowizzy" },
      { label: "nStore", to: "/ncareer/nstore" },
    ],
  },
  { label: "Hire From Us", to: "/hire", dropdown: null },
  { label: "Reach Out to Us", to: "/reach-out", dropdown: null },
];
