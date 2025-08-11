import React, { useContext } from "react";
import Comment from "./Comment";
import UserInfoContext from "../context/UserInfoontext";

export default function Post() {
  const { isAdmin } = useContext(UserInfoContext);

  return (
    <div>
      {isAdmin && <button>Delete</button>}
      <h1>Example Post Title</h1>
      <p>This isan example post content.</p>

      <Comment></Comment>
    </div>
  );
}
