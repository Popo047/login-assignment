import React, { useRef } from "react";
import { useHistory } from "react-router";

function SignIn() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const history = useHistory();

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredEmail = emailRef.current.value;
    const enteredPassword = passwordRef.current.value;

    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDsYtRlUMzCYpLW0tlgLrsNwjcLoD5pUIQ",
      {
        method: "POST",
        body: JSON.stringify({
          email: enteredEmail,
          password: enteredPassword,
          returnSecureToken: true,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then(async (response) => {
        if (response.ok) {
          console.log("Signed In");
          return response.json();
        } else {
          const data = await response.json();
          console.log(data);
        }
      })
      .then((data) => {
        history.replace("/profile");

        console.log(data);
      });
  };

  return (
    <>
      <form action="" onSubmit={submitHandler}>
        <label htmlFor="">Enter your email </label>
        <input type="email" ref={emailRef} />
        <label htmlFor="">Enter Password</label>
        <input type="password" ref={passwordRef} />
        <button type="submit">Sign In</button>
      </form>
    </>
  );
}

export default SignIn;
