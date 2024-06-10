"use client";
import { useState } from "react";
import Header from "@/components/molecules/Header";
import SuggestedFriendsNavbar from "@/components/molecules/SuggestedFriendsNavbar";
import SearchBar from "@/components/atoms/SearchBar";
import Post from "@/components/molecules/Post";
import Navbar from "@/components/molecules/Navbar";
import Modal from "@/components/atoms/CommentModal";

interface PostType {
  authorName: string;
  content: string;
  likes: number;
  dislikes: number;
  shares: number;
  comments: number;
}

export default function HeaderPage() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedPost, setSelectedPost] = useState<PostType | null>(null);

  const handleComment = (post: PostType) => {
    setSelectedPost(post);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedPost(null);
  };

  const posts: PostType[] = [
    { authorName: "KotKamil", content: "CIAPAKAI", likes: 123, dislikes: 2, shares: 2, comments: 2 },
    { authorName: "Artur", content: "test", likes: 25555, dislikes: 125, shares: 3, comments: 6 },
    { authorName: "QSPYX", content: "EL0O ZIOMKI", likes: 15156151651, dislikes: 0, shares: 454564654, comments: 151561 },
  ];

  return (
    <div className="flex flex-row bg-slate-100 dark:bg-gray-900">
      <div className="w-[22%] h-screen">
        <Navbar />
      </div>
      <div className="w-[56%]">
        <Header />
        <div className="px-4 space-y-8 pt-4">
          {posts.map((post, index) => (
            <Post key={index} authorName={post.authorName} content={post.content} likes={post.likes} dislikes={post.dislikes} shares={post.shares} comments={post.comments} handleComment={() => handleComment(post)} />
          ))}
        </div>
      </div>
      <div className="w-[22%]">
        <SearchBar />
        <SuggestedFriendsNavbar />
      </div>
      <Modal show={isModalOpen} onClose={handleCloseModal}>
        {/* tu można też zrobić komponent Comment i bezpośrednio do niego przekazywać */}
        {selectedPost && (
          <div className="w-full">
            <Post authorName={selectedPost.authorName} content={selectedPost.content} likes={selectedPost.likes} dislikes={selectedPost.dislikes} shares={selectedPost.shares} comments={selectedPost.comments} handleComment={() => {}} />{" "}
          </div>
        )}
      </Modal>
    </div>
  );
}
