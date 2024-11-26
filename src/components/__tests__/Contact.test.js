import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("Contact Us page Test Case", () => {
  test("Should load Contact component", () => {
    // To test component we need to render the component on jest-dom first
    render(<Contact />);

    const heading = screen.getByRole("heading");

    // Assertion
    expect(heading).toBeInTheDocument();
  });

  test("Should load button inside Contact component", () => {
    render(<Contact />);

    const btn = screen.getByRole("button");

    // Assertion
    expect(btn).toBeInTheDocument();
  });

  test("Should exist Button with label Submit", () => {
    render(<Contact />);

    const btnLabel = screen.getByText("Submit");

    // Assertion
    expect(btnLabel).toBeInTheDocument();
  });

  test("Should exist Button with label Submit", () => {
    render(<Contact />);

    const btnLabel = screen.getByText("Submit");

    // Assertion
    expect(btnLabel).toBeInTheDocument();
  });

  test("Should load input name inside Contact component", () => {
    render(<Contact />);

    const nameInputField = screen.getByPlaceholderText("Enter name");

    // Assertion
    expect(nameInputField).toBeInTheDocument();
  });

  it("Should load 3 input boxes on Contact component", () => {
    // 1. Render something
    render(<Contact />);

    // 2. Query something
    const inputBoxes = screen.getAllByRole("textbox");
    console.log("inputBoxes => ", inputBoxes.length);

    // 3. Assertion something
    expect(inputBoxes.length).toBe(3);
  });
});
