import React from "react";
import PostContent from "../atoms/PostContent";
import PostStats from "../atoms/PostStats";
import ProfilePicture from "@/components/atoms/ProfilePicture";

interface PostProps {
  authorName: string;
  content: string;
  likes: number;
  dislikes: number;
  shares: number;
  comments: number;
  postTime: string;
  handleComment:() => void;
}

const Post: React.FC<PostProps> = ({ authorName, content, likes, dislikes, shares, comments, handleComment, postTime }) => {
  // Combined number of likes and dislikes
  const totalLikes = likes - dislikes;

    return (
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg flex">
            <div>
                <ProfilePicture userName={authorName} scale={0.8}/>
            </div>
            <div className="w-full px-1">
                <h3 className="h-8 leading-8 font-bold">
                    {authorName}
                    <span className="font-extralight mx-4 text-sm">{postTime}</span>
                </h3>
                <PostContent content={content}/>
                <PostStats likes={totalLikes} dislikes={dislikes} shares={shares} comments={comments} handleComment={handleComment}/>
            </div>
        </div>
    );
};

export default Post;
