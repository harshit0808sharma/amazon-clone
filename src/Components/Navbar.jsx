import { Menu } from "@material-ui/icons"

const Navbar = ({setCategory, category, setOpenMenu}) => {
  return (
    <>
        <div className="navbar">
            <span onClick={()=> setOpenMenu(true)}>
                <Menu/>
            </span>
            <div className="navbar-buttons">
                <button style={category === 0? {border: "2px solid white"}: {border: 0}} onClick={()=> setCategory(0)}>Home</button>
                <button style={category === 1? {border: "2px solid white"}: {border: 0}} onClick={()=> setCategory(1)}>Tech Product</button>
                <button style={category === 2? {border: "2px solid white"}: {border: 0}} onClick={()=> setCategory(2)}>Fashion</button>
                <button style={category === 3? {border: "2px solid white"}: {border: 0}} onClick={()=> setCategory(3)}>Sales</button>
            </div>
        </div>
    </>
  )
}

export default Navbar