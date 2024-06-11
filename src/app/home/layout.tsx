import React from "react";
import SuggestedFriendsNavbar from "@/components/molecules/SuggestedFriendsNavbar";
import Modal from "@/components/atoms/CommentModal";
import SearchBar from "@/components/atoms/SearchBar";
import Navbar from "@/components/molecules/Navbar";

export default function layout({children}: {children: React.ReactNode}) {
  return (
    <div className="flex flex-row h-full w-screen bg-slate-100 dark:bg-gray-900 ">
      <div className="w-[22%] h-screen web:flex hidden  ">
        <Navbar />
      </div>
      <div className="w-full h-full web:px-36 pr-2  ">{children}</div>
      <div className="w-[22%] h-full web:block hidden ">
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