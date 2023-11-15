import styles from "./AdviceCard.module.css";
import diceIcon from "./svg/icon-dice.svg";
import dividerSvg from "./svg/pattern-divider-desktop.svg";

const AdviceCard = ({ quote }) => {
  return (
    <section className={styles.adviceCard}>
      <h1 className={styles.heading}>advice #{quote?.id}</h1>
      <blockquote className={styles.quote}>{quote?.advice}</blockquote>

      <img className={styles.divider} src={dividerSvg} alt="" />
      <button className={styles.btn}>
        <img src={diceIcon} alt="Dice" />
      </button>
    </section>
  );
};

export default AdviceCard;
