// import random from '../assets/Images/bag1.jpg'
import { Link } from 'react-router-dom';
import { HeadPhones } from '../assets/Data';

const TechProduct = () => {
  return (
    <>  
        <div className="home-product-components">
            <h3>Up to 50% off | Try a specil Offer on Watches</h3>
            <div className="home-product-content">
                {HeadPhones.map((items, index)=> (
                    <>
                        <Link to={`/product?id=${items.id}`}>
                            <div className="home-product-container" key={index}>
                                <img src={items.imgSrc} alt="random" width="200px" height="180px"/>
                                <p>{items.productName}</p>
                            </div>
                        </Link>
                
                    </>
                ))}
            </div>
        </div>
    </>
  )
}

export default TechProduct;