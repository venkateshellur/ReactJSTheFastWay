import axios from "axios";

const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

const getPosts = () => api.get("/posts");
const deletePost = () => api.delete("/posts/${id}");

// async function getPosts() {
//   return api.get("/posts");
// }

export { getPosts, deletePost };
