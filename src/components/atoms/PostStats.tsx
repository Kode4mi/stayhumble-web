import React from "react";

interface PostStatsProps {
  likes: number;
  dislikes: number;
  comments: number;
  shares: number;
  handleComment:() => void;
}

const PostStats: React.FC<PostStatsProps> = ({ likes, dislikes, comments, shares, handleComment }) => {
    return (
        <div className="w-full h-8 leading-8 font-light flex items-center">
            <div className="w-1/3 flex">
                <button className="flex items-center">
                    <span className="material-symbols-outlined">thumb_up</span>
                </button>
                <span className="mx-4 w-1/4 overflow-x-hidden text-center">
                    {likes}
                </span>
                <button className="flex items-center">
                    <span className="material-symbols-outlined">thumb_down</span>
                </button>
            </div>
            <div className="w-1/3 flex">
                <button className="flex items-center" onClick={handleComment}>
                    <span className="material-symbols-outlined">comment</span>
                </button>
                <span className="mx-4 w-2/3 overflow-x-hidden">{comments}</span>
            </div>
            <div className="w-1/3 flex">
                <button className="flex items-center">
                    <span className="material-symbols-outlined">share</span>
                </button>
                <span className="mx-4 w-2/3 overflow-x-hidden">{shares}</span>
            </div>
        </div>
    );
};
export default PostStats;
