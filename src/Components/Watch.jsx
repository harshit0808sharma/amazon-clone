import { NavLink } from "react-router-dom";
import { WatchsData } from "../assets/Data";

const Watchs = () => {
  return (
    <> 
        <div className="home-product-components">
          <h3>Up to 50% off | Try a specil Offer on Watches</h3>
          <div className="home-product-content">
            {WatchsData.map((items, index)=> (
                    <>
                      <NavLink to={`/product?id=${items.id}`}>
                        <div className="home-product-container" key={index}>
                            <img src={items.imgSrc} alt="random" width="200px" height="180px"/>
                        </div>
                      </NavLink>
                
                    </>
            ))}
          </div>
        </div>
    </>
  )
}

export default Watchs;