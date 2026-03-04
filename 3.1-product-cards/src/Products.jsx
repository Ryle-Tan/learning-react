

function Product({name = "Unknown Product", price = 0, category = "General", rating = 0, inStock = false, discount = 0}) {
    return(
        <div className="products">
            <h3>name: {name}</h3>
            <p>price: {price}</p>
            <p>category: {category}</p>
            <p>rating: {rating}</p>
            <p>inStock: {inStock ? "🟢" : "🔴"}</p>
            <p>discount: {discount}</p>
        </div>
    
    )
}

export default Product