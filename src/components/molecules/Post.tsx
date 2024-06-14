import React, { useState } from "react";
import PostContent from "../atoms/PostContent";
import PostStats from "../atoms/PostStats";
import ProfilePicture from "@/components/atoms/ProfilePicture";
import CommentModal from "@/components/molecules/CommentModal";
import { useUser } from "@/context/UserContext";

interface PostProps {
  authorName: string;
  content: string;
  likes: number;
  dislikes: number;
  shares: number;
  comments: number;
  postTime: string;
}

const Post: React.FC<PostProps> = (props) => {
  const { user } = useUser();
  const { authorName, content, likes, dislikes, shares, comments, postTime } = props;
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [currentLikes, setCurrentLikes] = useState<number>(likes);
  const [currentDislikes, setCurrentDislikes] = useState<number>(dislikes);
  const [userReaction, setUserReaction] = useState<string | null>(null);

  const handleComment = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleLike = () => {
    if (user) {
      if (userReaction === "like") {
        setCurrentLikes(currentLikes - 1);
        setUserReaction(null);
      } else {
        if (userReaction === "dislike") {
          setCurrentDislikes(currentDislikes - 1);
        }
        setCurrentLikes(currentLikes + 1);
        setUserReaction("like");
      }
    }
  };

  const handleDislike = () => {
    if (user) {
      if (userReaction === "dislike") {
        setCurrentDislikes(currentDislikes - 1);
        setUserReaction(null);
      } else {
        if (userReaction === "like") {
          setCurrentLikes(currentLikes - 1);
        }
        setCurrentDislikes(currentDislikes + 1);
        setUserReaction("dislike");
      }
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 py-4 rounded-lg">
      <div className="flex mx-4">
        <div>
          <ProfilePicture userName={authorName} scale={0.8} />
        </div>
        <div className="px-1">
          <h3 className="h-8 leading-8 font-bold">
            {authorName}
            <span className="font-extralight mx-4 text-sm">{postTime}</span>
          </h3>
          <PostContent content={content} />
        </div>
      </div>
      <div className="w-full pl-[3.25rem] pr-[0.25rem] pt-2 border-t-2 dark:border-gray-900 border-slate-200">
        <PostStats likes={currentLikes} dislikes={currentDislikes} shares={shares} comments={comments} handleLike={handleLike} handleDislike={handleDislike} handleComment={handleComment} userReaction={userReaction} />
      </div>
      <CommentModal show={isModalOpen} onClose={handleCloseModal} authorName={authorName} content={content} likes={currentLikes} dislikes={currentDislikes} shares={shares} comments={comments} postTime={postTime} userReaction={userReaction} />
    </div>
  );
};

export default Post;
