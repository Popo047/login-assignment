import React, { useRef } from "react";
import { useHistory } from "react-router";
import { useDispatch } from "react-redux";
import { authActions, postNewUserData } from "../store/auth-slice";
import Card from "../UI/SimpleCard";
import {
  FormControl,
  InputLabel,
  Input,
  FormHelperText,
  Typography,
  Button,
} from "@material-ui/core";

function SignUp() {
  const history = useHistory();
  const emailRef = useRef();
  const nameRef = useRef();
  const addressRef = useRef();
  const phoneRef = useRef();
  const passwordRef = useRef();
  const dispatch = useDispatch();

  const submitHandler = async (event) => {
    event.preventDefault();

    const enteredEmail = emailRef.current.value;
    const enteredPassword = passwordRef.current.value;
    const enteredName = nameRef.current.value;
    const enteredAddress = addressRef.current.value;
    const enteredPhone = phoneRef.current.value;
    const deets = {
      name: enteredName,
      address: enteredAddress,
      phone: enteredPhone,
      email: enteredEmail,
      password: enteredPassword,
    };

    await fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[keyIsHidden]",
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
          dispatch(authActions.login());
          dispatch(authActions.userDeets(deets));
          dispatch(postNewUserData(deets));
        } else {
          const data = await response.json();
          console.log(data);
        }
      })
      .then(() => history.replace("/profile"));
  };

  return (
    <>
      <Typography variant="h3" color="primary">
        Sign Up
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
              Password must contain 8 letters
            </FormHelperText>
          </FormControl>
          <br />
          <FormControl>
            <InputLabel htmlFor="">Enter Name</InputLabel>
            <Input type="text" inputRef={nameRef} />
          </FormControl>
          <br />
          <FormControl>
            <InputLabel htmlFor="">Enter Address</InputLabel>
            <Input type="text" inputRef={addressRef} />
          </FormControl>
          <br />
          <FormControl>
            <InputLabel htmlFor="">Enter Phone Number</InputLabel>
            <Input type="text" inputRef={phoneRef} />
          </FormControl>
          <br />
          <Button type="submit" variant="contained" color="primary">
            Sign Up
          </Button>
        </form>
      </Card>
    </>
  );
}

export default SignUp;
