import axios from "axios";

const apiInstance = axios.create({
  baseURL: "http://localhost:3000/api",
});

export const createStudent = (data) => apiInstance.post("/students", data);
export const getStudents = (params) =>
  apiInstance.get(`/students?page=${params.page}&results=${params.results}`);
