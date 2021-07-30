import React from "react";
import { useSelector } from "react-redux";

function PostData() {
  const newUserData = useSelector((state) => state.auth.userDetails);

  return <div></div>;
}

export default PostData;
