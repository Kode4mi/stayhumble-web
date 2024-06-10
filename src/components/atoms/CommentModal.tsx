import React from "react";

interface ModalProps {
  show: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ show, onClose, children }) => {
  if (!show) return null;

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 " onClick={handleOverlayClick}>
      <div className="relative bg-white dark:bg-gray-800 w-[30%] h-fit rounded-lg shadow-lg p-2 ">
        <button onClick={onClose} className="absolute top-2 right-4 text-xl font-bold">
          &times;
        </button>
        <span>{children}</span>
        <div className="w-full h-full mt-2 ">
          <textarea className="text-black w-full px-4 py-2 h-auto leading-5 resize-none rounded-lg" placeholder="Napisz odpowiedź:" rows={8} />
        </div>
        <div className="flex justify-end">
          <button className="bg-slate-500 text-white px-4 py-2 rounded-lg hover:bg-slate-600 transition-colors">Odpowiedz</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
