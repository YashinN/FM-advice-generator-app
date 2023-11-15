import styles from "./AdviceCard.module.css";
import diceIcon from "./svg/icon-dice.svg";
import dividerSvg from "./svg/pattern-divider-desktop.svg";

const AdviceCard = () => {
  return (
    <section className={styles.adviceCard}>
      <h1 className={styles.heading}>advice #117</h1>
      <blockquote className={styles.quote}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
        necessitatibus, ut reprehenderit amet dolorum autem accusamus
        repudiandae odit deserunt praesentium?
      </blockquote>

      <img className={styles.divider} src={dividerSvg} alt="" />
      <button className={styles.btn}>
        <img src={diceIcon} alt="Dice" />
      </button>
    </section>
  );
};

export default AdviceCard;
