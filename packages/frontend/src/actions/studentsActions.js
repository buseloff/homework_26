import ACTION_TYPES from "./actionTypes";

const createStudent = (data) => ({
  type: ACTION_TYPES.CREATE_STUDENT,
  data,
});

const createStudentRequest = () => ({
  type: ACTION_TYPES.CREATE_STUDENT_REQUEST,
});

const createStudentSuccess = (student) => ({
  type: ACTION_TYPES.CREATE_STUDENT_SUCCESS,
  student,
});

const createStudentError = (error) => ({
  type: ACTION_TYPES.CREATE_STUDENT_ERROR,
  error,
});

const getStudents = (params) => ({
  type: ACTION_TYPES.GET_STUDENTS,
  params,
});

const getStudentsRequest = () => ({
  type: ACTION_TYPES.GET_STUDENTS_REQUEST,
});

const getStudentsSuccess = (data) => ({
  type: ACTION_TYPES.GET_STUDENTS_SUCCESS,
  data,
});

const getStudentsError = (error) => ({
  type: ACTION_TYPES.GET_STUDENTS_ERROR,
  error,
});

const pageIncrement = () => ({
  type: ACTION_TYPES.PAGE_INCREMENT,
});

const pageDecrement = () => ({
  type: ACTION_TYPES.PAGE_DECREMENT,
});

export default {
  createStudent,
  createStudentRequest,
  createStudentSuccess,
  createStudentError,
  getStudents,
  getStudentsRequest,
  getStudentsSuccess,
  getStudentsError,
  pageDecrement,
  pageIncrement,
};
