import styles from "../stylesheets/navbar.module.css";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
      <div className={styles.container}>
        <Link key={"About"} to={"About"} className={styles.link}>
          {"About"}
        </Link>
      </div>
    </>
  );
};
