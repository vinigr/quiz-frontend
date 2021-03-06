import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Avatar as AvatarProfile } from "@material-ui/core";
import AuthService from "../../service/auth";

const useStyles = makeStyles({
  purpleAvatar: {
    color: "#fff",
    backgroundColor: "#00695f",
    cursor: "pointer"
  }
});

export default function Avatar({ handleClick }) {
  const classes = useStyles();

  return (
    <AvatarProfile className={classes.purpleAvatar} onClick={handleClick}>
      {AuthService.getName().substring(0, 1)}
    </AvatarProfile>
  );
}
