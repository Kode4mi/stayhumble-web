"use client";
import Header from "@/components/molecules/Header";
import SuggestedFriendsNavbar from "@/components/molecules/SuggestedFriendsNavbar";
import SearchBar from "@/components/atoms/SearchBar";
import Post from "@/components/molecules/Post";
import Navbar from "@/components/molecules/Navbar";

export default function HeaderPage() {
  return (
    <div className="flex flex-row bg-slate-100 dark:bg-gray-900">
      <div className="w-[24%] h-screen">
        <Navbar />
      </div>
      <div className="w-[52%]">
        <Header />
        <div className="px-4 space-y-8 pt-4">
          <Post authorName={"KotKamil"} content={"CIAPAKAI"} likes={123} dislikes={2} shares={2} comments={2} />
          <Post authorName={"KotKamil"} content={"CIAPAKAI"} likes={123} dislikes={2} shares={2} comments={2} />
          <Post authorName={"KotKamil"} content={"CIAPAKAI"} likes={123} dislikes={2} shares={2} comments={2} />
        </div>
      </div>
      <div className="w-[24%]">
        <SearchBar />
        <SuggestedFriendsNavbar />
      </div>
    </div>
  );
}
