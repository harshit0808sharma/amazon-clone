import { FormControl, InputLabel, MenuItem, Select } from '@material-ui/core';
import amazonLogo from '../assets/Images/amazonlog.jpg';
import indianFlag from '../assets/Images/indianflag.jpg'
import { AccountCircle, AddShoppingCartOutlined, Close, ContactMail, LocationOnOutlined, SearchOutlined } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { HeadPhones, SectionFirstData, SectionSecondData, MobileData, ClothsData, BegsData, WatchsData } from '../assets/Data';
import Navbar from './Navbar';

const Header = ({ item = 0, showMessage, setCategory, category, openMenu, setOpenMenu }) => {
    const [storeData, setStoreData] = useState([...HeadPhones, ...SectionFirstData, ...SectionSecondData, ...MobileData, ...ClothsData, ...BegsData, ...WatchsData]);
    const [location, setLocation] = useState('');
    const [product, setProduct] = useState('');
    const [search, setSearch] = useState('');
    const [searchResult, setSearchResult] = useState([]);

    const handleChange = (e) =>{
        const value = e.target.value;
        setSearch(value);
        const filteredItem = storeData.filter(item => item?.productName.toLowerCase().includes(value.toLowerCase()));
        setSearchResult(filteredItem.slice(0, 8));
    }
    const handleResultClick = (productName) => {
        setSearch(productName);
        setSearchResult([]);
    };
    // console.log(openMenu);

  return (
    <>
        <div className="header">
            <div className="main-logo">
                <Link to='/'>
                    <img src={amazonLogo} alt="amazon logo"/>
                </Link>
            </div>
            <div className="location">
                <LocationOnOutlined/>
                <FormControl style={{width: "150px", display: "flex"}}>
                    <InputLabel id='location'>Update Location</InputLabel>
                    <Select
                        labelId='location'
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                    >
                        <MenuItem value="India">INDIA</MenuItem>
                        <MenuItem value="America">AMERICA</MenuItem>
                        <MenuItem value="England">ENGLAND</MenuItem>
                        <MenuItem value="France">FRANCE</MenuItem>
                    </Select>
                </FormControl>
            </div>
            <div className="search-bar">
                <div className="inside-search-bar">
                    <FormControl>
                        <InputLabel id='All' style={{color: 'black', padding: "0 1rem"}}>All</InputLabel>
                        <Select
                            labelId='All'
                            style={{color: 'black'}}
                            value={product}
                            onChange={(e) => setProduct(e.target.value)}
                        >
                            <MenuItem value="Tech">Tech</MenuItem>
                            <MenuItem value="Glasses">Glasses</MenuItem>
                            <MenuItem value="Bags">Bags</MenuItem>
                            <MenuItem value="Stationary">Stationary</MenuItem>
                            <MenuItem value="Cloths">Cloths</MenuItem>
                        </Select>
                    </FormControl>
                    <input type="text" placeholder='Search Amazon.in' value={search} onChange={handleChange}/>
                    <span className='search-icon' style={{zIndex: "999"}}>
                        <Link to={`/search?name=${search}`}>
                            <SearchOutlined style={{color: "black", fontSize: "32px", background: "transparent"}}/>
                        </Link>
                    </span>
                </div>
                {
                    searchResult?.length > 0 && search.length > 0 && (
                    <div className="searchData" style={{background: "white", borderRadius: '6px' ,position: "absolute", top: '3rem', left: "7.6rem", color: 'black', width: "70%", padding: "1rem", zIndex: "999", border: "1px solid #00000045"}}>
                    <ul style={{listStyleType: "none"}}>
                        {
                            searchResult.map((item, index) => (
                                <li key={index} onClick={()=> handleResultClick(item.productName)} style={{cursor: 'pointer', padding: '4px'}}>{item?.productName}</li>
                            ))
                        }
                    </ul>
                    </div> )
                }
            </div>
            <div className="language">
                <img src={indianFlag} alt="indian flag"/>
                <span>EN</span>
            </div>
            <div className="sign-in">
                <Link to='/signin'>
                    <p>Hello, sign in</p>
                    <h4>Account & List</h4>
                </Link>
            </div>
            <div className="orders">
                <Link to='/contact' style={{color: "white"}}>
                    <p>contact us</p>
                    <h4><ContactMail/></h4>
                </Link>
            </div>
            <div className="cart" style={{zIndex: '999', color: "white"}}>
                <Link to='/cart'>
                    <AddShoppingCartOutlined style={{fontSize: "40px", color: 'white'}}/>
                    <span>{item}</span>
                </Link>
            </div>
            <div className={`${showMessage? "product-add-message": "outside-message"}`}>
                <p>{item} Item added</p>
            </div>
            <div className='navbar'>
                {/* <Navbar setCategory={setCategory} category={category} setOpenMenu={setOpenMenu}/> */}
            </div>
            <div className={`menu-items ${openMenu? "menu-visible":  "menu-hidden"}`}>
                <h3 style={{color: "white", width: "100%", padding: "6px 2rem", background: "#313957", display: "flex", justifyContent: "space-between", alignItems: "center"}}> 
                    <span><AccountCircle/> Hello Sign in</span> 
                    <span style={{cursor: "pointer"}} onClick={()=> setOpenMenu(false)}><Close/></span>
                </h3>
                <div className="menu-items-container">
                    <h4>Trending</h4>
                    <p style={category === 0? {color: "red", fontWeight: "600"}: {border: "0"}} onClick={()=> setCategory(0)}>home</p>
                    <p>New Release</p>
                    <p>Movers and Shakers</p>
                    <hr />
                    <h4>Shops by Category</h4>
                    <p style={category === 1? {color: "red", fontWeight: "600"}: {border: "0"}} onClick={()=> setCategory(1)}>Tech Products</p>
                    <p style={category === 2? {color: "red", fontWeight: "600"}: {border: "0"}} onClick={()=> setCategory(2)}>Fashion Products</p>
                    <p style={category === 3? {color: "red", fontWeight: "600"}: {border: "0"}} onClick={()=> setCategory(3)}>Sells</p>
                    <hr />
                    <h4>Programs & Features</h4>
                    <p>Amazon Pay</p>
                    <p>Gift Cards & Mobile Recharges</p>
                    <p>Amazon Lunchpad</p>
                    <hr />
                    <h4>Help & Settings</h4>
                    <p>Your Account</p>
                    <p>Customer Service</p>
                    <p>Sign in</p>
                </div>
            </div>
        </div>
    </>
  )
}

export default Header;