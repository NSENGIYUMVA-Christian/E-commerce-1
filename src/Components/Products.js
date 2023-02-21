
import logo from "../assets/logo1.jpg"
import a from "../assets/a.jpg"
import star from "../assets/star.png"
import starFill from "../assets/star-filled.png"
import {useState} from "react"

export default function Product(props)
{
console.log(logo)
 // setting favourite toggle
 const [isFavourite,setIsFavourite] = useState(false)
 const switchFav = ()=> setIsFavourite(prev => !prev)
 const favImg = isFavourite ? starFill : star

  
  // setting amount of product to be purchased out
  const [amount, setAmount] = useState(0)
   const plus = ()=>{setAmount((prevAmount) => prevAmount+1)}
   const minus = ()=>{setAmount((prevAmount) =>prevAmount ? prevAmount-1 : prevAmount=0)}
   

   //determining availability of product in out store
 let availability = props.available > 0 ? "available" : "sold out"


    return (
<div className="product my-1 m-1 p-0 ">
<div className="card " style={{width: "170px", height: "300px"}}>
  <div className="available ">{availability}</div>
  <div className="cardImg">
  <img src={a} className="card-img-top" style={{maxWidth: "100%", maxHeight:"100%"}}  alt="product photo"  />
  </div>
  <div className="card-body" style={{ paddingBottom: "0rem", paddingRight:"0.5rem" }}>
    <h5 className="card-title fs-6 m-0 p-0 ">Title : {props.title} </h5>
    <p className="card-text m-0 p-0 text-break " >Description: {props.descr}</p>
    <span>favourite : </span> <span> <img onClick={switchFav} src={favImg} alt="fav image" width ={20} className="mx-1"/> </span> <br/>
   <p>quantity: <button className="border-0 w-2 cal" onClick={minus}>-</button> {amount} <button onClick={plus} className="border-0 w-2 cal" >+</button> </p>
    <p className="btn btn-primary my-1">Add to cart</p>
  </div>
</div>
</div>

    )
}



