// components/atoms/AuthorInfo.tsx
import React from 'react';

interface AuthorInfoProps {
  authorName: string;
}

const AuthorInfo: React.FC<AuthorInfoProps> = ({ authorName }) => {
  return <div>{authorName}</div>;
};

export default AuthorInfo;
