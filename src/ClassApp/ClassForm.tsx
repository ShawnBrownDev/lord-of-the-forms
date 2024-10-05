import React from "react";
import InputField from "./InputField";
import { UserInformation } from "../types";
import { isEmailValid, isCityValid, isPhoneValid } from "../utils/validations";
import { capitalize, formatPhone } from "../utils/transformations";
import { ErrorMessage } from "../ErrorMessage";

interface ClassFormProps {
  onSubmit: (userInfo: UserInformation) => void;
}

interface ClassFormState {
  firstName: string;
  lastName: string;
  email: string;
  city: string;
  phone: string;
  submittedOnce: boolean;
  errors: {
    firstName?: boolean;
    lastName?: boolean;
    email?: boolean;
    city?: boolean;
    phone?: boolean;
  };
}

class ClassForm extends React.Component<ClassFormProps, ClassFormState> {
  constructor(props: ClassFormProps) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      city: "",
      phone: "",
      submittedOnce: false,
      errors: {},
    };
  }

  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    this.setState((prevState) => ({
      ...prevState,
      [name]: value,
      errors: { ...prevState.errors, [name]: false },
    }));
  };

  handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { firstName, lastName, email, city, phone } = this.state;

    const errors: ClassFormState["errors"] = {};

    if (firstName.length < 2 || /\d/.test(firstName)) errors.firstName = true;
    if (lastName.length < 2 || /\d/.test(lastName)) errors.lastName = true;
    if (!isEmailValid(email)) errors.email = true;
    if (!isCityValid(city)) errors.city = true;
    if (!isPhoneValid(phone) || phone.length !== 7) errors.phone = true;

    if (Object.keys(errors).length > 0) {
      this.setState({ submittedOnce: true, errors });
      return;
    }

    const formattedPhone = formatPhone(phone);

    this.props.onSubmit({
      firstName: capitalize(firstName),
      lastName: capitalize(lastName),
      email,
      city,
      phone: formattedPhone,
    });

    this.setState({ submittedOnce: false, errors: {}, phone: "" });
  };

  render() {
    const { firstName, lastName, email, city, phone, submittedOnce, errors } =
      this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <u>
          <h3>User Information Form</h3>
        </u>

        <InputField
          label="First Name:"
          name="firstName"
          value={firstName}
          onChange={this.handleChange}
        />
        <ErrorMessage
          message="First name must be at least 2 characters long and should not contain numbers"
          show={submittedOnce && !!errors.firstName}
        />

        <InputField
          label="Last Name:"
          name="lastName"
          value={lastName}
          onChange={this.handleChange}
        />
        <ErrorMessage
          message="Last name must be at least 2 characters long and should not contain numbers"
          show={submittedOnce && !!errors.lastName}
        />

        <InputField
          label="Email:"
          name="email"
          value={email}
          onChange={this.handleChange}
        />
        <ErrorMessage
          message="Invalid email format"
          show={submittedOnce && !!errors.email}
        />

        <InputField
          label="City:"
          name="city"
          value={city}
          onChange={this.handleChange}
        />
        <ErrorMessage
          message="City is not valid"
          show={submittedOnce && !!errors.city}
        />

        <InputField
          label="Phone Number:"
          name="phone"
          value={phone}
          onChange={this.handleChange}
        />
        <ErrorMessage
          message="Phone number must be 7 digits"
          show={submittedOnce && !!errors.phone}
        />

        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default ClassForm;
