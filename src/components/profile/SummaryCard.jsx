// components/profile/SummaryCard.jsx
export default function SummaryCard(props) {
  return (
    <div
      className="p-4 rounded-xl text-white"
      style={{ background: props.color }}
    >
      <h2 className="text-2xl font-bold">{props.value}</h2>
      <p className="text-sm">{props.title}</p>
    </div>
  );
}
