"use client";

export default function SuggestedFriendsNavbar() {
  const suggestedFriends = [
    { name: "Kanye", description: "very humble", color: "text-blue-500" },
    { name: "Adam", description: "not humble", color: "text-red-500" },
    { name: "Jordan", description: "not humble", color: "text-purple-500" },
    { name: "Kamil", description: "THE HUMBLEST", color: "text-green-500" },
    { name: "Jonathan", description: "not humble", color: "text-orange-500" },
    { name: "Melchior", description: "humbly trending", color: "text-pink-500" },
    { name: "Kordian", description: "#2 humblest", color: "text-amber-500" },
    { name: "Tomasz", description: "not humble", color: "text-blue-800" },
    { name: "Dobiasz", description: "NOT humble", color: "text-lime-500" },
    { name: "Ela", description: "very humble", color: "text-purple-300" },
  ];

  return (
    <div className="flex flex-col bg-slate-200 dark:bg-[#090d15] p-4 mr-8 rounded-md">
      <h2 className="text-black text-2xl font-semibold dark:text-white">Suggested Friends</h2>
      <hr className="my-2 border-orange-500" />
      {suggestedFriends.map((friend, index) => (
        <div key={index} className="mb-2">
          <p className={`text-black dark:text-white font-semibold`}>{friend.name}</p>
          <p className="text-gray-800 dark:text-gray-300">{friend.description}</p>
        </div>
      ))}
    </div>
  );
}