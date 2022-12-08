import { Link } from "react-router-dom";

const AllTasksView = (props) => {
  // let {tasks, deleteTask} = props;
  let {tasks} = props;
  if (!tasks.length) {
    return (
    <div>
      <p>There are no tasks.</p>
      <Link to={`/newtask`}>
        <button>Add New Task</button>
      </Link>
    </div>
    );
  }
  console.log(tasks)
  return (
    <div>
      {tasks.map((task) => {
        let description = task.description;
        return (
          <div key={task.id}>
          <Link to={`/task/${task.id}`}>
            <h1>{description}</h1>
          </Link>
          {/* <button onClick={() => deleteTask(task.id)}>Delete</button> */}
          </div>
        );
      }
      )}
      {/* <Link to={`/newtask`}>
        <button>Add New Task</button>
      </Link> */}
    </div>
  );
};


export default AllTasksView;