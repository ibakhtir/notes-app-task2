import React from "react";

interface ButtonProps {
  type: "button" | "submit";
  children: React.ReactNode;
  size?: "btn-small" | "btn-medium" | "btn-large";
  color?: string;
  restStyle?: string;
  disabled?: boolean;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  type,
  children,
  size = "btn-medium",
  color,
  restStyle,
  disabled = false,
  onClick
}) => {
  return (
    <button
      type={type}
      className={`${size} ${color} ${restStyle}`}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
