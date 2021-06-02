import  "./App.module.css";
import StudentForm from "./components/StudentForm";
import StudentList from "./components/StudentsList";
import {
  BrowserRouter as Router,
  NavLink,
  Route,
  Switch,
} from "react-router-dom";

function Home() {
  return <h2>Main page</h2>;
}
function About() {
  return <h2>About page</h2>;
}

function NotFound() {
  return <h2>Resource not found</h2>;
}

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <NavLink
              exact
              to="/"
              activeStyle={{ color: "green", fontWeight: "bold" }}
            >
              Main
            </NavLink>
          </li>
          <li>
            <NavLink
              exact
              to="/students"
              activeStyle={{ color: "green", fontWeight: "bold" }}
            >
              List of students
            </NavLink>
          </li>
          <li>
            <NavLink
              exact
              to="/students/create"
              activeStyle={{ color: "green", fontWeight: "bold" }}
            >
              Create a student
            </NavLink>
          </li>
          <li>
            <NavLink
              exact
              to="/about"
              activeStyle={{ color: "green", fontWeight: "bold" }}
            >
              About
            </NavLink>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/students" component={StudentList} />
        <Route exact path="/students/create" component={StudentForm} />
        <Route exact path="/about" component={About} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
