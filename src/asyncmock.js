const misProductos = [
    { id: "1", nombre: "Yerba", precio: 10000, img: "../img/yerba.jpg", idCat: "lacteos" },
    { id: "2", nombre: "Fideos", precio: 200, img: "../img/fideos.jpg", idCat:"lacteos" },
    { id: "3", nombre: "Arroz", precio: 300, img: "../img/arroz.jpg", idCat:"almacen" }, 
    { id: "4", nombre: "Aceite", precio: 900, img: "../img/aceite.jpg", idCat:"almacen" },
]

export const getProductos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(misProductos);
        }, 100)
    })
}


//Actividad after: Agregar el datalle del producto
//Crear una funcion similar a la anterior pero que solo nos retorne un solo item

export const getUnProducto = (id) => {
    return new Promise (resolve =>{
        setTimeout(()=>{
            const producto = misProductos.find(item => item.id === id)
            resolve(producto)
        }, 100)
    })

}


export const getProductosPorCategorias = (idCategoria) => {
    return new Promise(resolve =>{
        setTimeout(() => {
            const producto = misProductos.filter(item => item.idCat === idCategoria)
            resolve(producto)
        }, 100);

    })

}