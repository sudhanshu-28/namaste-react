import React, { useState } from "react";

const defaultObj = {
  name: "",
  email: "",
  message: "",
};

const Contact = () => {
  const [messageObj, setMessageObj] = useState(defaultObj);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMessageObj((prevMessageObj) => ({ ...prevMessageObj, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted with:", messageObj);
  };

  return (
    <div className="m-4 p-4">
      <h1 className="text-2xl">Contact Us</h1>

      <form onSubmit={handleSubmit} className="mt-4 flex-col space-y-4">
        <div className="space-y-1">
          <div>Name</div>
          <input
            type="text"
            name="name"
            placeholder="Enter name"
            className="border border-gray-500 rounded-md p-1"
            value={messageObj?.name}
            onChange={handleChange}
          />
        </div>

        <div className="space-y-1">
          <div>Email</div>
          <input
            type="email"
            name="email"
            placeholder="Enter email"
            className="border border-gray-500 rounded-md p-1"
            value={messageObj?.email}
            onChange={handleChange}
          />
        </div>

        <div className="space-y-1">
          <div>Message</div>
          <textarea
            name="message"
            cols="30"
            rows="5"
            placeholder="Enter message"
            className="border border-gray-500 rounded-md p-2"
            value={messageObj?.message}
            onChange={handleChange}
          />
        </div>

        <button
          type="submit"
          className="border-gray-500 hover:bg-blue-600 bg-blue-500 text-white p-2 px-4 rounded-md"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
