import React from 'react';

interface PostContentProps {
  content: string;
}

const PostContent: React.FC<PostContentProps> = ({ content }) => {
  return <div className="font-light py-2">
    {content}
  </div>;
};

export default PostContent;
