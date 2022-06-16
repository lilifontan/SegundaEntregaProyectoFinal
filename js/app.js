
//DECLARACIONES------------------------------------------------------------------------------------------------------------
const productos = [prod1, prod2, prod3, prod4]
let carrito = []


//QUERY DE ELEMENTOS-------------------------------------------------------------------------------------------------------
const verCarrito = document.querySelector('.verCarrito')
const botonDestacados = document.querySelector('.buttonCTA') 
const botonCarrito = document.querySelector('.buttonCarrito') 



//FUNCIONES----------------------------------------------------------------------------------------------------------------
//Función que renderiza mis productos en pantalla
renderizarProducto = (e) => {
  
    e.target.setAttribute('hidden', true)
    productos.forEach((producto) => {
    const card = document.createElement('div')
    card.className = 'card'
    card.innerHTML = `
    <div class="cartImg scale"> <img src="${producto.imgSrc}" /> </div>
    <div class="cartTitle"><h2>${producto.nombre}</h2></div>
    <div class="cartPrice"><h2>${producto.precio}</h2></div>
    <button data-id="${producto.id}" class="buttonProd"> Agregar al Carrito </button>
        `
    ID_cardContainer.append(card)
})
const botonesCompra = document.querySelectorAll('.buttonProd')  
botonesCompra.forEach((botonCompra) => {
botonCompra.addEventListener('click', agregarProducto)
  
})
}

renderizarCarrito = (e) => {
  
    ID_cartContainer.innerHTML= ''
    carrito.forEach((producto) => {
    const card = document.createElement('div')
    card.className = 'card'
    card.innerHTML = `
    <div class="cartImg scale"> <img src="${producto.imgSrc}" /> </div>
    <div class="cartTitle"><h2>${producto.nombre}</h2></div>
    <div class="cartPrice"><h2>${producto.precio}</h2></div>
    <button data-id="${producto.id}" class="buttonDelete"> Eliminar del Carrito </button>
        `
    ID_cartContainer.append(card)
})
const botonesDelete = document.querySelectorAll('.buttonDelete')  
botonesDelete.forEach((botonDelete) => {
    botonDelete.addEventListener('click', eliminarProducto)
 
})
}


//Función que agrega productos al carrito
function agregarProducto(e) {

    const productoElegido = e.target.getAttribute('data-id')
    const producto = productos.find((producto) => producto.id == productoElegido)
    carrito.push(producto)

}

const eliminarProducto = (e) => {

    const productoElegido = e.target.getAttribute('data-id')
    //const producto = productos.find((producto) => producto.id ==  productoElegido)
    carrito = carrito.filter((producto) => producto.id !=productoElegido)
    renderizarCarrito()
    
}

//EVENTLISTENERS-------------------------------------------------------------------------------------------------------------

botonDestacados.addEventListener('click', renderizarProducto)
botonCarrito.addEventListener('click', renderizarCarrito)


