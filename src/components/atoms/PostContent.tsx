import React from 'react';
import Image from 'next/image';

interface PostContentProps {
  content: string;
  imageUrl?: string;
}

const PostContent = ({ content, imageUrl }: PostContentProps) => {
  return <div className="text-black dark:text-white pt-2 py-4 w-full flex flex-col">
    <span>
      {content}
    </span>
    {imageUrl ?
        <div className="max-w-full h-96 overflow-hidden rounded-2xl self-center mt-4">
          <Image src={imageUrl} alt="Post" fill style={{objectFit: 'contain'}}/>
        </div>
        : null
    }

  </div>;
};

export default PostContent;
