import axios from "axios";

export const fetchProducts = async () => {
  const posts = await axios.get("https://jsonplaceholder.typicode.com/posts");
  return posts.data;
};
