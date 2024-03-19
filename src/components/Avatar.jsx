import styles from "./Avatar.module.css";
import PropTypes from "prop-types";

export function Avatar({ src, semBordas = false }) {
  const classes = [styles.avatar];

  if (semBordas) {
    classes.push(styles.semBordas);
  }

  return (
    <div className={classes.join(" ")} >
      <img src={src} alt="Avatar" />
    </div>
  );
}

Avatar.propTypes = {
  src: PropTypes.string.isRequired,
  semBordas: PropTypes.bool,
};
