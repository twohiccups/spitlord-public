"use client";
import styles from '@styles/Announcement.module.css';
import { AnnouncementProps } from 'src/types';
import zalgo from '../utils';
import { useEffect, useState } from 'react';


const Announcement = ({ text }: AnnouncementProps) => {

  const [zalgoText, setText] = useState(text);

  useEffect(() => {
    setText(zalgo(text));
  }, [])
  

  return (
    <div className={styles.tvBox}>
      <div className={styles.glitchContainer}>
        <div className={styles.glitch} data-text={text}>
          {zalgoText}
          <div className={styles.smpteOverlay}></div>
        </div>
      </div>
      <div className={styles.staticLines}></div>
    </div>
  );
};

export default Announcement;
