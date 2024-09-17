const misProductos = [
    { id: "1", nombre: "Zapatillas Foam RNNR Ararat", stock: 10, precio: 10000, img: "../img/yezzy_1.png", idCat: "Zapatillas" },
    { id: "2", nombre: "Sandalias Yeezy Ochre", stock: 12, precio: 15000, img: "../img/yezzy_2.png", idCat:"Sandalias" },
    { id: "3", nombre: "Zapatillas Yeezy 700 V3", stock: 5, precio: 15000, img: "../img/yezzy_3.png", idCat:"Sandalias" }, 
    { id: "4", nombre: "Zapatillas Yeezy Boost 350", stock: 7, precio: 10000, img: "../img/yezzy_4.jpg", idCat:"Zapatillas" },
]

export const getProductos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(misProductos);
        }, 100)
    })
}

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