// HomePage에 보여질 실제 UI 컴포넌트입니다.
// 스타일은 home.module.scss를 사용합니다.

import styles from "./home.module.scss";

export default function HomeComponent() {
  return (
    <section className={styles.homeContainer}>
      <h1 className={styles.title}>홈 페이지에 오신 것을 환영합니다!</h1>
      <p className={styles.description}>이 곳은 메인 홈 페이지입니다.</p>
    </section>
  );
}