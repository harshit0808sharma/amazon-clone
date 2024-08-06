import { Link } from "react-router-dom";
import { ClothsData } from "../assets/Data";
const Cloths = () => {
  return (
    <>
        <div className="home-product-components">
          <h3>Up to 80% off | Fashionable and trendy clothes from Small business</h3>
          <div className="home-product-content">
            {ClothsData.map((items, index)=> (
                    <>
                      <Link to={`/product?id=${items.id}`}>
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

export default Cloths