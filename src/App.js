import React, { useState } from "react";
// import Reactcontact from "./component/Reactcontact";
// import Contact from "./component/Contact";
import "./App.css";

const App = () => {
  const [user, setuser] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  let name, value;
  const getUserData = (event) => {
    name = event.target.name;
    value = event.target.value;
    setuser({ ...user, [name]: value });
  };
  const postData = async (e) => {
    e.preventDefault();
    const { name, email, phone, message } = user;
    if (name && email && phone && message) {
      const res = await fetch(
        "https://reactcontact-a9bde-default-rtdb.firebaseio.com/reactcontact.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application.json",
          },
          body: JSON.stringify({
            name,
            email,
            phone,
            message,
          }),
        }
      );
      if (res) {
        setuser({
          name: "",
          email: "",
          phone: "",
          message: "",
        });
        alert("data stored");
      }
    } else {
      alert("plz fill the form ");
    }
  };
  return (
    <>
      <form
        id="contact_form"
        action="#"
        method="POST"
        enctype="multipart/form-data"
      >
        <div class="row">
          <label class="required" for="name">
            Your name:
          </label>
          <br />
          <input
            id="name"
            class="input"
            placeholder="enter your name"
            name="name"
            type="text"
            value={user.name}
            onChange={getUserData}
            size="30"
            required
          />
          <br />
          <span id="name_validation" class="error_message"></span>
        </div>
        <div class="row">
          <label class="required" for="email">
            Your email:
          </label>
          <br />
          <input
            id="email"
            class="input"
            placeholder="enter your email"
            name="email"
            type="text"
            value={user.email}
            onChange={getUserData}
            size="30"
            required
          />
          <br />
          <span id="email_validation" class="error_message"></span>
        </div>
        <div class="row">
          <label class="required" for="phone">
            Your phoneno:
          </label>
          <br />
          <input
            id="phone"
            class="input"
            placeholder="enter your number"
            name="phone"
            type="number"
            value={user.phone}
            onChange={getUserData}
            size="30"
            required
          />
          <br />
          <span id="email_validation" class="error_message"></span>
        </div>
        <div class="row">
          <label class="required" for="message">
            Your message:
          </label>
          <br />
          <textarea
            id="message"
            class="input"
            placeholder="enter your messages"
            value={user.message}
            onChange={getUserData}
            name="message"
            rows="7"
            cols="30"
            required
          ></textarea>
          <br />
          <span id="message_validation" class="error_message"></span>
        </div>

        <input
          id="submit_button"
          type="submit"
          value="Send email"
          onClick={postData}
        />
      </form>
    </>
  );
};

export default App;
