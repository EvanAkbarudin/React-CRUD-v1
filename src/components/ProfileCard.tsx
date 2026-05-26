type ProfileCardProps = {
  name?: string;
  birthYear?: number;
  job?: string;
};

const ProfileCard = (props: ProfileCardProps) => {
  const { name = "Unknown", birthYear = 0, job = "Unemployed" } = props;
  return (
    <div className="border-2     border-blue-400 rounded-lg inline-block p-4 m-4">
      <p>Name: {name}</p>
      <p>Birth Year: {birthYear}</p>
      <p>Job: {job}</p>
    </div>
  );
};

export default ProfileCard;
