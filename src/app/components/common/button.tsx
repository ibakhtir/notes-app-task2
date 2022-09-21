import React from "react";

type ButtonProps = {
  type: "button" | "submit";
  children?: React.ReactNode;
  className?: string;
  disabled?: boolean;
  onClick?: () => void;
};

const Button: React.FC<ButtonProps> = ({
  type,
  children,
  className,
  disabled,
  onClick
}) => {
  return (
    <button
      type={type}
      className={className}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
