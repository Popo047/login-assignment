import React from "react";
import Profile from "../components/Profile";
import { useSelector } from "react-redux";

function ProfilePage() {
  const isLoggedIn = useSelector((state) => state.auth.isAuth);

  return <>{isLoggedIn ? <Profile /> : <h2>Please Sign Up/ Sign In</h2>}</>;
}

export default ProfilePage;
