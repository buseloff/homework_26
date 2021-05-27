import ACTION_TYPES from "../actions/types";

const initialState = {
  students: [],
  isFetching: false,
  error: null,
};

function studentsreducer(state = initialState, action) {
  const { type } = action;
  switch (type) {
    case ACTION_TYPES.GET_STUDENTS_REQUEST:
    case ACTION_TYPES.CREATE_STUDENT_REQUEST: {
      return {
        ...state,
        isFetching: true,
        error: false,
      };
    }
    case ACTION_TYPES.CREATE_STUDENT_SUCCESS: {
      const { student } = action;
      const { students } = state;
      return {
        ...state,
        students: [...students, student],
        error: false,
      };
    }
    case ACTION_TYPES.GET_STUDENTS_SUCCESS: {
      const { students } = action;
      return {
        ...state,
        students: students,
        isFetching: false,
        error: false,
      };
    }
    case ACTION_TYPES.CREATE_STUDENT_ERROR:
    case ACTION_TYPES.GET_STUDENTS_ERROR: {
      const { error } = action;
      return {
        ...state,

        isFetching: false,
        error,
      };
    }
    default: {
      return state;
    }
  }
}

export default studentsreducer;
