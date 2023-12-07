import axios from "axios";
const USER_URL = "http://localhost:4000/project/users";

export const fetchUsers = async () => {
  const response = await axios.get(`${USER_URL}`);
  // console.log(response.data);
  return response.data;
};
export const fetchUser = async (id) => {
  const response = await axios.get(`${USER_URL}/${id}`);
  return response.data;
};
export const addNewUser = async (user) => {
  const response = await axios.post(`${USER_URL}`, user);
  return response.data;
};
export const deleteUser = async (id) => {
  const response = await axios.delete(`${USER_URL}/${id}`);
  return response.data;
};
export const updateUser = async (id, user) => {
  const response = await axios.put(`${USER_URL}/${id}`, user);
  return response.data;
};
// export const account = async () => {
//   const response = await request.post(`${USER_URL}/account`);
//   return response.data;
// };
