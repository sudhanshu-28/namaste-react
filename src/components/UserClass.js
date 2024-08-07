import React from "react";
import { GITHUB_USER_DATA } from "../utils/constants";

// Class Component
class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "Dummy",
        location: "Dummy",
      },
    };

    console.log("SSR Contructor executed");
  }

  async componentDidMount() {
    const data = await fetch(GITHUB_USER_DATA);
    const json = await data.json();

    console.log("SSR componentDidMount executed");

    this.setState({
      userInfo: json,
    });
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("SSR componentDidUpdate executed");

    // Example for tracking variable update
    if (this.state.count !== prevState.count) {
    }

    // this.timer = setInterval(() => {
    //   console.log("SSR setInterval executing");
    // }, 1000);
  }

  componentWillUnmount() {
    console.log("SSR componentWillUnmount executed");
    clearInterval(this.timer);
  }

  render() {
    const { name, location, avatar_url } = this.state.userInfo;

    console.log("SSR Render executed");

    return (
      <div className="user-card">
        <img src={avatar_url} alt="user_profile" width={350} height={350} />
        <h2>Name: {name}</h2>
        <h3>Location: {location || "India"}</h3>
        <h3>Contact: sudhanshurai97@gmail.com</h3>
      </div>
    );
  }
}

export default UserClass;
