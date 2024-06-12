import React from "react";
import SuggestedFriendsNavbar from "@/components/molecules/SuggestedFriendsNavbar";
import Modal from "@/components/atoms/CommentModal";
import SearchBar from "@/components/atoms/SearchBar";
import Navbar from "@/components/molecules/Navbar";

export default function layout({children}: {children: React.ReactNode}) {
  return (
    <div className="grid grid-cols-[22%_1fr_22%] h-full w-screen bg-slate-100 dark:bg-gray-900 ">
      <div className="h-screen left-0 top-0 bottom-0 web:flex hidden fixed  ">
        <Navbar />
      </div>
      <div className="w-full col-start-2 col-end-3 overflow-y-auto h-full web:px-24">{children}</div>
      <div className="h-screen fixed right-0 top-0 bottom-0 web:block hidden ">
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