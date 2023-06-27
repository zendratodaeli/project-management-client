import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";                     // <== IMPORT 
import { AuthContext } from "../context/auth.context";  // <== IMPORT

function NavBar() {
  const { isLoggedIn, user, logOutUser } = useContext(AuthContext);   // <== ADD

  return(
    <div>
      <NavLink to="/">
        <button>Home</button>
      </NavLink>

      {/*    UPDATE     */}
      {isLoggedIn && (
        <>
          <Link to="/projects">
            <button>Projects</button>
          </Link>
          <button onClick={logOutUser}>Logout</button>
          <span>{user && user.name}</span>
        </>
      )}

      {!isLoggedIn && (
        <>
          <Link to="/signup"> <button>Sign Up</button> </Link>
          <Link to="/login"> <button>Login</button> </Link>
        </>
      )}
    </div>
  )
}

export default NavBar;