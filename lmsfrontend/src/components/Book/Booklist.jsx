import { Link } from "react-router-dom";
import styles from "../list.module.css";
import { React, useEffect, useState } from "react";
import axios from "axios";

export default function Booklist() {
  const [booklist, setBooklist] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/book/")
      .then((response) => setBooklist(response.data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className={styles.layout}>
      <div className={styles.formLayout}>
        <h3 className={styles.titlePanel}>
          Books
          <Link to="/newbook">
            <button className={styles.addNewButton}>Add new book</button>
          </Link>
          <Link to="/" className={styles.backButton}>
            <h5>Back</h5>
          </Link>
        </h3>
        <div>
          {booklist.map((item) => (
            <div key={item.id}>
              {item.bookname} {item.authorname} {item.copies}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
