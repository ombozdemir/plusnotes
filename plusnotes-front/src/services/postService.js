import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:3000",
  headers: {
    "Content-type": "application/json",
  },
});

export const getPosts = async () => {
  try {
    return await instance.get("/posts");
  } catch (error) {
    console.error("Error calling  API:", error);
    throw error;
  }
};

export const getPost = async (id) => {
  try {
    return await instance.get(`/posts/${id}`);
  } catch (error) {
    console.error("Error calling  API:", error);
    throw error;
  }
};
