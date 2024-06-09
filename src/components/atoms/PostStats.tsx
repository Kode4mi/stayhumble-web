import React from 'react';

interface PostStatsProps {
  likes: number;
  dislikes: number;
  comments: number;
  shares: number;
}

const PostStats: React.FC<PostStatsProps> = ({ likes, dislikes, comments, shares }) => {
    return (
        <div className="text-black dark:text-white flex items-center justify-between w-1/4 py-2">
            {/*placeholder for button images*/}
            <button>
              <span className="material-symbols-outlined">
                thumb_up
              </span>
            </button>
            <span>
                {likes}
            </span>
            <button>
              <span className="material-symbols-outlined">
                thumb_down
              </span>
            </button>
            <button>
              <span className="material-symbols-outlined">
                comment
              </span>
            </button>
            <span>
                {comments}
            </span>
            <button>
              <span className="material-symbols-outlined">
                share
              </span>
            </button>
            <span>
                {shares}
            </span>
        </div>
    );
};
export default PostStats;
