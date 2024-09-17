import React from 'react'
import "./ItemDetail.css"
import Contador from '../Contador/Contador'
import { useState } from 'react'
import { Link } from 'react-router-dom'


const ItemDetail = ({id, nombre, precio, img, stock}) => {
 
  const [agregarCantidad, setAgregarCantidad] = useState(0)

 

  const manejadorCantidad = (cantidad) => {
    setAgregarCantidad(cantidad);
    console.log("Productos agregador:" + cantidad)
  }

  return (
    <div className='contenedorItem'>
        <h2>Nombre: {nombre} </h2>
        <h3>Precio {precio} </h3>
        <h3>ID: {id}</h3>
        <img src={img} alt={nombre} />
        <p>Es un modelo de las Yeezy Boost 350 V2 que parte de una base negra con notas de rojo, azul, rosa y amarillo. Además de ser parte de la marca adidas Yeezy, Yechiel es un nombre de niño hebreo que significa «Dios vive». De forma explícita, Ye pretendía simbolizar la trascendencia de Dios con esta combinación de colores sobrenatural.</p>
        {

          agregarCantidad > 0 ? (<Link to="/cart"> Terminar Compra</Link>) : (<Contador inicial={1} stock={stock} funcionAgregar={manejadorCantidad}/>)
        }

    </div>
  )
}

export default ItemDetail