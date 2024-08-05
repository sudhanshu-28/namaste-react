import React from "react";

// Class Component
class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  render() {
    const { name, location } = this.props;
    const { count } = this.state;

    return (
      <div className="user-card">
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: sudhanshurai97@gmail.com</h4>
        <h3>Count: {count}</h3>
        <div className="count-control">
          <button
            onClick={() => {
              // this.state.count = this.state.count + 1; // NEVER UPDATE STATE VARIABLE DIRECTLY
              this.setState({
                count: this.state.count + 1,
              });
            }}
          >
            +
          </button>
          <button
            onClick={() => {
              this.setState({
                count: this.state.count - 1,
              });
            }}
          >
            -
          </button>
        </div>
      </div>
    );
  }
}

export default UserClass;
