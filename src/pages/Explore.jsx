import PageLayout from "../components/layout/PageLayout";
import { EXPLORE_CARDS } from "../data/keywords";

function SearchBar() {
  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="relative">
        <svg className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
        </svg>
        <input
          type="text"
          placeholder="Search insights, people, or professional circles..."
          className="w-full pl-11 pr-5 py-3.5 rounded-2xl bg-white border border-gray-200 text-sm text-gray-700 font-['Mada'] placeholder-gray-400 shadow-sm focus:outline-none focus:border-[#191970] focus:ring-2 focus:ring-[#191970]/10 transition"
        />
      </div>
    </div>
  );
}

function LargeCard({ card }) {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow flex flex-col h-full">
      <div className="relative h-52 overflow-hidden">
        <img src={card.image} alt={card.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        <span className={`absolute top-3 left-3 text-[10px] font-black tracking-widest px-3 py-1 rounded-full uppercase ${card.tagColor}`}>{card.tag}</span>
      </div>
      <div className="p-5 flex flex-col flex-1">
        <h3 className="text-base font-bold text-gray-900 leading-snug mb-2">{card.title}</h3>
        <p className="text-sm text-gray-500 leading-relaxed flex-1">{card.description}</p>
        <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-50">
          <div className="flex items-center gap-2">
            <img src={card.author.avatar} alt={card.author.name} className="w-7 h-7 rounded-full object-cover" />
            <span className="text-xs font-semibold text-gray-600">{card.author.name}</span>
          </div>
          <div className="flex items-center gap-1 text-xs text-gray-400 font-semibold">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
            </svg>
            {card.engagement}
          </div>
        </div>
      </div>
    </div>
  );
}

function MediumCard({ card }) {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow flex flex-col h-full">
      {card.image && (
        <div className="h-36 overflow-hidden">
          <img src={card.image} alt={card.title} className="w-full h-full object-cover" />
        </div>
      )}
      <div className="p-5 flex flex-col flex-1">
        <span className={`text-[10px] font-black tracking-widest px-3 py-1 rounded-full uppercase self-start mb-3 ${card.tagColor}`}>{card.tag}</span>
        <h3 className="text-base font-bold text-gray-900 leading-snug mb-2">{card.title}</h3>
        <p className="text-sm text-gray-500 leading-relaxed flex-1">{card.description}</p>
        <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-50">
          <div className="flex items-center gap-2">
            <img src={card.author.avatar} alt={card.author.name} className="w-7 h-7 rounded-full object-cover" />
            <span className="text-xs font-semibold text-gray-600">{card.author.name}</span>
          </div>
          <div className="flex items-center gap-1 text-xs text-gray-400 font-semibold">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
            </svg>
            {card.engagement}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Explore() {
  return (
    <PageLayout>
      <div className="w-full px-6 lg:px-10 py-8 font-['Mada']">
        <div className="mb-8"><SearchBar /></div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <LargeCard card={EXPLORE_CARDS[0]} />
          <MediumCard card={EXPLORE_CARDS[1]} />
          <MediumCard card={EXPLORE_CARDS[2]} />
        </div>
      </div>
    </PageLayout>
  );
}
