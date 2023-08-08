import React from 'react'

const Navbar = () => {
    const titulo = ["Home","Contacto","Shop", "Acerca de    "]

  return (
    <div>
   {titulo.map((elemento,indice) => {
    return <h4 style = {{color: "red", backgroundColor: "grey" }}key = {indice} > {elemento}</h4>
   })}
    </div>
  )
}

export default Navbar
