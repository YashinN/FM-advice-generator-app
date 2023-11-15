import styles from "./AdviceCard.module.css";

const AdviceCard = () => {
  return (
    <section className={styles.adviceCard}>
      <h1 className={styles.heading}>advice</h1>
      <blockquote className={styles.quote}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
        necessitatibus, ut reprehenderit amet dolorum autem accusamus
        repudiandae odit deserunt praesentium?
      </blockquote>
      <button className={styles.btn}>Btn</button>
    </section>
  );
};

export default AdviceCard;
