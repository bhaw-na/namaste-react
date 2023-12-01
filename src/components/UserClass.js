import React from "react";
import User from "./User";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "User",
        location: "Default",
        contact: "@user",
      },
    };

    // console.log(this.props.name + "User - Constructor Called");
  }

  async componentDidMount() {
    // console.log(this.props.name + "User - Did Mount Called");

    const data = await fetch("https://api.github.com/users/akshaymarch7");
    const json = await data.json();
    // console.log(json);
    this.setState({
      userInfo: json,
    });
  }

  render() {
    // console.log(this.props.name + "User - Render Called");
    // const { name } = this.props;
    // const { count } = this.state;

    const { name, location, twitter_username } = this.state.userInfo;

    return (
      <div className="user-card">
        {/* <h1>Count: {count}</h1>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          +1
        </button> */}
        <h1>Name: {name}</h1>
        <h3>Location: {location}</h3>
        <h4>Contact: {twitter_username}</h4>
      </div>
    );
  }
}

export default UserClass;
