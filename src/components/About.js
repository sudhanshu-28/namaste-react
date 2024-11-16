import { Component } from "react";

import User from "./User";
import UserContext from "../utils/UserContext";

class About extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    return (
      <div>
        <h1>About Page</h1>
        <UserContext.Consumer>
          {({ loggedInUser }) => <h2>{loggedInUser}</h2>}
        </UserContext.Consumer>
        <User />
      </div>
    );
  }
}

export default About;
