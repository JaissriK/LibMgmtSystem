import { Link } from "react-router-dom";
import styles from "../add.module.css";

export default function AddMember() {
  return (
    <div className={styles.layout}>
      <div className={styles.formLayout}>
        <h3 className={styles.titlePanel}>
          New Member
          <Link to="/members" className={styles.backButton}>
            <h5>Back</h5>
          </Link>
        </h3>
        <form className={styles.form}>
          <label>Member ID</label>
          <input className={styles.ipField} type="text" />
          <label>Member Name</label>
          <input className={styles.ipField} type="text" />
          <label>Email</label>
          <input className={styles.ipField} type="email" />
          <label>Phone Number</label>
          <input className={styles.ipField} type="text" />
          <button className={styles.submitButton} type="submit">
            Add
          </button>
        </form>
      </div>
    </div>
  );
}
