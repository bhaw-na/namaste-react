import { Component } from "react";
import User from "./User";
import UserClass from "./UserClass";

class About extends Component {
  constructor(props) {
    super(props);

    // console.log("About - Constructor Called");
  }

  componentDidMount() {
    // console.log("About - Did Mount Called");
    this.timer = setInterval(() => {
      console.log("I Love React");
    }, 1000);
  }

  componentWillUnmount() {
    // console.log("About - Will Un-Mount Called");
    clearInterval(this.timer);
  }

  render() {
    // console.log("About - Render Called");
    return (
      <div>
        <h1>About: Class Component</h1>
        <h2>This is Namaste React web series!</h2>
        {/* <User name="Bhawna (function)" /> */}
        <UserClass name="Bhawna (class)" />
      </div>
    );
  }
}

// const About = () => {
//   return (
//     <div>
//       <h1>About</h1>
//       <h2>This is Namaste React web series!</h2>
//       <User name="Bhawna (function)" />
//       <UserClass name="Bhawna (class)" />
//     </div>
//   );
// };

export default About;
