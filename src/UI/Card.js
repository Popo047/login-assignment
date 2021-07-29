import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
const useStyles = makeStyles({
  root: {
    minWidth: "400px",
    maxWidth: "900px",
    display: "inline-block",
    marginTop: 50,
    fontSize: 60,
  },
});

function SimpleCard(props) {
  const classes = useStyles();

  return <Card className={classes.root}>{props.children}</Card>;
}

export default SimpleCard;
