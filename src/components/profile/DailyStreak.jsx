// components/profile/DailyStreak.jsx
export default function DailyStreak() {
  const days = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

  return (
    <div className="bg-white rounded-xl shadow p-4">
      <h3 className="font-semibold mb-2">🔥 Daily Streak</h3>

      <div className="flex gap-2 mt-3">
        {days.map((day, index) => (
          <div
            key={index}
            className={`w-8 h-8 flex items-center justify-center rounded ${
              index < 3 ? "bg-orange-500 text-white" : "bg-gray-200"
            }`}
          >
            {day}
          </div>
        ))}
      </div>

      <p className="mt-2 text-sm text-gray-500">10 Days</p>
    </div>
  );
}
