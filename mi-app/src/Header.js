import CartWidget from "./CartWidget";
import Nav from "./Nav"

const Header = ({producto, saludo}) => {

    
    console.log(producto)
   

    return (
        <header id="main-header">
            <h1>{saludo}</h1>
            <Nav />
            <CartWidget/>
        </header>
    )
}

export default Header; 