import React from 'react'
import styles from "../styles/Catalog.module.css"

const Catalog = () => {
  const data=[
  {
   img:"https://url-shortener.me/JCGY",
   title:"Cheese Burger",
   karta:"Burger Arena",
   price:"$3,88",
  },
  {
    img:"https://url-shortener.me/JCGY",
    title:"Toffe's Cake",
    karta:"Top Stics",
    price:"$4.00",
  },
  {
    img:"https://url-shortener.me/JCGY",
    title:"Dancake",
    karta:"Cake World",
    price:"$1.99",
  },
   {
    img:"https://url-shortener.me/JCGY",
    title:"Dancake",
    karta:"Cake World",
    price:"$1.99",
  },
   {
    img:"https://url-shortener.me/JCGY",
    title:"Dancake",
    karta:"Cake World",
    price:"$1.99",
  }
]
 return (
  <div className={styles.bigFather}>
    <h1 className={styles.item}>Popular items</h1>
    {data.map((item, index) => (
      <div className={styles.father} key={index}>
        <img className={styles.img} src={item.img} alt={item.title} />
        <h1 className={styles.h1}>{item.title}</h1>
        <h2 className={styles.h2}>{item.karta}</h2>
        <h3 className={styles.h3}>{item.price}</h3>
        <button className={styles.button}>Order Now</button>
      </div>
    ))}
  </div>
);
}

export default Catalog

