import Announcement from "@components/Announcement";
import Navbar from "@components/Navbar";
import styles from "@styles/Home.module.css";
import { NavLink } from "src/types";

export default function Home() {

    const links : NavLink[] =[ 
      {
      label: "fog",
      href: "/fog"
      },
      {
        label: "entitydump",
        href: "/entitydump"
      },
      {
        label: "projects",
        href: "/projects"
      },
      {
        label: "stuff",
        href: "/stuff"
      },
    ]
  
  return (
    <>
    <div className={styles.pageContainer}>
    <Announcement text="All thoughts are unpleasant."/>
    <Navbar links={links} />
    </div>
    </>
  );
}