import ACTION_TYPES from "../actions/actionTypes";

const initialState = {
  students: [],
  isFetching: false,
  error: null,
  page: 1,
};

function studentsReducer(state = initialState, action) {
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
      const { data } = action;
      return {
        ...state,
        students: data,
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
    case ACTION_TYPES.PAGE_INCREMENT: {
      const { page, students } = state;
      if (students.length < 20) {
        return {
          ...state,
        };
      }
      return {
        ...state,
        page: page + 1,
      };
    }
    case ACTION_TYPES.PAGE_DECREMENT: {
      const { page } = state;
      if (page === 1) {
        return {
          ...state,
          page: 1,
        };
      }
      return {
        ...state,
        page: page - 1,
      };
    }

    default: {
      return state;
    }
  }
}

export default studentsReducer;
