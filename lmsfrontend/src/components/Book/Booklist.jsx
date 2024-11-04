import { Link, Outlet } from "react-router-dom";

export default function Booklist({ setTab }) {
  return (
    <div>
      <h3>Books</h3>
      <Link to="/newbook">
        <button>Add new book</button>
      </Link>
    </div>
  );
}
