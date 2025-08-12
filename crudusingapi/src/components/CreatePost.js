import React, { useState, useEffect } from "react";
import { createPost } from "../services/postService";

export default function CreatePost({
  posts,
  setPosts,
  editingPost,
  setEditingPost,
}) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  useEffect(() => {
    if (editingPost) {
      setTitle(editingPost.title);
      setBody(editingPost.body);
    } else {
      setTitle("");
      setBody("");
    }
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    addPost();
    setTitle("");
    setBody("");
  };

  const addPost = () => {
    createPost({ title, body })
      .then((resp) => setPosts([...posts, resp.data]))
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
      <button type="submit">{editingPost ? "Update Post" : "Add Post"}</button>
    </form>
  );
}
