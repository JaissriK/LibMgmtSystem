import { Link } from "react-router-dom";
import styles from "../list.module.css";
import { React, useEffect, useState } from "react";
import axios from "axios";

export default function Booklist() {
  const [booklist, setBooklist] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/book/")
      .then((response) => setBooklist(response.data.bookData))
      .catch((error) => console.error("Error fetching book data:", error));
  }, []);

  //console.log(booklist, setBooklist);

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
        <div className={styles.tablediv}>
          <table className={styles.table}>
            <tr className={styles.tableheader}>
              <th>Book ID</th>
              <th>Book Title</th>
              <th>Author</th>
              <th>Copies</th>
            </tr>
            <tr></tr>
            {booklist.map((item) => (
              <tr key={item._id}>
                <td>{item.bookid}</td>
                <td>{item.bookname}</td>
                <td>{item.authorname}</td>
                <td>{item.copies}</td>
              </tr>
            ))}
          </table>
        </div>
      </div>
    </div>
  );
}
