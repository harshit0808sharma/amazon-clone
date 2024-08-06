import { Apple, Lock } from "@material-ui/icons";
import { FormControl, InputLabel, MenuItem, Select } from "@material-ui/core";
import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import amazonLogo from '../assets/Images/amazonwhitelogo.jpg';
import { BegsData, MobileData, SectionFirstData, SectionSecondData, WatchsData, HeadPhones, ClothsData } from "../assets/Data";



const PaymentPage = () => {
    const [openConfirme, setOpenConfirme] = useState(false);
    const [totalData, setTotalData] = useState([...BegsData, ...MobileData, ...SectionFirstData, ...SectionSecondData, ...WatchsData, ...HeadPhones, ...ClothsData])
    const [data, setData] = useState(null)
    const search = useLocation().search;
    const queryId = new URLSearchParams(search).get('id');
    const navigate = useNavigate();

    const normalPrice = Number(data?.productPrices?.price.replace(/,/g, ''));
    const percentPrice = Math.round(normalPrice/20);
    const totalPrice = Math.round(normalPrice + percentPrice);

    const date = new Date().toLocaleDateString();

    const [info, setInfo] = useState({
        fullName: "",
        emailId: "",
        address: "",
        mobile: "",
        country: "",
        state: "",
        pinCode: "",
        date: date,
        productPrice: "",
    })

    const handleChange = (e) => {
        const {name, value} = e.target;
        setInfo((prev)=> {
            return {
                ...prev,
                [name]: value
            }
        })
    }
    const redirectToReceipt = (data) =>{
        navigate("/receipt", {state: data});
    }

    useEffect(()=>{
        if(data){
            const productPrice = data?.productPrices?.price.replace(/,/g, '') || '';
            setInfo((prevInfo)=> ({
                ...prevInfo,
                productPrice: productPrice
            }));
        }
    }, [data]);

    const dataFun = () =>{
        const filteredData = totalData.filter(item => item?.id === Number(queryId));
        setData(filteredData[0]);
    }
    useEffect(()=>{
        dataFun();

    }, [queryId])




  return (
    <>
        <div className={`payment-page`}>
            <div className={`confirmed-message ${openConfirme? "show-confirmed": "hide-show-confirmed"}`}>
                <h2 style={{color: "red"}}>Your Order Confirmed!</h2>
                <div className="confirmed-btn">
                    <button style={{background: "green"}} onClick={()=> redirectToReceipt(info)}>Ok</button>
                    <button style={{background: "red"}} onClick={()=> setOpenConfirme(false)}>Cancle!</button>
                </div>
            </div>
            <div className={`payment-container ${openConfirme? "payment-page-blur": ""}`}>
                <div className="payment-left-section">
                    <Link to='/'>
                        <img src={amazonLogo} alt="amazon logo"/>
                    </Link>
                    <img src={data?.imgSrc} className="payment-product-image" alt="random"/>
                    <h2>{data?.productName}</h2>
                    <h3>Product Price: &#8377;{data?.productPrices?.price}</h3>
                </div>
                <div className="payment-right-section">
                    <h2 className="payment-heading">Payment Details</h2>
                    <p className="express-checkout"><span className="express-left"></span> Express checkout <span className="express-right"></span></p>
                    <div className="payment-options" style={{display: "flex", alignItems: "center"}}>
                        <p style={{fontStyle: "italic", color: "skyblue", fontWeight: "700"}}><span style={{color: 'blue'}}>P</span> <span style={{color: "blue"}}>Pay</span>Pal</p>
                        <span style={{backgroundColor: 'white', fontWeight: '600', padding: '5px 10px', display: "flex", justifyContent: "center", alignItems: "center"}}><span>G</span> Pay</span>
                        <span style={{color: "black", fontWeight: '600', display: "flex", alignItems: "center"}}><Apple/> Pay</span>
                    </div>
                    <div>
                    <p className="express-checkout" style={{display: "flex", alignItems: 'center', justifyContent: 'space-between'}}><span style={{width: "70px", height: '1px', background: 'black'}}></span> or continue with a credit card <span style={{width: "70px", height: '1px', background: 'black'}}></span></p>
                    </div>
                    <div className="card-details" style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
                        <input type="number" placeholder="Enter Card Number" style={{padding: "8px", fontSize: '16px', borderRadius: '5px', border: "none", outline: "none", boxShadow: '0 0 1px 1px #00000022', width: "25%"}}/>
                        <input type="date" placeholder="MM/YY/DD" style={{padding: "8px", fontSize: '16px', borderRadius: '5px', border: "none", outline: "none", boxShadow: '0 0 1px 1px #00000022', width: "40%"}}/>
                        <input type="text" placeholder="CVC" style={{padding: "8px", fontSize: '16px', borderRadius: '5px', border: "none", outline: "none", boxShadow: '0 0 1px 1px #00000022', width: "25%"}}/>
                    </div>
                    <div className="card-holder-name" style={{display: "flex", flexDirection: "column", gap: '10px'}}>
                        <input type="text" name="fullName" value={info.fullName} onChange={handleChange} placeholder="Enter Your Full Name"/>
                        <input type="email" name="emailId" value={info.emailId} onChange={handleChange} placeholder="Enter Your Email"/>
                        <input type="text" name="address" value={info.address} onChange={handleChange} placeholder="Address"/>
                        <input type="number" name="mobile" value={info.mobile} onChange={handleChange} placeholder="Mobile Number"/>
                    </div>
                    <div className="address">
                        <div>
                            <FormControl style={{width: "100%"}}>
                                <InputLabel id='All' style={{color: 'black', padding: "0 1rem"}}>All</InputLabel>
                                <Select
                                    labelId='All'
                                    style={{color: 'black'}}
                                    value={info.country}
                                    name="country"
                                    onChange={handleChange}
                                >
                                    <MenuItem value="United State">United State</MenuItem>
                                    <MenuItem value="India">India</MenuItem>
                                    <MenuItem value="England">England</MenuItem>
                                    <MenuItem value="Germany">Germany</MenuItem>
                                    <MenuItem value="France">France</MenuItem>
                                </Select>
                            </FormControl>
                        </div>
                        <div style={{display: "flex", justifyContent: "space-between", alignContent: "center", marginTop: "1rem"}}>
                            <input type="text" name="pinCode" value={info.pinCode} onChange={handleChange} placeholder="ZIP" style={{padding: "8px", fontSize: '16px', borderRadius: '5px', border: "none", outline: "none", boxShadow: '0 0 1px 1px #00000022', width: "45%"}}/>
                            <input type="text" name="state" value={info.state} onChange={handleChange} placeholder="State" style={{padding: "8px", fontSize: '16px', borderRadius: '5px', border: "none", outline: "none", boxShadow: '0 0 1px 1px #00000022', width: "45%"}}/>
                        </div>
                    </div>
                    <div style={{display: "flex", justifyContent: "space-between"}}><span>Subtotal</span> <span>........................</span> <span>&#8377;{data?.productPrices?.price}</span></div>
                    <div style={{display: "flex", justifyContent: "space-between"}}><span>delivery(20%)</span> <span>...........................</span> <span>&#8377;{percentPrice}</span></div>
                    <h2 style={{display: "flex", justifyContent: "space-between"}}><span>Total</span> <span>...................</span> <span>&#8377;{totalPrice}</span></h2>
                    <button style={{display: "inline-block", padding: "10px", color: "white", background: "darkgreen", borderRadius: "6px", fontSize: "20px", border: "none", cursor: "pointer"}} onClick={()=> setOpenConfirme(true)}>Pay &#8377;{totalPrice}</button>
                    <span style={{display: "flex", alignItems: "center"}}><Lock/> Payments are secure and encrypted</span>
                </div>
            </div>
        </div>
    </>
  )
}

export default PaymentPage