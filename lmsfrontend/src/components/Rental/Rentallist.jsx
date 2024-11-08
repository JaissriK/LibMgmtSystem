import { Link } from "react-router-dom";
import styles from "../list.module.css";
import { React, useEffect, useState } from "react";
import axios from "axios";
import dateFormat from "dateformat";

export default function Rentallist() {
  const [rentallist, setRentallist] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/rental/")
      .then((response) => setRentallist(response.data.rentalData))
      .catch((error) => console.error("Error fetching rental data:", error));
  }, []);

  return (
    <div className={styles.layout}>
      <div className={styles.formLayout}>
        <h3 className={styles.titlePanel}>
          Rentals
          <Link to="/newrental">
            <button className={styles.addNewButton}>Add new rental</button>
          </Link>
          <Link to="/" className={styles.backButton}>
            <h5>Cancel</h5>
          </Link>
        </h3>
        <div className={styles.tablediv}>
          <table className={styles.table}>
            <tr className={styles.tableheader}>
              <th>Rental ID</th>
              <th>Member ID</th>
              <th>Book ID</th>
              <th>Rent Start</th>
              <th>Rent End</th>
              <th>Returned?</th>
              <th>Modify</th>
              <th>Delete</th>
            </tr>
            <tr></tr>
            {rentallist.map((ritem) => (
              <tr key={ritem._id}>
                <td>{ritem.rentalid}</td>
                <td>{ritem.memberid}</td>
                <td>{ritem.bookid}</td>
                <td>{dateFormat(ritem.rentstart, "dd/mm/yyyy")}</td>
                <td>{dateFormat(ritem.rentend, "dd/mm/yyyy")}</td>
                <td>{ritem.rentreturn.toString()}</td>
                <td>
                  <button className={styles.removeButton} type="button">
                    Edit
                  </button>
                </td>
                <td>
                  <button className={styles.removeButton} type="button">
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </table>
        </div>
      </div>
    </div>
  );
}
