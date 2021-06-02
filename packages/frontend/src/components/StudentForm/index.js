import React, { useRef } from "react";
import { connect } from "react-redux";
import { createStudent } from "./../../api/index";
import styles from "./StudentForm.module.css";

import actions from "./../../actions/studentsActions";

function StudentForm(props) {
  const { createStudentRequest, createStudentSuccess, createStudentError } =
    props;
  const name = useRef(null);
  const surname = useRef(null);
  const age = useRef(null);
  const email = useRef(null);
  const group_id = useRef(null);

  const send = () => {
    createStudentRequest();
    createStudent({
      name: name.current.value,
      surname: surname.current.value,
      age: age.current.value,
      email: email.current.value,
      id_group: group_id.current.value,
    })
      .then((student) => createStudentSuccess(student))
      .catch((err) => createStudentError(err));
    console.log(name.current.value);
    const { isFetching, error } = props;

    if (error) {
      return <div className={styles.error}>Error!!!</div>;
    }
    if (isFetching) {
      return <div className={styles.fetching}>LOAD...</div>;
    }
    window.alert("Student created!");
  };

  return (
    <div className={styles.wrapper}>
      <h1>Create a student</h1>
      <label>Name</label>
      <br />
      <input ref={name} type="text" required />
      <br />
      <br />
      <label>Surname</label>
      <br />
      <input ref={surname} type="text" required />
      <br />
      <br />
      <label>Age</label>
      <br />
      <input ref={age} type="number" min="5" max="100" required />
      <br />
      <br />
      <label>E-mail</label>
      <br />
      <input ref={email} type="email" size="20" required />
      <br />
      <br />
      <label>Id_group</label>
      <br />
      <input ref={group_id} type="number" min="1" max="50" required />
      <br />
      <br />
      <button onClick={send}>Send</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  const { studentsState } = state;
  return studentsState;
};
export default connect(mapStateToProps, actions)(StudentForm);
