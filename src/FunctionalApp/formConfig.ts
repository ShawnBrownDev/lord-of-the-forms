export const formFields = [
  {
    name: "firstName",
    label: "First Name",
    placeholder: "Bilbo",
    validationMessage: "First name must be at least 2 characters long",
    validationFn: (value: string) => /^[A-Za-z]{2,}$/.test(value),
  },
  {
    name: "lastName",
    label: "Last Name",
    placeholder: "Baggins",
    validationMessage: "Last name must be at least 2 characters long",
    validationFn: (value: string) => /^[A-Za-z]{2,}$/.test(value),
  },
  {
    name: "email",
    label: "Email",
    placeholder: "bilbo-baggins@adventurehobbits.net",
    validationMessage: "Email is Invalid",
    validationFn: (value: string) => /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(value),
  },
  {
    name: "city",
    label: "City",
    placeholder: "Hobbiton",
    validationMessage: "City is Invalid",
    validationFn: (value: string, allCities: string[]) =>
      allCities.includes(value.toLowerCase()),
  },
  {
    name: "phone",
    label: "Phone",
    placeholder: "NN-NN-NN-N",
    validationMessage: "Phone number must be exactly 7 digits long and numeric",
    validationFn: (value: string) => /^[0-9]{7}$/.test(value.replace(/-/g, "")),
  },
];
