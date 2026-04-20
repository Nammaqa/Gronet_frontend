// components/profile/ProfileInfoCard.jsx
export default function ProfileInfoCard() {
  return (
    <div className="bg-white rounded-xl shadow p-4 flex gap-4 items-center">
      <img
        src="https://i.pravatar.cc/100"
        alt="profile"
        className="w-20 h-20 rounded-full border-4 border-gray-200"
      />

      <div className="grid grid-cols-2 gap-2 text-sm">
        <p>
          <strong>Name:</strong> Aleena Jose
        </p>
        <p>
          <strong>Phone:</strong> 9078546210
        </p>
        <p className="col-span-2">
          <strong>Email:</strong> aleena.jose@gmail.com
        </p>
      </div>
    </div>
  );
}
