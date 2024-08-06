import { Link, useLocation } from "react-router-dom";
import Header from "../Components/Header";
import { HeadPhones, SectionFirstData, SectionSecondData, MobileData, ClothsData, BegsData, WatchsData } from '../assets/Data';
import { useEffect, useState } from "react";
import Footer from "../Components/Footer";
// import { useEffect } from "react";


const SearchPage = () => {
    const search = useLocation().search;
    const queryName = new URLSearchParams(search).get('name');
    const [storeData, setStoreData] = useState([...HeadPhones, ...SectionFirstData, ...SectionSecondData, ...MobileData, ...ClothsData, ...BegsData, ...WatchsData]);
    const [searchedData, setSearchData] = useState([]);
    const data = () => {
        const queryName = new URLSearchParams(search).get('name');
        const filteredData = storeData.filter(item => item?.productName.toLowerCase() === queryName.toLowerCase());
        setSearchData(filteredData)
    }
    useEffect(()=>{
        data();
    }, [queryName])
  return (
    <>
        <div className="search-page">
            <Header/>
            <h2>{queryName}</h2>
            <div className="search-page-container">
                {
                    searchedData.map((item, index)=>(
                        <>
                            <Link to={`/product?id=${item?.id}`}>
                                <div className="searched-item" key={index}>
                                    <img src={item?.imgSrc} alt="random"/>
                                    <h4>{item?.productName}</h4>
                                </div>
                            </Link>
                        </>
                    ))
                }
            </div>
            <Footer/>
        </div>
    </>
  )
}

export default SearchPage;