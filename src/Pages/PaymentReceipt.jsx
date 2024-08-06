import { Link, useLocation } from "react-router-dom"
import amazonLogo from '../assets/Images/amazonwhitelogo.jpg';


const PaymentReceipt = () => {
    const location = useLocation();
    const data = location.state;
    const productPrice = Number(data?.productPrice)
    const percentPrice = Math.round(productPrice/20);
    const totalPrice = Math.round(productPrice + percentPrice);

  return (
    <>
        <div className="receipt">
            <div className="receipt-container">
            <Link to='/'>
                <img src={amazonLogo} alt="amazon logo" width="150px" height="40px"/>
            </Link>
            <div className="customer-info">
                <div>
                    <h4>Customer Name : {data?.fullName}</h4>
                    <p>Mobile : {data?.mobile}</p>
                    <p>Email Id : {data?.emailId}</p>
                    <p>Address : {data?.address}</p>
                </div>
                <div>
                    <h4>Country : {data?.country}</h4>
                    <p>State : {data?.state}</p>
                    <p>Pincode : {data?.pinCode}</p>
                </div>
            </div>
            <div className="product-info">
                <table>
                    <tr>
                        <th>Description</th>
                        <th>Amount</th>
                    </tr>
                    <tr>
                        <td>Product Price</td>
                        <td>&#8377;{productPrice}</td>
                    </tr>
                    <tr>
                        <td>Product Delivery Price</td>
                        <td>&#8377;{percentPrice}</td>
                    </tr>
                    <tr>
                        <td className="total-price">Total Price</td>
                        <td className="total-price">&#8377;{totalPrice}</td>
                    </tr>
                </table>
            </div>
            <div style={{display: "flex", flexDirection: "column", gap: "1rem"}}>
                <p><span>Date : </span>{data?.date}</p>
                <h3>Thanks for shopping!</h3>
            </div>
            </div>
        </div>
    </>
  )
}

export default PaymentReceipt