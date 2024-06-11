import React from "react";

interface PostStatsProps {
  likes: number;
  dislikes: number;
  comments: number;
  shares: number;
  handleComment: () => void;
}

const PostStats: React.FC<PostStatsProps> = ({ likes, dislikes, comments, shares, handleComment }) => {
  const shortenNumber = (num: number): string => {
    if (num < 1000) return num.toString();
    if (num < 1e6) return (num / 1e3).toFixed(1) + "k";
    if (num < 1e9) return (num / 1e6).toFixed(1) + "M";
    return (num / 1e9).toFixed(1) + "B";
  };
  
  const shortTotalLikes = shortenNumber(likes);
  const shortComments = shortenNumber(comments);
  const shortShares = shortenNumber(shares);

  return (
    <div className="w-full h-8 leading-8 font-light flex items-center">
      <div className="flex items-center justify-between w-[10%]">
        <button className="flex items-center">
          <span className="material-symbols-outlined text-orange-500">thumb_up</span>
        </button>
        <span className="overflow-x-hidden">{shortTotalLikes}</span>
        <button className="flex items-center">
          <span className="material-symbols-outlined">thumb_down</span>
        </button>
      </div>
      <div className="flex items-center w-[13%]  ">
        <button className="flex items-center ml-8" onClick={handleComment}>
          <span className="material-symbols-outlined">comment</span>
        </button>
        <span className="mx-4 overflow-x-hidden">{shortComments}</span>
      </div>
      <div className="flex items-center">
        <button className="flex items-center">
          <span className="material-symbols-outlined">share</span>
        </button>
        <span className="mx-4 overflow-x-hidden">{shortShares}</span>
      </div>
    </div>
  );
};
export default PostStats;
