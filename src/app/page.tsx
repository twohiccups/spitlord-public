import Navbar from "@components/Navbar";
// import styles from "@styles/page.module.css";
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
    <Navbar links={links} />
    </>
  );
}