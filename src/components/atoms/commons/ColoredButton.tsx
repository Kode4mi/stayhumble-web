import React from "react";

interface ColoredButtonButtonProps {
  onClick: () => void;
  content: string;
  background: string;
}

const ColoredButton: React.FC<ColoredButtonButtonProps> = ({ onClick, content, background }) => {
  let color: string, hoverColor: string;

  switch (background) {
    case "orange":
      color = "bg-orange-500";
      hoverColor = "hover:bg-orange-600";
      break;
    case "red":
      color = "bg-red-700";
      hoverColor = "hover:bg-red-800";
      break;
    case "blue":
      color = "bg-blue-700";
      hoverColor = "hover:bg-blue-800";
      break;
    case "green":
      color = "bg-green-700";
      hoverColor = "hover:bg-green-800";
      break;
    case "black":
      color = "bg-black";
      hoverColor = "hover:bg-stone-900";
      break;
    case "purple":
      color = "bg-purple-700";
      hoverColor = "hover:bg-purple-800";
      break;
    default:
      color = "bg-orange-500";
      hoverColor = "hover:bg-orange-600";
  }

  const buttonClasses = `w-fit text-white py-2 px-12 rounded transition-all ${color} ${hoverColor}`;

  return (
    <div className="flex items-center justify-center">
      <button type="button" className={buttonClasses} onClick={onClick}>
        {content}
      </button>
    </div>
  );
};

export default ColoredButton;
