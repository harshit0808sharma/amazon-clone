import { LocationOnOutlined, Lock } from '@material-ui/icons';
// import productImg from '../assets/Images/watch1.jpg';
import { Link, useLocation } from 'react-router-dom';
import { WatchsData, HeadPhones, BegsData, ClothsData,MobileData, SectionFirstData, SectionSecondData, GlassesData } from '../assets/Data';
import { useEffect, useState } from 'react';
const Product = ({handleAddToCart}) => {
    const search = useLocation().search;
    // const search2 = useLocation().pathname;
    const queryId = new URLSearchParams(search).get('id');
    const [totalData, setTotalData] = useState([...WatchsData, ...HeadPhones, ...BegsData, ...ClothsData, ...MobileData, ...SectionFirstData, ...SectionSecondData, ...GlassesData])
    const [data, setData] = useState(null);

    // const path = search2.split('/')[1];

    useEffect(() => {
        if (queryId) {
          const filteredData = totalData.filter(items => items.id === Number(queryId));
          setData(filteredData[0]);
        }
      }, [queryId]);


  return (
    <>
        <div className="single-product-component">
            <div className="single-product-container">
                <div className="product-image">
                    <img src={data?.imgSrc} alt="random"/>
                </div>
                <div className="product-details">
                    <h2>{data?.productName}</h2>
                    <h6>Brand: {data?.productBrand}</h6>
                    <p>{data?.productReviews?.rating} <span style={{color: "red", fontSize: '20px'}}>&#9733;&#9733;&#9733;&#9733;&#9734;</span> <span style={{color: "#00add0"}}>{data?.productReviews?.raview} reviews</span></p>
                    <hr style={{margin: "10px 0"}}/>
                    <h1><span style={{fontSize: '25px', color: '#dc07a7', marginRight: '20px'}}>{data?.productPrices?.discount}</span> <span className='product-prices'>{data?.productPrices?.price}</span></h1>
                    <p style={{fontSize: '12px', fontWeight: "600"}}>M.R.P. <span style={{textDecoration: "line-through"}}>{data?.productPrices?.cutPrice}</span></p>
                    <p>Inclusive of all texes <br /><span style={{color: "black", fontSize: '18px', fontWeight: '600'}}>EMI</span> starts at &#8377;382. No Cost EMI available <span style={{color: "#00add0"}}>EMI options</span></p>
                    <hr style={{margin: "10px 0"}}/>
                    <h4>About</h4>
                    <ul>
                        <li>{data?.about?.firstPoint}</li>
                        <li>{data?.about?.secondPoint}</li>
                    </ul>

                </div>
                <div className="product-buy">
                    <h2 className='product-prices' style={{marginLeft: '10px'}}>{data?.productPrices?.price}</h2>
                    <p>FREE delivery 5 - 6 July. Order within <span style={{color: "green"}}>16 hrs 46mins. </span> Details <LocationOnOutlined/> <span style={{color: "#00add0"}}>Delivering to Chhindwar 480001 -Update location</span></p>
                    <h4>Add a Protection Plan:</h4>
                    <button style={{display: 'inline-block', width: '100%', fontSize: "18px", background: 'yellow', borderRadius: "50px", padding: "4px 0", border: '0', margin: "6px 0", cursor: "pointer"}} onClick={()=> handleAddToCart(data)}>Add to Cart</button>
                    <Link to={`/productbuy?id=${data?.id}`} style={{display: 'inline-block', width: '100%', fontSize: "18px", background: 'orange', borderRadius: "50px", padding: "4px 0", border: '0', margin: "6px 0", cursor: "pointer", textAlign: "center"}}>Buy Now</Link>
                    <p style={{display: "flex", alignItems: "center"}}><Lock/> Secure transaction</p>
                </div>
            </div>
        </div>
    </>
  )
}

export default Product;