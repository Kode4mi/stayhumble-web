import React from "react";

interface PostStatsProps {
  likes: number;
  dislikes: number;
  comments: number;
  shares: number;
  handleLike?: () => void;
  handleDislike?: () => void;
  handleComment?: () => void;
  userReaction?: string | null;
}

const PostStats = ({ likes, dislikes, comments, shares, handleLike, handleDislike, handleComment, userReaction }: PostStatsProps) => {
  let totalLikes = likes - dislikes;

  const shortenNumber = (num: number): string => {
    if (num < 1000) return num.toString();
    if (num < 1000000) return Math.floor(num / 100) / 10 + "k";
    if (num < 1000000000) return (num / 1000000).toFixed(1) + "M";
    return (num / 1000000000).toFixed(1) + "B";
  };

  const shortTotalLikes = shortenNumber(totalLikes);
  const shortComments = shortenNumber(comments);
  const shortShares = shortenNumber(shares);

  return (
    <div className="text-black dark:text-white w-full h-8 leading-8 font-light flex items-center">
      <div className="flex items-center justify-between web:w-[16%] w-1/4 ">
        <button className="flex items-center" onClick={handleLike}>
          <span className={`material-symbols-outlined text-2xl ${userReaction === "like" ? "text-orange-500" : ""}`}>thumb_up</span>
        </button>
        <span className="overflow-x-hidden">{shortTotalLikes}</span>
        <button className="flex items-center" onClick={handleDislike}>
          <span className={`material-symbols-outlined text-2xl ${userReaction === "dislike" ? "text-orange-500" : ""}`}>thumb_down</span>
        </button>
      </div>
      <div className="flex items-center web:w-[18%] w-1/4  ">
        <button className="flex items-center ml-8" onClick={handleComment}>
          <span className="material-symbols-outlined text-2xl">comment</span>
        </button>
        <span className=" ml-2 overflow-x-hidden">{shortComments}</span>
      </div>
      <div className="flex items-center">
        <button className="flex items-center">
          <span className="material-symbols-outlined text-2xl">share</span>
        </button>
        <span className="ml-2 overflow-x-hidden">{shortShares}</span>
      </div>
    </div>
  );
};
export default PostStats;
