import styles from "./Sidebar.module.css";
import cover01 from "../assets/img/cover01.png";
import { PencilLine } from "@phosphor-icons/react";
import { Avatar } from "./Avatar";

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img className={styles.cover} src={cover01} alt="Cover" title="Cover" />

      <div className={styles.profile}>
        <Avatar src="https://github.com/charlesbatista.png" />
        <b>Charles Batista</b>
        <span>Web Developer</span>
      </div>

      <footer>
        <a href="#"><PencilLine size={20} /> Editar seu perfil</a>
      </footer>
    </aside>
  );
}
