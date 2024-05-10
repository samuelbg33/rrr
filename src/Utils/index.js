/**
 * 
 * @param {Array} products cartProduct: Array of Objests 
 * @returns {number} total price
 */
export const totalPrice = (products) => {
    let sum = 0
    products.forEach(product => sum += product.price)
    return sum 
}