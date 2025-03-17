import React from "react";
import PostContent from "@/components/atoms/PostContent";
import ProfilePicture from "@/components/atoms/ProfilePicture";
import PostStats from "@/components/atoms/PostStats";
import {useUser} from "@/context/UserContext";

interface ModalProps {
  show: boolean;
  authorName: string;
  content: string;
  likes: number;
  dislikes: number;
  shares: number;
  comments: number;
  postTime: string;
  onClose: () => void;
  userReaction: string | null;
}

const CommentModal = ({ show, onClose, authorName, content, likes, dislikes, shares, comments, postTime, userReaction }: ModalProps) => {
  const {user} = useUser();

  if (!show) return null;

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }

  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 " onClick={handleOverlayClick}>
      <div className="relative bg-white dark:bg-gray-800 web:w-[40%] w-11/12 h-fit rounded-lg shadow-lg p-2 ">
        <button onClick={onClose} className="absolute top-2 right-4 text-xl font-bold">
          &times;
        </button>
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
            <PostStats likes={likes} dislikes={dislikes} shares={shares} comments={comments} userReaction={userReaction} />
          </div>
        </div>

        <div className="w-full h-full mt-2 ">
          <textarea className="dark:bg-gray-700 bg-slate-300 w-full px-4 py-2 h-auto leading-5 resize-none rounded-lg outline-0 border-none" placeholder={user ? "Napisz odpowiedź..." : "Zaloguj się by odpowiedzieć"} rows={8} disabled={!user} />
        </div>
        <div className="flex justify-end">
          <button className="bg-slate-500 text-white px-4 py-2 rounded-lg hover:bg-slate-600 transition-colors" disabled={!user}>Odpowiedz</button>
        </div>
      </div>
    </div>
  );
};

export default CommentModal;
