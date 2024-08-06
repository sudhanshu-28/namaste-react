import React, { useEffect } from "react";

const Contact = () => {
  // clear interval on component unmount
  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     console.log("SSR useEffect setInrerval executing");
  //   }, 1000);

  //   return () => {
  //     clearInterval(timer);
  //   };
  // }, []);

  return (
    <div>
      <h1>Contact Us</h1>
      <h2>This is Contact Page</h2>
    </div>
  );
};

export default Contact;
