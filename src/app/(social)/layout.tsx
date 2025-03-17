import React from "react";
import SuggestedFriendsNavbar from "@/components/molecules/SuggestedFriendsNavbar";
import Navbar from "@/components/molecules/Navbar";
import ThemeSwitch from "@/components/atoms/ThemeSwitch";
import PhoneNavbar from "@/components/molecules/PhoneNavbar";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="text-black dark:text-white web:grid web:grid-cols-[22%_1fr_22%] h-full min-h-screen w-screen web:overflow-x-auto overflow-x-hidden bg-slate-100 dark:bg-gray-900">
      <div className="h-screen left-0 top-0 bottom-0 web:flex hidden fixed">
        <Navbar />
      </div>
      <div className="w-full col-start-2 col-end-3 overflow-y-auto h-full web:px-24">{children}</div>
      <div className="h-screen fixed right-0 top-0 bottom-0 web:block hidden">
        <div className="flex justify-end p-4 mr-8">
        <ThemeSwitch />
        </div>
        <SuggestedFriendsNavbar />
      </div>
      <div className="w-full fixed bottom-0 bg-opacity-95 p-4 web:hidden bg-slate-100 dark:bg-gray-900 ">
        <PhoneNavbar />
      </div>
    </div>
  );
}
