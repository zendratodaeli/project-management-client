import { Link } from "react-router-dom";

function TaskCard({ title, description, _id }) {

  return (
    <div className="TaskCard card">
      <h3>{title}</h3>
      <h4>Description:</h4>
      <p>{description}</p>
      <Link to={`/tasks/edit/${_id}`}>
        <button>Update Task</button>
      </Link>

      <Link>
        <button>Delete Task</button>
      </Link>
    </div>
  );
}

export default TaskCard;
