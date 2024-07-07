{
  /* <div id="parent">
  <div id="child">
    <h1 id="heading-h1">Hello</h1>
    <h2 id="heading-h2">Hello</h2>
  </div>
</div>; */
}

const parentDiv = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child-1" }, [
    React.createElement("h1", { id: "heading-h1" }, "Hello Child h1"),
    React.createElement("h2", { id: "heading-h2" }, "Hello Child h2"),
  ]),
  React.createElement("div", { id: "child-2" }, [
    React.createElement("h3", { id: "heading-h3" }, "Hello Child h3"),
    React.createElement("h4", { id: "heading-h4" }, null),
  ]),
]);

console.log(parentDiv);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parentDiv);
