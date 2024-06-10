import React from "react";

interface ColoredButtonButtonProps {
  onClick?: () => void;
  content?: string;
  background?: string;
  size?: string;
  icon?: string;
  additionalStyles?: string;
}

/** 
 * ColoredButton Component
 * 
 * @param {Function} onClick - Function to execute on button click.
 * @param {string} content - The content/text to display on the button.
 * @param {string} background - The background color of the button. Can be "orange", "red", "blue", "green", "black", "purple", "none", or "white".
 * @param {string} size - The size of the button. Can be "s", "m", "l", "xl", or "custom".
 * @param {string} icon - The icon to display before the content.
 * @param {string} additionalStyles - Additional CSS classes to apply to the button.
 */
const ColoredButton: React.FC<ColoredButtonButtonProps> = ({ onClick, content, background, size, icon, additionalStyles  }) => {
  let color: string, hoverColor: string;
  let paddingX: string;
  let paddingY: string;

  switch (background) {
    case "orange":
      color = "bg-orange-500 text-white";
      hoverColor = "hover:bg-orange-600";
      break;
    case "red":
      color = "bg-red-700 text-white";
      hoverColor = "hover:bg-red-800";
      break;
    case "blue":
      color = "bg-blue-700 text-white";
      hoverColor = "hover:bg-blue-800";
      break;
    case "green":
      color = "bg-green-700 text-white";
      hoverColor = "hover:bg-green-800";
      break;
    case "black":
      color = "bg-black text-white";
      hoverColor = "hover:bg-stone-900";
      break;
    case "purple":
      color = "bg-purple-700 text-white";
      hoverColor = "hover:bg-purple-800";
      break;
    case "none":
      color = "bg-inherit text-black dark:text-white";
      hoverColor = "hover:scale-105";
      break;
    case "white":
      color = "bg-white border border-black text-black";
      hoverColor = "hover:bg-gray-100";
      break;
    default:
      color = "bg-orange-500 text-white";
      hoverColor = "hover:bg-orange-600";
  }

  switch (size) {
    case "s":
      paddingX = "px-12";
      paddingY = "py-2";
      break;
    case "m":
      paddingX = "px-16";
      paddingY = "py-4";
      break;
    case "l":
      paddingX = "px-20";
      paddingY = "py-6";
      break;
    case "xl":
      paddingX = "px-24";
      paddingY = "py-8";
      break;
    case "custom":
      paddingX = "";
      paddingY = "";
      break;
    default:
      paddingX = "px-12";
      paddingY = "py-2";
  }

  const buttonClasses = `w-fit ${paddingX} ${paddingY} rounded transition-all ${color} ${hoverColor} ${additionalStyles}`;

  return (
    <div className="flex items-center justify-center">
      <button type="button" className={buttonClasses} onClick={onClick}>
        <div className="flex items-center space-x-2">
          <span className="material-symbols-outlined text-4xl">{icon}</span>
          <span>{content}</span>
        </div>
      </button>
    </div>
  );
};

export default ColoredButton;
