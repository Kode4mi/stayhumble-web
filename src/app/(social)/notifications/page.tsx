import React from "react";

const notifications = [
  {
    id: 1,
    message: "User1 liked your post.",
    time: "2024-06-25 14:32",
  },
  {
    id: 2,
    message: "User2 commented on your post.",
    time: "2024-06-25 13:45",
  },
  {
    id: 3,
    message: "User3 started following you.",
    time: "2024-06-24 16:22",
  },
];

export default function NotificationsPage() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Notifications</h1>
      <div className="space-y-4">
        {notifications.map((notification) => (
          <div key={notification.id} className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md">
            <p className="text-gray-800 dark:text-gray-200">{notification.message}</p>
            <p className="text-gray-500 dark:text-gray-400 text-sm">{notification.time}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
