import React from 'react';
import ProfilePicture from "@/components/atoms/ProfilePicture";

interface AuthorInfoProps {
  authorName: string;
}

const AuthorInfo: React.FC<AuthorInfoProps> = ({ authorName }) => {
  return <div className="flex items-center">
    <ProfilePicture userName={authorName} scale={0.8}/>
    <span className="px-2">
      {authorName}
    </span>
  </div>;
};

export default AuthorInfo;
