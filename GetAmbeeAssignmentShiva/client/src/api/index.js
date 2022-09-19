import axios from "axios";
const url = "http://localhost:5000/post";

export const fetchData = () => axios.get(url);
export const postData = (newPost) => axios.post(url, newPost);
