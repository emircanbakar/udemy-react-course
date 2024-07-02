import ProductItem from "./ProductsItem"
import "./Products.css"

function Products(){
    return(
        <div>
            <h1>Products</h1>
            <div className="products">
                <ProductItem/>
                <ProductItem/>
            </div>
        </div>
    )
}

export default Products;    