import styles from "../stylesheets/home.module.css";

export const Home = () => {
  return (
        <div className={styles.container}>
            <p className={ styles.fancy}>Төрсөн өдрийн мэнд<span className={ styles.heart}>♡</span></p>
            <p className={ styles.text}>Инээмсэглэж яваарай миний гүнж</p>
            <p className={ styles.date}>2023 ● 04 ● 22</p>
        </div>
  );
};
