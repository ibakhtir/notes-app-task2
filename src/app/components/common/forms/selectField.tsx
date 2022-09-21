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
    <div className="form__options">
      {label && <label htmlFor={name}>{label}</label>}
      <select id={name} name={name} value={value} onChange={handleChange}>
        {options.length > 0 &&
          options.map((option) => (
            <option key={option.value} value={option.label}>
              {option.label}
            </option>
          ))}
      </select>
      {error && <span className="form__error">{error}</span>}
    </div>
  );
};

export default SelectField;
