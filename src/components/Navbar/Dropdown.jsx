export default function Dropdown({ items, visible }) {
  return (
    <div
      className={`absolute top-full left-0 mt-2 w-52 bg-white rounded-xl shadow-lg border border-gray-100 py-1.5 z-50 transition-all duration-200 origin-top
        ${visible ? "opacity-100 scale-y-100 pointer-events-auto" : "opacity-0 scale-y-95 pointer-events-none"}`}
    >
      {items.map((item) => (
        <a
          key={item}
          href="#"
          className="block px-4 py-2.5 text-sm text-gray-600 font-medium hover:bg-blue-50 hover:text-[#191970] transition-colors"
        >
          {item}
        </a>
      ))}
    </div>
  );
}
