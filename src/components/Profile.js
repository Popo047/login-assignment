import React from "react";
import Card from "../UI/SimpleCard";
import { authActions } from "../store/auth-slice";
import { Button, CardMedia, Typography } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router";

function Profile() {
  const dispatch = useDispatch();
  const history = useHistory();
  // const isLoggedIn = useSelector((state) => state.auth.isAuth);

  const clickHandler = () => {
    dispatch(authActions.logout());
    history.replace("/signin");
  };

  return (
    <div>
      <h1>Profile Page</h1>
      <Card>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image="/static/profile.jpg"
          title="Contemplative Reptile"
        />
        <Typography gutterBottom variant="h5" component="h2">
          Popo
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          Learning NodeJS
        </Typography>
        <Button variant="contained" color="primary" onClick={clickHandler}>
          Sign Out
        </Button>
      </Card>
    </div>
  );
}

export default Profile;
