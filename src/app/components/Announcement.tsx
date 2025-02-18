"use client";
import styles from '@styles/Announcement.module.css';
import { AnnouncementProps } from 'src/types';


const Announcement = ({ text }: AnnouncementProps) => {
  return (
    <div className={styles.tvBox}>
      <div className={styles.glitchContainer}>
        <div className={styles.glitch} data-text={text}>
          {text}
          <div className={styles.smpteOverlay}></div>
        </div>
      </div>
      <div className={styles.staticLines}></div>
    </div>
  );
};

export default Announcement;
