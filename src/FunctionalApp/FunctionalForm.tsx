import { useState } from "react";
import { FunctionalFormInput } from "./FunctionalFormInput";
import { formFields } from "./formConfig";

type UserInfo = {
  firstName: string;
  lastName: string;
  email: string;
  city: string;
  phone: string;
};

const allCities = ["hobbiton", "rivendell", "edoras", "gondor", "mordor"];

export const FunctionalForm = ({ setUserInformation }: { setUserInformation: (userInfo: UserInfo) => void }) => {
  const [formValues, setFormValues] = useState<UserInfo>({
    firstName: "",
    lastName: "",
    email: "",
    city: "",
    phone: "",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({
    firstName: "",
    lastName: "",
    email: "",
    city: "",
    phone: "",
  });

  const formatPhone = (phone: string) => {
    return phone.replace(/(\d{2})(\d{2})(\d{2})(\d{1})/, "$1-$2-$3-$4");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors: { [key: string]: string } = {};

    formFields.forEach((field) => {
      const isValid = field.validationFn(
        formValues[field.name as keyof typeof formValues],
        field.name === "city" ? allCities : []
      );
      if (!isValid) {
        newErrors[field.name] = field.validationMessage;
      } else {
        newErrors[field.name] = "";
      }
    });

    setErrors(newErrors);

    if (!Object.values(newErrors).some(Boolean)) {
      const cleanedPhone = formValues.phone.replace(/-/g, "");
      setUserInformation({
        ...formValues,
        phone: cleanedPhone,
      });
    }
  };

  const handleInputChange = (name: string, value: string) => {
    if (name === "phone") {
      const cleanedValue = value.replace(/[^0-9]/g, "").slice(0, 7);
      const formattedPhone = formatPhone(cleanedValue);

      setFormValues((prevValues) => ({
        ...prevValues,
        phone: formattedPhone,
      }));
    } else {
      setFormValues((prevValues) => ({
        ...prevValues,
        [name]: value,
      }));
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>User Information Form</h3>

      {formFields.map((field) => (
        <FunctionalFormInput
          key={field.name}
          name={field.name}
          label={field.label}
          value={formValues[field.name as keyof typeof formValues]}
          onChange={(e) => handleInputChange(field.name, e.target.value)}
          placeholder={field.placeholder}
          error={errors[field.name as keyof typeof errors]}
        />
      ))}

      <input type="submit" value="Submit" />
    </form>
  );
};
