import { NavLink } from "react-router-dom";
import "../App.css";

export default function Header(props) {
  return (
    <>
      <div className="presentCrud">
        <li>
          <NavLink to="/">Create</NavLink>
        </li>
        <li>
          <NavLink to="/Read">Read</NavLink>
        </li>
        <li>
          <NavLink to="/Update">Update</NavLink>
        </li>
        <li>
          <NavLink to="/Delete">Delete</NavLink>
        </li>
      </div>
    </>
  );
}
