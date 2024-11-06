import { Link } from "react-router-dom";
import styles from "../list.module.css";

export default function Memberlist() {
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
      </div>
    </div>
  );
}
