"use client";
import { useState } from "react";
import Header from "@/components/molecules/Header";
import Post from "@/components/molecules/Post";


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
    <div>
      <Header />
      <div className="px-4 space-y-8 pt-4">
        {posts.map((post, index) => (
          <Post key={index} authorName={post.authorName} content={post.content} likes={post.likes} dislikes={post.dislikes} shares={post.shares} comments={post.comments} handleComment={() => handleComment(post)} />
        ))}
      </div>
    </div>
  );
}
