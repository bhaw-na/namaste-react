const parent = React.createElement(
    "div",
    {id:"parent"},
    [
        React.createElement(
            "div",
            {id:"child1"},
            [
                React.createElement("h1",{},"Bhawna was here sometime back!"),
                React.createElement("h2",{},"But she got replaced by ReactDOM.render().")
            ]
        ),
        React.createElement(
            "div",
            {id:"child"},
            [
                React.createElement("br",{},),
                React.createElement("h2",{},"This was all from Namaste-React Episode 1: INCEPTION!")
            ]
        )
    ]
);

const heading = React.createElement("h1", {id: "heading"}, "Hello World from React!");

// console.log(parent); // object

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);