import { useState } from "react";
import { ProfileInformation } from "../ProfileInformation";
import { FunctionalForm } from "./FunctionalForm";

type UserInfo = {
  firstName: string;
  lastName: string;
  email: string;
  city: string;
  phone: string;
};

export const FunctionalApp = () => {
  const [userInformation, setUserInformation] = useState<UserInfo | null>(null);

  const handleSetUserInformation = (userInfo: UserInfo) => {
    setUserInformation(userInfo);
  };

  return (
    <>
      <h2>Functional</h2>
      <ProfileInformation userData={userInformation} />
      <FunctionalForm setUserInformation={handleSetUserInformation} />
    </>
  );
};
