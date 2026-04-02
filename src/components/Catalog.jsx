import React from 'react'
import styles from "../styles/Catalog.module.css"
import { food } from '../data'

const Catalog = () => {
  return (
    <div>
      <div className={styles.con}>
        <p>Popular Items</p>
        {/* <div><button></button> <button></button></div> */}
          {food.map((item) => (
            <div className={styles.food} key={item.id}>
              <img className={styles.img} src={item.image} alt="" />
              <p className={styles.name}>{item.name}</p>
              <p className={styles.place}>{item.place}</p>
              <p className={styles.price}>${item.price}</p>
              <button>Order Now</button>
            </div>
          ))}
      </div>
    </div>
  )
}

export default Catalog