import React from "react";
import SuggestedFriendsNavbar from "@/components/molecules/SuggestedFriendsNavbar";
import Navbar from "@/components/molecules/Navbar";
import ThemeSwitch from "@/components/atoms/ThemeSwitch";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid web:grid-cols-[22%_1fr_22%] h-full min-h-screen w-screen web:overflow-x-auto overflow-x-hidden bg-slate-100 dark:bg-gray-900 text-black dark:text-white">
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
      <div className="w-full fixed bottom-0 bg-transparent p-4 web:hidden ">
        <div className="flex justify-around ">
          <button className="flex flex-col items-center">
            <span className="material-symbols-outlined text-orange-600">home</span>
            <span>Dom</span>
          </button>
          <button className="flex flex-col items-center">
            <span className="material-symbols-outlined text-orange-600">search</span>
            <span>Szukaj</span>
          </button>
          <button className="flex flex-col items-center">
            <span className="material-symbols-outlined text-orange-600">person</span>
            <span>Profil</span>
          </button>
        </div>
      </div>
    </div>
  );
}
