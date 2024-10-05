import { Component } from "react";
import ClassForm from "./ClassForm";
import "../App.css";
import { UserInformation } from "../types";
import { ProfileInformation } from "../ProfileInformation";

type State = { userInformation: UserInformation | null };

const defaultUser: UserInformation = {
  email: "default@default.com",
  firstName: "Default",
  lastName: "Default",
  phone: "1234567",
  city: "Hobbiton",
};

export class ClassApp extends Component<Record<string, never>, State> {
  state: State = {
    userInformation: defaultUser,
  };

  handleUserInfoSubmit = (userInfo: UserInformation) => {
    this.setState({ userInformation: userInfo });
  };

  render() {
    return (
      <>
        <h2>Class</h2>
        <ProfileInformation userData={this.state.userInformation} />
        <ClassForm onSubmit={this.handleUserInfoSubmit} /> 
      </>
    );
  }
}
 