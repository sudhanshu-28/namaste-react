import React from "react";
import ReactDOM from "react-dom/client";

// React Element
const heading = React.createElement(
  "h1",
  { id: "header", style: { color: "blue" } },
  "Namaste React Heading"
);

// React Component - Class based Component, Functional Component

// Arrow function
// const Title = () => {
//   return <h1 id="header">Namaste React</h1>;
// };

const element = <span>React Element</span>;

// Normal function
function Title() {
  return (
    <div>
      <h1 id="header">Namaste React Title</h1>
      {element}
    </div>
  );
}

// Component Composition => its to call one component inside another component
const Header = () => {
  return (
    <div className="container">
      {Title()}
      <h1 className="heading">Header component</h1>
    </div>
  );
};

// JSX => Transpiled to => React.createElement(object) => renderHTML(render)
const jsxHeading = <h1>Namaste React from JSX</h1>;

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading); // Display React element
// root.render(jsxHeading); // Display React JSX

root.render(<Header />); // Display React Component
