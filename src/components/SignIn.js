import React, { useRef } from "react";
import { useHistory } from "react-router";
import Button from "@material-ui/core/Button";
import {
  FormControl,
  InputLabel,
  Input,
  FormHelperText,
  Typography,
} from "@material-ui/core";
import Card from "../UI/Card";

function SignIn() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const history = useHistory();

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredEmail = emailRef.current.value;
    const enteredPassword = passwordRef.current.value;

    console.log(enteredEmail, enteredPassword);

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
          history.replace("/profile");
          return response.json();
        } else {
          const data = await response.json();
          console.log(data);
        }
      })
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <>
      <Typography variant="h3" color="primary">
        Sign In
      </Typography>
      <Card>
        <form action="" onSubmit={submitHandler}>
          <FormControl>
            <InputLabel htmlFor="">Enter your email </InputLabel>
            <Input
              type="email"
              inputRef={emailRef}
              aria-describedby="my-helper-text"
            />
            <FormHelperText id="my-helper-text">
              We'll never share your email.
            </FormHelperText>
          </FormControl>
          <br />
          <FormControl>
            <InputLabel htmlFor="">Enter Password</InputLabel>
            <Input
              type="password"
              inputRef={passwordRef}
              aria-describedby="my-helper-text"
            />
            <FormHelperText id="my-helper-text">
              Password is required.
            </FormHelperText>
          </FormControl>
          <br />
          <Button type="submit" variant="contained" color="primary">
            Sign In
          </Button>
        </form>
      </Card>
    </>
  );
}

export default SignIn;
