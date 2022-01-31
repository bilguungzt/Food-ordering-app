import Image from "next/image";
import styles from "../styles/BurgerList.module.css";

const PizzaCard = () => {
  return (
    <div className={styles.container}>
      <Image src="/img/burger.png" alt="" width="400" height="500" />
      <h1 className={styles.title}>Cheese Burger</h1>
      <span className={styles.price}>$12</span>
      <p className={styles.desc}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>
    </div>
  );
};

export default PizzaCard;