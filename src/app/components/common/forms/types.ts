export interface FormProps {
  label?: string;
  name: string;
  value: string | number;
  error?: string;
  onChange: (data: { name: string; value: string | number }) => void;
}

export type InputValue = {
  name: string;
  value: string | number;
};

export type Target = {
  target: InputValue;
};
