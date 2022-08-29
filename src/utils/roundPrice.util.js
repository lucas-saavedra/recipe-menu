const roundPrice = (price) => {
    return Math.round(price + Number.EPSILON) / 100
}
export default roundPrice;