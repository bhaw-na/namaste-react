import { useEffect } from "react";

const Contact = () => {
  useEffect(() => {
    const timer = setInterval(() => {
      console.log("React Awesome!!!");
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  });

  return (
    <div>
      <h1>Contact</h1>
    </div>
  );
};

export default Contact;
