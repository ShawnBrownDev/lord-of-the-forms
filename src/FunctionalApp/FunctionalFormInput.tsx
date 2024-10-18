import { ErrorMessage } from "../ErrorMessage";

type FunctionalFormInputProps = {
  name: string;
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  error: string | null;
};

export const FunctionalFormInput = ({ label, value, onChange, placeholder, error }: FunctionalFormInputProps) => {
  return (
    <div className="input-wrap">
      <label>{label}:</label>
      <input value={value} onChange={onChange} placeholder={placeholder} />
      <ErrorMessage message={error || ""} show={!!error} />
    </div>
  );
};
