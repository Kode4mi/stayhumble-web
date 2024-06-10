"use client";
import Header from "@/components/molecules/Header";
import SuggestedFriendsNavbar from "@/components/molecules/SuggestedFriendsNavbar";
import SearchBar from "@/components/atoms/SearchBar";
import Post from "@/components/molecules/Post";
import Navbar from "@/components/molecules/Navbar";

export default function HeaderPage() {
  return (
    <div className="flex flex-row">
      <div className="w-[24%] h-screen">
        <Navbar />
      </div>
      <div className="w-[52%]">
        <Header />
          <Post authorName={"KotKamil"} content={"CIAPAKAI"} likes={123} dislikes={2} shares={2} comments={2} />
      </div>
      <div className="w-[24%]">
        <SearchBar />
        <SuggestedFriendsNavbar />
      </div>
    </div>
  );
}
