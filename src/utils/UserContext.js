import { createContext } from "react";
// For creating Context react provide us function createContext

const UserContext = createContext({
  loggedInUser: "Default User",
});

export default UserContext;
