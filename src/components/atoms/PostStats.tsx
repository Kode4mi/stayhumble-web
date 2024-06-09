import React from 'react';

interface PostStatsProps {
  likes: number;
  dislikes: number;
  comments: number;
  shares: number;
}

const PostStats: React.FC<PostStatsProps> = ({ likes, dislikes, comments, shares }) => {
  return (
    <div>
      {/*placeholder for button images*/}
      <button className='pt-2 pl-4 pr-4'><img src='https://png.pngtree.com/png-vector/20190223/ourmid/pngtree-vector-like-icon-png-image_695769.jpg' className='w-5 h-5'/></button>
      {likes} 
      <button className='pl-4 pr-4'><img src='https://static.vecteezy.com/system/resources/previews/021/013/463/original/dislike-icon-on-transparent-background-free-png.png' className='w-5 h-5'/></button>

      <button className='pl-4 pr-4'><img src='https://cdn-icons-png.flaticon.com/512/1380/1380338.png' className='w-5 h-5'/></button>{comments} 
      <button className='pl-4 pr-4'><img src='https://pngimg.com/d/share_PNG16.png' className='w-5 h-5'/></button>{shares}  
    </div>
  );
};
export default PostStats;
