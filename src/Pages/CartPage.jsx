import { DeleteOutline } from "@material-ui/icons";
import Header from "../Components/Header";
import { Link } from "react-router-dom";
// import random from '../assets/Images/shirt1.jpg'

const CartPage = ({ store, handleRemoveItem, item }) => {

    const allPrices = store.map(item => parseFloat(item?.productPrices?.price.replace(/,/g, '')));
    // console.log(allPrices);
    const totalPrice = allPrices.reduce((acc, price) => acc + price, 0);
    // console.log("Total Price: " + totalPrice);


  return (
    <>
        <div className="cart-page">
            <Header item={item}/>
            <div className="cart-container">
                {
                    item<1? <span className="empty-product-msg">You Do Not Store Any Product</span> : (
                        store.map((item, index)=> (
                        <>
                            <div className="cart-item" key={index}>
                                <div className="item-name">
                                    <img src={item?.imgSrc} alt="random"/>
                                    <p>{item?.productName}</p>
                                </div>
                                <div className="item-price">
                                    <span style={{fontWeight: '600'}}>Price: &#8377;{item?.productPrices?.price}</span>
                                    <span>Price: &#8377;{item?.productPrices?.discount}</span>
                                    <span style={{color: "red",textDecoration: "line-through"}}>Price: &#8377;{item?.productPrices?.cutPrice}</span>
                                </div>
                                <div className="cart-btns">
                                    <button className="remove-item-btn" onClick={()=> handleRemoveItem(index)}><DeleteOutline/>Remove Item</button>
                                    <Link to={`/productbuy?id=${item?.id}`} className="buy-item-btn">Buy Now</Link>
                                </div>
                            </div>
                        </>
                    ))
                )
                }
            </div>
            <div className="cart-total">
                <p>Total Items: {item} and Total Cost: &#8377;{totalPrice}</p>
            </div>
        </div>
    </>
  )
}

export default CartPage;