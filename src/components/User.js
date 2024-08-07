import useUserDetails from "../utils/useUserDetails";

// Functional Component
const User = () => {
  const userInfo = useUserDetails();
  const { name, location, avatar_url } = userInfo;

  return (
    <div className="user-card">
      <img src={avatar_url} alt="user_profile" width={350} height={350} />
      <h2>Name: {name}</h2>
      <h3>Location: {location || "India"}</h3>
      <h3>Contact: sudhanshurai97@gmail.com</h3>
    </div>
  );
};

export default User;
