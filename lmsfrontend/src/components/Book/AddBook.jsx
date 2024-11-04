import { useState } from "react";
import Booklist from "./Booklist";

export default function AddBook() {
  const [addbook, setAddbook] = useState("");
  const [addbooks, setAddbooks] = useState([]);
  function handleSubmit(e) {
    e.preventDefault();
    setAddbooks([...addbooks, addbook]);
    setAddbook("");
  }

  return (
    <div>
      <h3>Addbook</h3>
      <form onSubmit={handleSubmit}>
        <input
          onChange={(e) => setAddbook(e.target.value)}
          value={addbook}
          type="text"
        />
        <button type="submit">Add</button>
      </form>

      {addbooks.map((item) => (
        <Booklist key={item} item={item} />
      ))}
    </div>
  );
}
