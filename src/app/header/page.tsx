"use client";
import Header from "@/components/molecules/Header";
import SuggestedFriendsNavbar from "@/components/molecules/SuggestedFriendsNavbar";
import SearchBar from "@/components/atoms/SearchBar";

export default function HeaderPage() {
  return (
    <div className="flex flex-row">
      <div className="w-[22%]">
        Navbar
      </div>
      <div className="w-[56%]">
        <Header />
      </div>
      <div className="w-[22%]">
        <SearchBar />
        <SuggestedFriendsNavbar />
      </div>
    </div>
  );
}
