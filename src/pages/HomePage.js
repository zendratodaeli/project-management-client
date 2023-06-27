import { NavLink } from "react-router-dom";

function HomePage() {
  return(
    <div>
      <h1>Hello</h1>
      <NavLink to="/projects">Project List</NavLink>
    </div>
  )
}

export default HomePage;