/**
 * This function calculates total price od a new order
 * @param {Array} products cartProducts: Array of objects
 * @returns {number} Total price
 */
export const sumaProductos = (products)=>{
    let sum = 0
    products.forEach(product => sum+=product.price);
    return sum
}