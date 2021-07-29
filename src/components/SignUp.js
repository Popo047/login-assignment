import React, { useRef } from "react";
import { useHistory } from "react-router";

function SignUp() {
  const history = useHistory();
  const emailRef = useRef();
  const passwordRef = useRef();

  const submitHandler = async (event) => {
    event.preventDefault();

    const enteredEmail = emailRef.current.value;
    const enteredPassword = passwordRef.current.value;

    await fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDsYtRlUMzCYpLW0tlgLrsNwjcLoD5pUIQ",
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
          console.log("Signed Up");
        } else {
          const data = await response.json();
          console.log(data);
        }
      })
      .then(() => history.replace("/profile"));
  };

  return (
    <form action="" onSubmit={submitHandler}>
      <label htmlFor="">Enter your email </label>
      <input type="email" ref={emailRef} />
      <label htmlFor="">Enter Password</label>
      <input type="password" ref={passwordRef} />
      <button type="submit">Sign Up</button>
    </form>
  );
}

export default SignUp;
