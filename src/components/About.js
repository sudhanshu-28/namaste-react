import { Component } from "react";

import User from "./User";

class About extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    return (
      <div>
        <h1>About Page</h1>
        <User />
      </div>
    );
  }
}

export default About;
