import React from "react";

type ModalProps = {
  isOpen: boolean;
  title: string;
  children: React.ReactNode;
};

const Modal: React.FC<ModalProps> = ({ isOpen, title, children }) => {
  return isOpen ? (
    <div className="modal">
      <div className="modal__window">
        <div className="modal__title">{title}</div>
        <div className="modal__body">{children}</div>
      </div>
    </div>
  ) : null;
};

export default Modal;
