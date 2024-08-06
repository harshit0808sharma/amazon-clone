import { Link } from "react-router-dom";
import { BegsData } from "../assets/Data";

const Begs = () => {
  return (
    <>
        <div className="home-product-components">
          <h3>Up to 80% off | Fashionable and trendy clothes from Small business <span className="off-price">75% off</span></h3>
          <div className="home-product-content">
            {BegsData.map((items, index)=> (
                    <>
                      <Link to={`/product?id=${items?.id}`}>
                        <div className="home-product-container" key={index}>
                            <img src={items.imgSrc} alt="random"/>
                        </div>
                      </Link>
                
                    </>
            ))}
          </div>
        </div>
    </>
  )
}

export default Begs;