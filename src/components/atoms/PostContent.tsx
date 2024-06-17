import React from 'react';

interface PostContentProps {
  content: string;
  imageUrl?: string;
}

const PostContent: React.FC<PostContentProps> = ({ content, imageUrl }) => {
  return <div className="pt-2 py-4 w-full flex flex-col">
    <span>
      {content}
    </span>
    {imageUrl ?
        <div className="max-w-full h-fit overflow-hidden rounded-2xl self-center mt-4">
          <img src={imageUrl} alt="Post" className="w-full h-fit"/>
        </div>
        : null
    }

  </div>;
};

export default PostContent;
