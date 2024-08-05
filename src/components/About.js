import User from "./User";
import UserClass from "./UserClass";

const About = () => {
  return (
    <div>
      <h1>About Page</h1>

      <UserClass
        name={"Sudhanshu Rai (from Class component)"}
        location="Mumbai, India"
      />
    </div>
  );
};

export default About;
