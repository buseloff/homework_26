import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getStudents } from "./../../api/index";
import actions from "./../../actions/studentsActions";
import styles from "./StudentList.module.css";

function StudentItem(props) {
  const {
    student: { id, name, surname, age, email, id_group },
  } = props;
  return (
    <li className={styles.listItem}>
      {`Id:${id}, name: ${name}, surname: ${surname}, age: ${age}, e-mail: ${email},
      id_group: ${id_group}`}
    </li>
  );
  /* <NavLink exact to={`/students/edit/${id}`} activeStyle={styles.active}>
        Edit
      </NavLink>
      |
      <form
        action={`http://localhost:3000/students/delete/${id}`}
        method="POST"
        style="display:inline;"
      >
        <input type="submit" value="Delete" className={styles.btn} />
      </form> */
}

function StudentList(props) {
  const {
    isFetching,
    students,
    error,
    page,
    getStudentsRequest,
    getStudentsSuccess,
    getStudentsError,
    pageDecrement,
    pageIncrement,
  } = props;
  const loadUsers = () => {
    getStudentsRequest();
    getStudents({ page: page, results: 20 })
      //.then((response) => response.json())
      .then(({ data }) => getStudentsSuccess(data.data))
      .catch((err) => getStudentsError(err));
  };
  useEffect(() => {
    loadUsers();
  }, [page]);

  console.log(students);
  if (error) {
    return <div className={styles.error}>Error!!!</div>;
  }
  if (isFetching) {
    return <div className={styles.fetching}>LOAD...</div>;
  }

  return (
    <div>
      <h2>List of students</h2>
      <ul>
        {students.map(function (item) {
          return <StudentItem key={item.id} student={item} />;
        })}
      </ul>
      <div className={styles.paginator}>
        <button onClick={pageDecrement}>-</button>
        <button onClick={pageIncrement}>+</button>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  const { studentsState } = state;
  return studentsState;
};
/*
const mapDispatchToProps = (dispatch) => {
  return {
    getUsersRequest: () => dispatch({ type: ACTION_TYPES.GET_USERS_REQUEST }),
    getUsersSuccess: (data) =>
      dispatch({ type: ACTION_TYPES.GET_USERS_SUCCESS, users: data }),
    getUsersError: (error) =>
      dispatch({ type: ACTION_TYPES.GET_USERS_ERROR, error }),
  };
};*/
export default connect(mapStateToProps, actions)(StudentList);
