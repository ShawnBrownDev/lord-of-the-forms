import { UserInformation } from "./types";

export const InfoRow = ({ label, value }: { label: string; value: string }) => {
  return (
    <div>
      <span style={{ marginRight: 5 }}>
        <b>{label}:</b>
      </span>
      <span>{value}</span>
    </div>
  );
};

const formatPhone = (phone: string) => {
  return phone.replace(/(\d{2})(\d{2})(\d{2})(\d{1})/, "$1-$2-$3-$4");
};

export const ProfileInformation = ({
  userData,
}: {
  userData: UserInformation | null;
}) => {
  if (!userData) {
    return (
      <>
        <u>
          <h3>Your Submitted User Information</h3>
        </u>
        <div className="user-info">
          <div>No information provided</div>
        </div>
      </>
    );
  }

  const { email, firstName, lastName, phone, city } = userData;
  
  return (
    <>
      <u>
        <h3>Your Submitted User Information</h3>
      </u>
      <div className="user-info">
        <InfoRow label="Email" value={email} />
        <InfoRow label="First Name" value={firstName} />
        <InfoRow label="Last Name" value={lastName} />
        <InfoRow label="City" value={city} />
        {/* Format phone number before displaying */}
        <InfoRow label="Phone" value={formatPhone(phone)} />
      </div>
    </>
  );
};
