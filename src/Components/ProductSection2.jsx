
import { Link } from 'react-router-dom';
import { SectionSecondData } from '../assets/Data';

const ProductSection2 = () => {
  return (
    <>
        <div className="product-section-component">
            <h3>Best Saler In Bottle</h3>
            <div className="product-section-container">
                {
                    SectionSecondData.map((items, index)=>(
                        <>
                            <Link to={`/product?id=${items?.id}`}>
                                <div className="first-product" style={{cursor: 'pointer'}} key={index}>
                                    <img src={items?.imgSrc} alt="random" />
                                    <p>{items?.productName}</p>
                                </div>
                            </Link>
                        </>
                    ))
                }
            </div>
        </div>
    </>
  )
}

export default ProductSection2;