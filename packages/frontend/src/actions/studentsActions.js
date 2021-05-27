import ACTION_TYPES from "./types";

export const createStudent = (data) => ({
  type: ACTION_TYPES.CREATE_STUDENT,
  data,
});

export const createStudentRequest = () => ({
  type: ACTION_TYPES.CREATE_STUDENT_REQUEST,
});

export const createStudentSuccess = (hero) => ({
  type: ACTION_TYPES.CREATE_STUDENT_SUCCESS,
  hero,
});

export const createStudentError = (error) => ({
  type: ACTION_TYPES.CREATE_STUDENT_ERROR,
  error,
});

export const getStudents = (params) => ({
  type: ACTION_TYPES.GET_STUDENTS,
  params,
});

export const getStudentsRequest = () => ({
  type: ACTION_TYPES.GET_STUDENTS_REQUEST,
});

export const getStudentsSuccess = (heroes) => ({
  type: ACTION_TYPES.GET_STUDENTS_SUCCESS,
  heroes,
});

export const getStudentsError = (error) => ({
  type: ACTION_TYPES.GET_STUDENTS_ERROR,
  error,
});
