import React from "react";
import SuggestedFriendsNavbar from "@/components/molecules/SuggestedFriendsNavbar";
import SearchBar from "@/components/atoms/SearchBar";
import Navbar from "@/components/molecules/Navbar";

export default function layout({children}: {children: React.ReactNode}) {
  return (
    <div className="flex flex-row bg-slate-100 dark:bg-gray-900">
      <div className="w-[22%] h-screen">
        <Navbar />
      </div>
      <div className="w-[56%]">{children}</div>
      <div className="w-[22%]">
        <SearchBar />
        <SuggestedFriendsNavbar />
      </div>
    </div>
  );
}
 