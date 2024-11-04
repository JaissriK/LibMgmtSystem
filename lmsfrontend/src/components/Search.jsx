import { useState } from "react";
import styles from "./search.module.css";

export default function Search() {
  const [query, setQuery] = useState("");

  return (
    <div>
      <input
        className={styles.search}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        type="text"
        placeholder="Search a book"
      />
    </div>
  );
}
