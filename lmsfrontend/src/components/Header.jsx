import styles from "./header.module.css";

export default function Header({ setTab }) {
  return (
    <div className={styles.header}>
      <span onClick={() => setTab("home")} className={styles.logo}>
        JK Library
      </span>
      <div className={styles.navItems}>
        <button
          onClick={() => setTab("books")}
          className={styles.navButton}
          type="button"
        >
          Books
        </button>
        <button
          onClick={() => setTab("rentals")}
          className={styles.navButton}
          type="button"
        >
          Rentals
        </button>
        <button
          onClick={() => setTab("members")}
          className={styles.navButton}
          type="button"
        >
          Members
        </button>
      </div>
    </div>
  );
}
