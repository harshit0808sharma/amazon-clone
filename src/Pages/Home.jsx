import Header from "../Components/Header"
import TechProduct from "../Components/TechProduct"
import Cloths from "../Components/Cloths"
import Watchs from "../Components/Watch"
import Mobiles from "../Components/Mobiles"
import ProductSection1 from "../Components/ProductSection1"
import ProductSection2 from "../Components/ProductSection2"
import Begs from "../Components/Begs"
import Glasses from "../Components/Glasses"
import Footer from "../Components/Footer"
import { useEffect, useState } from "react"
import { MobileData, ClothsData, GlassesData, WatchsData, HeadPhones } from "../assets/Data";
import { Link } from "react-router-dom"
import Navbar from "../Components/Navbar"
// import Navbar from "../Components/Navbar"
const Home = ({item}) => {
  const [totalData, setTotalData] = useState([...MobileData, ...ClothsData, ...GlassesData, ...WatchsData, ...HeadPhones]);
  const [data, setData] = useState([])
  const [category, setCategory] = useState(0);
  const [openMenu, setOpenMenu] = useState(false);
  // console.log(category);
  const filterResult = () => {
    const filteredData = totalData.filter((items)=> items.categoryId === category)
    setData(filteredData);
  }
  useEffect(()=>{
    filterResult();
  }, [category])
  // console.log(data);

  return (
    <>
        <div className="home-page">
            <Header item={item} setCategory={setCategory} category={category} setOpenMenu={setOpenMenu} openMenu={openMenu}/>
            <Navbar setCategory={setCategory} category={category} setOpenMenu={setOpenMenu}/>
            {
              category === 0? (
                <div className={`home-container ${openMenu? "decrease-visibility": ""}`}>
                  <ProductSection2/>
                  <TechProduct/>
                  <Begs/>
                  <Glasses/>
                  <ProductSection1/>
                  <Cloths/>
                  <Watchs/>
                  <Mobiles/>
                </div>
              ):(
                <div className={`home-search-page-container ${openMenu? "decrease-visibility": ""}`}>
                {
                    data.map((item, index)=>(
                        <>
                            <Link to={`/product?id=${item?.id}`}>
                                <div className="searched-item" key={index}>
                                    <img src={item?.imgSrc} alt="random" width="80%" height="250px"/>
                                    <h4>{item?.productName}</h4>
                                </div>
                            </Link>
                        </>
                    ))
                }
            </div>
              )
            }
            <Footer/>
        </div>
    </>
  )
}

export default Home