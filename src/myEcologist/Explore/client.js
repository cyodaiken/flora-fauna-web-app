import axios from "axios";

const request = axios.create({
  withCredentials: true,
});

const USER_URL = "http://localhost:4000/project/users";
const EXPLORE_URL = "http://localhost:4000/project/explore";

export const fetchExplores = async () => {
  const response = await request.get(`${EXPLORE_URL}`);
  return response.data;
};

export const fetchExplore = async (id) => {
  const response = await request.get(`${EXPLORE_URL}/${id}`);
  console.log(response.data);
  return response.data;
};

export const addNewExplore = async (explore) => {
  const response = await request.post(`${EXPLORE_URL}`, explore);
  return response.data;
};

export const deleteExplore = async (id) => {
  const response = await request.delete(`${EXPLORE_URL}/${id}`);
  return response.data;
};

export const updateExplore = async (id, explore) => {
  const response = await request.put(`${EXPLORE_URL}/${id}`, explore);
  return response.data;
};
