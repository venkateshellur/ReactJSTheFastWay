import React, { useEffect, useState } from "react";
import { getPosts } from "../services/postService";

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
  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {posts.map((post) => {
          return (
            <li key={post.id}>
              <p>
                <h2>{post.userId}</h2>
                <h3>{post.title}</h3>
                <h4>{post.body}</h4>
              </p>
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
