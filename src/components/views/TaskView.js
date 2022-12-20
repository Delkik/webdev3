import { Link } from "react-router-dom";

const TaskView = (props) => {
  const { task } = props;
  return (
    <div>
      <Link to={`/tasks`}>
        <button>See All Tasks</button>
      </Link>
      <h1>{task.description}</h1>
      <h2>Priority: {task.priority || -1}, Status: {task.completion || "Not Started"}</h2>
      {task.employee ? <Link to={`/employee/${task.employeeId}`}><h3>{task.employee.first + " " + task.employee.last}</h3></Link>: <h3>Unassigned</h3>}
      <Link to={`/edittask/${task.id}`}>Edit task information</Link>
      <br/>
      <Link to={`/tasks`}>View all tasks</Link>
    </div>
  );

};

export default TaskView;