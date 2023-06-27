// import axios from "axios";
// import { useEffect, useState } from "react";
// import { useNavigate, useParams } from "react-router-dom";

// const API_URL = "http://localhost:5005";

// function EditTaskPage(props) {

//   const[title, setTitle] = useState("")
//   const[description, setDescription] = useState("")

//   const { taskId } = useParams()
//   const navigate = useNavigate()

//   console.log(taskId, "tell me this");

//   useEffect(() => {
//       axios
//         .get(`${API_URL}/api/tasks/${taskId}`)
//         .then(response => {
//           const oneTask = response.data;
//           setTitle(oneTask.title);
//           setDescription(oneTask.description);

//           console.log(oneTask, "give me something");
//         })
//         .catch(e => console.log("failed to edit", e))
//   }, [taskId])
  
//   const handleFormSubmit = (e) => {
//     e.preventDefault();
//     const requestBody = { title, description };

//     axios
//       .put(`${API_URL}/api/tasks/${taskId}`, requestBody)
//       .then(response => {
//         navigate(`/tasks/${taskId}`)
//       })
//       .catch(e => console.log("failed to edit", e))
//   }

//   return(
//     <div className="EditProjectPage">
//       <h3>Edit the Task</h3>

//       <form onSubmit={handleFormSubmit}>
//           <label>Title:</label>
//           <input 
//             type="text"
//             name="title"
//             value={title}
//             onChange={e => setTitle(e.target.value)}
//           />

//           <label>Description:</label>
//           <input
//             type="text"
//             name="description"
//             value={description}
//             onChange={(e) => setDescription(e.target.value)}
//           />


//           <button type="submit">Update Task</button>
//       </form>
//     </div>
//   )
// };

// export default EditTaskPage;

import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const API_URL = "http://localhost:5005";

function EditTaskPage(props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const { taskId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${API_URL}/api/tasks/${taskId}`)
      .then(response => {
        const oneTask = response.data;
        setTitle(oneTask.title);
        setDescription(oneTask.description);
      })
      .catch(error => {
        console.log("Failed to fetch task:", error);
      });
  }, [taskId]);

  const handleFormSubmit = e => {
    e.preventDefault();
    const requestBody = { title, description };

    axios
      .put(`${API_URL}/api/tasks/${taskId}`, requestBody)
      .then(response => {
        navigate(`/tasks/${taskId}`);
      })
      .catch(error => {
        console.log("Failed to update task:", error);
      });
  };

  return (
    <div className="EditTaskPage">
      <h3>Edit the Task</h3>

      <form onSubmit={handleFormSubmit}>
        <label>Title:</label>
        <input
          type="text"
          name="title"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />

        <label>Description:</label>
        <input
          type="text"
          name="description"
          value={description}
          onChange={e => setDescription(e.target.value)}
        />

        <button type="submit">Update Task</button>
      </form>
    </div>
  );
}

export default EditTaskPage;
