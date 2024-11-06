import { Link } from "react-router-dom";
import styles from "../add.module.css";

export default function AddRentals() {
  return (
    <div className={styles.layout}>
      <div className={styles.formLayout}>
        <h3 className={styles.titlePanel}>
          New Rental
          <Link to="/rentals" className={styles.backButton}>
            <h5>Back</h5>
          </Link>
        </h3>
        <form className={styles.form}>
          <label>Rental ID</label>
          <input className={styles.ipField} type="text" />
          <label>Book Name</label>
          <input className={styles.ipField} type="text" />
          <label>Member Name</label>
          <input className={styles.ipField} type="text" />
          <label>Rental Date</label>
          <input className={styles.ipField} type="date" />
          <label>Rental Period</label>
          <input className={styles.ipField} type="date" />
          <button className={styles.submitButton} type="submit">
            Add
          </button>
        </form>
      </div>
    </div>
  );
}
