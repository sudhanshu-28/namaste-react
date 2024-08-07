import { useEffect, useState } from "react";
import { GITHUB_USER_DATA } from "./constants";

const useUserDetails = () => {
  const [userInfo, setUserInfo] = useState({});

  useEffect(() => {
    fetchUserDetails();
  }, []);

  const fetchUserDetails = async () => {
    const data = await fetch(GITHUB_USER_DATA);
    const json = await data.json();
    setUserInfo(json || {});
  };

  return userInfo;
};

export default useUserDetails;
