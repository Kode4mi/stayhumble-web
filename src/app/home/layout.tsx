import React from "react";
import SuggestedFriendsNavbar from "@/components/molecules/SuggestedFriendsNavbar";
import Modal from "@/components/atoms/CommentModal";
import SearchBar from "@/components/atoms/SearchBar";
import Navbar from "@/components/molecules/Navbar";

export default function layout({children}: {children: React.ReactNode}) {
  return (
    <div className="flex flex-row bg-slate-100 dark:bg-gray-900">
      <div className="w-[22%] h-screen">
        <Navbar />
      </div>
      <div className="w-full px-36 ">{children}</div>
      <div className="w-[22%]">
        <SearchBar />
        <SuggestedFriendsNavbar />
      </div>
      {/* <Modal show={isModalOpen} onClose={handleCloseModal}>
    
        {selectedPost && (
          <div className="w-full">
            <Post authorName={selectedPost.authorName} content={selectedPost.content} likes={selectedPost.likes} dislikes={selectedPost.dislikes} shares={selectedPost.shares} comments={selectedPost.comments} handleComment={() => {}} />{" "}
          </div>
        )}
      </Modal> */}
    </div>
  );
}