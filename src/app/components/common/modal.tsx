import React from "react";

type ModalProps = {
  isOpen: boolean;
  title: string;
  children: React.ReactNode;
};

const Modal: React.FC<ModalProps> = ({ isOpen, title, children }) => {
  return isOpen ? (
    <div className="flex justify-center items-center fixed top-0 left-0 z-50 w-full h-full bg-black/30">
      <div className="rounded-md w-80 py-4 px-5 bg-white ">
        <div className="text-2xl p-3">{title}</div>
        <div>{children}</div>
      </div>
    </div>
  ) : null;
};

export default Modal;
