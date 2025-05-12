'use client';

import styles from './home.module.scss';

export default function HomeComponent() {
  return (
    <main className={styles.inner}>
      {/* title - 가장 많이 읽은 글 */}
      <div className={styles.main_header}>
        <h2><span className={styles.ico_fire}></span>가장 많이 읽은 글</h2>
        <div className={styles.date_list}>
          <select name="date" id="date-select">
            <option value="week">일주일</option>
          </select>
        </div>
      </div>

      {/* card */}
      <ul className={`${styles.card_container} ${styles.issue_card_container}`}>
        <li className={styles.card_list}>
          <a href="#" className={styles.card}>
            <div className={styles.card_box_top}>
              <img src="/images/sample.png" alt="sample" />
              <p className={styles.card_box_label}><span>NEW</span></p>
            </div>
            <div className={styles.card_box_bottom}>
              <h3 className={styles.card_box_title}>
                Excited to share my latest tech project! #codinglife
              </h3>
              <div className={styles.card_box_lang}>
                <span><small>JAVA</small></span>
                <span><small>SCSS</small></span>
              </div>
              <div className={styles.box_bottom_fix}>
                <div className={styles.card_box_writer}>
                  <i className={styles.writer_img}></i><b>현대자동차</b>
                </div>
                <div className={styles.card_box_info}>
                  <div><i className={styles.ico_eyes}></i><span>100</span></div>
                  <div><i className={styles.ico_calender}></i><span>2023.11.06</span></div>
                </div>
              </div>
            </div>
          </a>
        </li>
      </ul>

      {/* title - 새로운 기술을 확인해보세요 */}
      <div className={styles.main_header}>
        <h2><span className={styles.ico_face}></span>새로운 기술을 확인해보세요.</h2>
      </div>

      <div className={styles.filter_area}>
        {/* 검색 및 초기화 */}
        <div className={styles.filter_area_top}>
          <form method="get" action="/search" role="search">
            <input type="search" placeholder="원하는 키워드를 검색해주세요." />
            <button type="submit"><i className={styles.ico_search}></i></button>
          </form>
          <button type="button" className={styles.reset_btn} id="reset_btn">초기화</button>
        </div>

        {/* 필터링 버튼 모음 */}
        <div className={styles.filter_area_bottom}>
          <ul>
            <li>
              <span className={styles.subject_txt}>스킬</span>
              <button className={styles.active} type="button">JAVA</button>
              <button type="button">SPRING</button>
              <button type="button">NEXT.JS</button>
              <button type="button">REACT</button>
              <button type="button">JAVASCRIPT</button>
              <button type="button">NODE.JS</button>
              <button type="button">TYPESCRIPT</button>
              <button type="button">기타</button>
            </li>
            <li>
              <span className={styles.subject_txt}>분야</span>
              <button type="button">AI</button>
              <button type="button">Back</button>
              <button type="button">Front</button>
              <button type="button">Dev Ops</button>
              <button type="button">DB</button>
              <button type="button">Mobile</button>
              <button type="button">Collab Tool</button>
              <button type="button">기타</button>
            </li>
          </ul>
        </div>
      </div>

      {/* 필터링 된 카드 모음 */}
      <ul className={styles.all_card_container}>
        <li>
          <a href="#" className={styles.card}>
            <div className={styles.card_box_top}>
              <img src="/images/sample.png" alt="sample" />
              <p className={styles.card_box_label}><span>NEW</span></p>
            </div>
            <div className={styles.card_box_bottom}>
              <h3 className={styles.card_box_title}>Excited to share my latest tech project! #codinglife</h3>
              <div className={styles.card_box_lang}>
                <span><small>JAVA</small></span>
                <span><small>SCSS</small></span>
              </div>
              <div className={styles.box_bottom_fix}>
                <div className={styles.card_box_writer}>
                  <i className={styles.writer_img}></i><b>현대자동차</b>
                </div>
                <div className={styles.card_box_info}>
                  <div><i className={styles.ico_eyes}></i><span>100</span></div>
                  <div><i className={styles.ico_calender}></i><span>2023.11.06</span></div>
                </div>
              </div>
            </div>
          </a>
        </li>
      </ul>

      {/* 페이지네이션 */}
      <div className={styles.pagination_area}>
        <ul>
          <li><i className={styles.ico_double_prev}></i></li>
          <li><i className={styles.ico_prev}></i></li>
          <li className={styles.active}><span>1</span></li>
          <li><span>2</span></li>
          <li><span>3</span></li>
          <li><span>4</span></li>
          <li><span>5</span></li>
          <li><i className={styles.ico_next}></i></li>
          <li><i className={styles.ico_double_next}></i></li>
        </ul>
      </div>

      {/* 고정 user 상태값 */}
      <div className={styles.user_state}>
        <div className={styles.state_logout}>
          <a href="#"><i className={styles.ico_logout}></i><span>로그아웃</span></a>
        </div>
        <div className={styles.state_mypage}>
          <a href="#"><i className={styles.ico_mypage}></i><span>마이페이지</span></a>
        </div>
      </div>
    </main>
  );
};
