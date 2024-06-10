import React from "react";
import AuthorInfo from "../atoms/AuthorInfo";
import PostContent from "../atoms/PostContent";
import PostStats from "../atoms/PostStats";

interface PostProps {
  authorName: string;
  content: string;
  likes: number;
  dislikes: number;
  shares: number;
  comments: number;
  handleComment:() => void;
}

const Post: React.FC<PostProps> = ({ authorName, content, likes, dislikes, shares, comments, handleComment }) => {
  // Combined number of likes and dislikes
  const totalLikes = likes - dislikes;

  return (
    <div className="bg-white dark:bg-gray-700 border-solid border-2 p-4 rounded-lg">
      <div className="p-1">
        <AuthorInfo authorName={authorName} />
      </div>
      <div className="p-1">
        <PostContent content={content} />
      </div>
      <hr className="w-full bg-black"></hr>
      <PostStats likes={totalLikes} dislikes={dislikes} shares={shares} comments={comments} handleComment={handleComment} />
    </div>
  );
};

export default Post;
