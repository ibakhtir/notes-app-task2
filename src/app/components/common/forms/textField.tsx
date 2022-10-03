import React from "react";
import { FormProps, Target } from "./types";

interface InputProps extends FormProps {
  type?: string;
  placeholder?: string;
}

const TextField: React.FC<InputProps> = ({
  label,
  type = "text",
  name,
  value,
  placeholder,
  error,
  onChange
}) => {
  const handleChange = ({ target }: Target) => {
    onChange({ name: target.name, value: target.value });
  };

  return (
    <div className="mb-2">
      {label && <label htmlFor={name}>{label}</label>}
      <input
        id={name}
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={handleChange}
        autoComplete="true"
        className={error && "border-error"}
      />
      {error && <span className="form-error">{error}</span>}
    </div>
  );
};

export default TextField;
