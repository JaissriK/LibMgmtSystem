import { Link } from "react-router-dom";

export default function Memberlist() {
  return (
    <div>
      <h3>Members</h3>
      <Link to="/newmember">
        <button>Add new member</button>
      </Link>
    </div>
  );
}
