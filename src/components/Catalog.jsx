import { food } from '../data'
import styles from "../styles/Catalog.module.css"

const Catalog = () => {
  return (
    <div className={styles.main}>
      <h2 className={styles.header}>Popular items</h2>
      <div className={styles.con}>
        {food.map((item) => (
          <div key={item.id} className={styles.food}>
            <img className={styles.img} src={item.image} alt="" />
            <h1 className={styles.name}>{item.name}</h1>
            <h3 className={styles.brand}>📍 {item.place}</h3>
            <p className={styles.price}>${item.price}</p>
            <button className={styles.orderBtn}>Order Now</button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Catalog