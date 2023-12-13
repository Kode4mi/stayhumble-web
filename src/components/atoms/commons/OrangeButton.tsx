import React from "react";

interface OrangeButtonProps {
  onClick: () => void;
  content: string;
}

const OrangeButton: React.FC<OrangeButtonProps> = ({ onClick, content }) => {
  return (
    <div className="flex items-center justify-center">
      <button type="button" className="w-fit bg-orange-500 text-white py-2 px-12 rounded hover:bg-orange-600 transition-all" onClick={onClick}>
        {content}
      </button>
    </div>
  );
};

export default OrangeButton;