import Header from "../Components/Header";
import Product from "../Components/Product";
const ProductPage = ({ item, handleAddToCart, showMessage }) => {
  return (
    <>
        <div className="product-page">
            <Header item={item} showMessage={showMessage}/>
            <div className="product-container">
                <Product handleAddToCart={handleAddToCart}/>
            </div>
        </div>
    </>
  )
}

export default ProductPage