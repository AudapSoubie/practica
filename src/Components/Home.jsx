import React from 'react'
import Card from './Card';
import styles from "./Home.module.css"
 
const Home = () => {
    const Pizzas = [
        {
          id: 1,
          tipo: 'Pepperoni',
          precio: 12.99,
          imagen:"https:img.freepik.com/fotos-premium/rebanada-pizza-pepperoni-italiana-tradicional-salsa-tomate-rucula_285885-2420.jpg?w=740"
        },
        {
          id: 2,
          tipo: 'Margarita',
          precio: 10.50,
          imagen:'https://img.freepik.com/foto-gratis/pepperoni-rodajas-finas-es-aderezo-pizza-popular-pizzerias-estilo-americano-aislado-sobre-fondo-blanco-naturaleza-muerta_639032-229.jpg?w=740&t=st=1691280474~exp=1691281074~hmac=263d108dfa8c24bd5d0f11f51ba79c593f50bfbb94dcd9927f802a3a6bede869'
        },
        
        {
          id: 3,
          tipo: 'Hawaiana',
          precio: 11.75,
          imagen: 'https://img.freepik.com/foto-gratis/pepperoni-rodajas-finas-es-aderezo-pizza-popular-pizzerias-estilo-americano-aislado-sobre-fondo-blanco-naturaleza-muerta_639032-229.jpg?w=740&t=st=1691280474~exp=1691281074~hmac=263d108dfa8c24bd5d0f11f51ba79c593f50bfbb94dcd9927f802a3a6bede869'
        
        },
    
      ];    
    return (
    <div className={styles.home}>
      {Pizzas.map(pizza => {
        return <Card pizza={pizza} key ={pizza.id}/>
      })}
    </div>
  )
}

export default Home
