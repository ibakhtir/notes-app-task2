import React from "react";
import { FormProps, Target } from "./types";

interface SelectProps extends FormProps {
  options: Option[];
}

type Option = {
  label: string;
  value: string;
};

const SelectField: React.FC<SelectProps> = ({
  options,
  label,
  name,
  value,
  error,
  onChange
}) => {
  const handleChange = ({ target }: Target) => {
    onChange({ name: target.name, value: target.value });
  };

  return (
    <div className="mb-2">
      {label && <label htmlFor={name}>{label}</label>}
      <select
        className="cursor-pointer pl-2"
        id={name}
        name={name}
        value={value}
        onChange={handleChange}
      >
        {options.length > 0 &&
          options.map((option) => (
            <option key={option.value} value={option.label}>
              {option.label}
            </option>
          ))}
      </select>
      {error && <span className="form-error">{error}</span>}
    </div>
  );
};

export default SelectField;
