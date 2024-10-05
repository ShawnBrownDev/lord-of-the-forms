import React from 'react';
import App from '../App';

interface InputFieldProps {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: boolean;
  errorMessage?: string;
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  name,
  value,
  onChange,
  error,
  errorMessage,
}) => (
  <div>
    <label>{label}</label>
    <input name={name} value={value} onChange={onChange} />
    {error && <span className="error">{errorMessage}</span>}
  </div>
);

export default InputField;
