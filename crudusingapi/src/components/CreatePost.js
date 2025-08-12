import React, { useState } from "react";
import { createPost } from "../services/postService";

export default function CreatePost({ post, setPost }) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    addPost();
    setTitle("");
    setBody("");
  };

  const addPost = () => {
    createPost({ title, body })
      .then(alert("Added Post Successful"))
      .catch((err) => console.log(err));
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>Title</div>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      ></input>
      <div>Body</div>
      <textarea
        type="text"
        value={body}
        onChange={(e) => setBody(e.target.value)}
      ></textarea>
      <div></div>
      <button type="submit"> Add Post</button>
    </form>
  );
}
