import axios from "axios";
const EXPLORE_URL = "http://localhost:4000/project/explore";
const FOLLOW_URL = "http://localhost:4000/project";
const USER_URL = "http://localhost:4000/project/users";

const request = axios.create({
  withCredentials: true,
  //   baseURL: "http://localhost:4000/project",
});

export const fetchExplores = async () => {
  const response = await axios.get(`${EXPLORE_URL}`);
  return response.data;
};

export const fetchExplore = async (id) => {
  const response = await axios.get(`${EXPLORE_URL}/${id}`);
  console.log(response.data);
  return response.data;
};

export const addNewExplore = async (explore) => {
  const response = await axios.post(`${EXPLORE_URL}`, explore);
  return response.data;
};

export const deleteExplore = async (id) => {
  const response = await axios.delete(`${EXPLORE_URL}/${id}`);
  return response.data;
};

export const updateExplore = async (id, explore) => {
  const response = await axios.put(`${EXPLORE_URL}/${id}`, explore);
  return response.data;
};

export const userFollowPost = async (postid) => {
  const response = await request.post(`${FOLLOW_URL}/follows/${postid}`);
  return response.data;
};

export const userUnfollowPost = async (postid) => {
  const response = await request.delete(`${FOLLOW_URL}/unfollows/${postid}`);
  return response.data;
};

export const findFollowersByPost = async (postid) => {
  const response = await request.get(`${FOLLOW_URL}/followers/${postid}`);
  return response.data;
};

export const account = async () => {
  const response = await request.post(`${USER_URL}/account`);
  return response.data;
};
