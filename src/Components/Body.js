import Home from "./navs/Home"
import About from "./navs/About"
import Contact from "./navs/Contact"
import Checkout from "./navs/Checkout"
import Footer from "./Footer"
import logo from "../assets/logo1.jpg"
import {Routes,Route, Link} from "react-router-dom"

export default function Body()
{
    return (
        <div className="container-fluid" style={{letterSpacing: "-0.05em"}}>

<nav className="navbar navbar-expand-lg bg-body-tertiary sticky-top ">
  <div className="container-fluid  ">
  <Link to="/">   <img src={logo} width={70} className="mx-3" /></Link>
    <h1 className="navbar-brand" >IYAWE ART COLLECTION</h1>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
        <li className="nav-item">
          <Link className="nav-link " aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/checkout">Checkout</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/contact">Contact</Link>
        </li>
        
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search here" aria-label="Search"/>
        <button className="btn btn-outline-warning" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>

      <Routes>
<Route path="/"  element={<Home />}/>
<Route path="/about" element={<About  />}/>
<Route path="/contact" element={<Contact/>}/>
<Route path="/checkout" element={<Checkout/>}/>
      </Routes>

      <Footer/>
      </div>
    )
}