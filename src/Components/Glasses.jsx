import { Link } from "react-router-dom";
import { GlassesData } from "../assets/Data";

const Glasses = () => {
  return (
    <>
        <div className="home-product-components">
          <h3>Up to 50% off | On Glasses  <span className="off-price">50% off</span></h3>
          <div className="home-product-content">
            {GlassesData.map((items, index)=> (
                    <>
                      <Link to={`/product?id=${items?.id}`}>
                        <div className="home-product-container" key={index}>
                            <img src={items.imgSrc} alt="random" width="200px" height="180px"/>
                        </div>
                      </Link>
                
                    </>
            ))}
          </div>
        </div>
    </>
  )
}

export default Glasses;