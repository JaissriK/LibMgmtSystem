import { Link } from "react-router-dom";
import styles from "../list.module.css";
import { React, useEffect, useState } from "react";
import axios from "axios";

export default function Memberlist() {
  const [memberlist, setMemberlist] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/member/")
      .then((response) => setMemberlist(response.data.memberData))
      .catch((error) => console.error("Error fetching member data:", error));
  }, []);

  return (
    <div className={styles.layout}>
      <div className={styles.formLayout}>
        <h3 className={styles.titlePanel}>
          Members
          <Link to="/newmember">
            <button className={styles.addNewButton}>Add new member</button>
          </Link>
          <Link to="/" className={styles.backButton}>
            <h5>Back</h5>
          </Link>
        </h3>
        <div className={styles.tablediv}>
          <table className={styles.table}>
            <tr className={styles.tableheader}>
              <th>Member ID</th>
              <th>Member Name</th>
              <th>Email</th>
              <th>Phone</th>
            </tr>
            <tr></tr>
            {memberlist.map((mitem) => (
              <tr key={mitem._id}>
                <td>{mitem.memberid}</td>
                <td>{mitem.membername}</td>
                <td>{mitem.email}</td>
                <td>{mitem.phone}</td>
              </tr>
            ))}
          </table>
        </div>
      </div>
    </div>
  );
}
