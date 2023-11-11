import React from "react";
import ReactDOM from "react-dom/client";

// React Element
const spanElement = <span>React Functional Components</span>;

const heading = (
  <h1 id="heading" className="head">
    Hello world and {spanElement}!
  </h1>
);

const Title = () => <div id="title">{heading}</div>;

// React Component
const Heading = () => (
  <div id="container">
    {Title()}
    <Title />
    <Title></Title>
    <h1 className="heading">React Functional Components!</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);
root.render(<Heading />);
