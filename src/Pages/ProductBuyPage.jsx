import { Link, useLocation } from "react-router-dom";
import Header from "../Components/Header";
import { BegsData, MobileData, SectionFirstData, SectionSecondData, WatchsData, HeadPhones, ClothsData } from "../assets/Data";
import { useEffect, useState } from "react";


const ProductBuyPage = ({item}) => {
    const [totalData, setTotalData] = useState([...BegsData, ...MobileData, ...SectionFirstData, ...SectionSecondData, ...WatchsData, ...HeadPhones, ...ClothsData])
    const [data, setData] = useState(null)
    const search = useLocation().search;
    const queryId = new URLSearchParams(search).get('id');
    // const [openPayment, setOpenPayment] = useState(false);

    const dataFun = () =>{
        const filteredData = totalData.filter(item => item?.id === Number(queryId));
        setData(filteredData[0]);
    }
    useEffect(()=>{
        dataFun();
    }, [queryId])
    // console.log(data);

    // console.log(queryId);
  return (
    <>
        <div className="product-buy">
            <Header item={item}/>
            <div className="product-buy-container">
                <div className="content">
                    <div className="left">
                        <h2>{data?.productName}</h2>
                        <h3>BRAND: {data?.productBrand}</h3>
                        <p>Reviews: {data?.productReviews?.raview}</p>
                    </div>
                    <div className="center">
                        <img src={data?.imgSrc} alt="random"/>
                    </div>
                    <div className="right">
                        <h4>Product Price: &#8377;{data?.productPrices?.price}</h4>
                        <h5>Product Cut Prices: {data?.productPrices?.cutPrice}</h5>
                        <h6>About</h6>
                        <ul>
                            <li>Camera: This Product Camera is High Resolution</li>
                            <li>REM: 12GB</li>
                            <li>ROM: 256GB</li>
                            <li>Processor: Helio G95</li>
                        </ul>
                    </div>
                </div>
                <div className="buy">
                    <Link to={`/payment?id=${data?.id}`}>
                        <button>Buy</button>
                    </Link>
                </div>
            </div>
        </div>
    </>
  )
}

export default ProductBuyPage;