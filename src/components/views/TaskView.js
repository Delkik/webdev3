import { Link } from "react-router-dom";

const TaskView = (props) => {
  const { task } = props;
  console.log(task.employee)
  return (
    <div>
      <h1>{task.description}</h1>
      {task.employee ? <h3>{task.employee.first + " " + task.employee.last}</h3>: <h3>staff</h3>}
      {/* <Link to={`/edittask/${task.id}`}>Edit task information</Link> */}
      <br/>
      <Link to={`/tasks`}>View all tasks</Link>
    </div>
  );

};

export default TaskView;