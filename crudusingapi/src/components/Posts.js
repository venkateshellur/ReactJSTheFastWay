import React, { useEffect, useState } from "react";
import { getPosts, deletePost } from "../services/postService";
import CreatePost from "./CreatePost";

export default function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPosts()
      .then((r) => {
        setPosts(r.data);
        console.log(r);
      })
      .catch((err) => console.log(err));

    // const resp = getPosts();
    // console.log(resp);
    //console.log(displayData());
  }, []);

  const handleDelete = (id) => {
    deletePost(id)
      .then(setPosts(posts.filter((post) => post.id !== id)))
      .then(alert("Delete Successful"))
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <CreatePost posts={posts} setPosts={setPosts}></CreatePost>
      <h1>Posts</h1>
      <ul>
        {posts.map((post) => {
          return (
            <li key={post.id}>
              <h2>{post.id}</h2>
              <h3>{post.title}</h3>
              <h4>{post.body}</h4>
              <button value={post.id} onClick={() => handleDelete(post.id)}>
                Delete Post
              </button>
              <div></div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

async function displayData() {
  try {
    var resp = await getPosts();
    return resp.data;
  } catch (error) {
    console.log(error);
  }
}
