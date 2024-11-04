import { useState } from "react";
import styles from "./home.module.css";

const today = new Date();

export default function Home() {
  const [date, setDate] = useState(new Date());

  return (
    <div className={styles.home}>
      Welcome! Good day!
      <br />
      {date.toDateString()}
    </div>
  );
}
