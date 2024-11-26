import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import Header from "../Header";
import appStore from "../../store/appStore";

describe("Header component Test case", () => {
  it("Should render Header component with login button", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );

    // find login button with role (button tag) & text
    const loginBtn = screen.getByRole("button", { name: "Login" });
    expect(loginBtn).toBeInTheDocument();
  });

  it("Should render Header component with cart items", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );

    // find login button with role (button tag) & text
    const cartItems = screen.getByTestId("cart-items");
    console.log("cartItems => ", cartItems);
    expect(cartItems).toBeInTheDocument();
    expect(cartItems).toHaveTextContent(0); // if required cart item to be empty
  });

  it("Should change Login button to Logout on click", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );

    // Find login btn
    const loginBtn = screen.getByRole("button", { name: "Login" });

    // how to simulate click even - we will use fireEvent
    fireEvent.click(loginBtn);

    // Find logout btn after click event complete
    const logoutBtn = screen.getByRole("button", { name: "Logout" });

    expect(logoutBtn).toBeInTheDocument();
  });
});
