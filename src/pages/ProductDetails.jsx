import { Link, useParams } from "react-router-dom"
import data from "../Database/data.json"
import './ProductDetailes.css'
import { shopContext } from "../Context/context"
import { useContext } from "react"
import { IoBagCheckSharp } from "react-icons/io5";
import { IoHeart } from "react-icons/io5";
export function ProductDetails() {
    const { id } = useParams()
    const { addToCart, cartItem, addWish, whislist } = useContext(shopContext)

    return (
        <>
            <h2>ProductDetiles</h2>
            {data.filter(check => check.id === Number(id)).map(mydrat => (
                <div className="detailesCard">
                    <div className="card-a">
                        <img className="detilsImage" src={mydrat.image} alt="" />

                    </div>
                    <div className="card-b">
                        <h2>{mydrat.brand}</h2>

                        <span style={{ color: "gray", fontSize: "18px" }}>{mydrat.title}</span><br />
                        <div style={{ marginTop: "15px", border: "1px solid rgb(233, 231, 226)", display: "inline-block", padding: "5px", marginBottom: "15px" }}><span style={{ fontWeight: "bolder" }}>{mydrat.rating}<span style={{ color: "green" }}>★</span>|<span style={{ color: "gray", fontWeight: "bold" }}>{mydrat.reviewsCount} Ratings</span></span></div>

                        <div style={{ borderBottom: "1px solid #ccc" }}></div>
                        <div className="mony">
                            <span><span className="pra-a">₹{mydrat.price}</span> <span className="pra-b1">MRP <span className="pra-b">₹{mydrat.originalPrice}</span></span> <span className="pra-c">({mydrat.discountPercent}%OFF)</span></span>
                        </div>
                        <span className="tax">inclusive of all taxes</span>

                        <div className="btn">
                            {cartItem.some(checkId => checkId.id === mydrat.id) ? <Link to='/cart'> <button className='cartBtn-a'>GO TO CART</button> </Link> : <button onClick={() => addToCart(mydrat)} className='cartBtn-a'> <IoBagCheckSharp />
ADD TO CART</button>} {  <button onClick={() => {whislist.some(checkId => checkId.id === mydrat.id)?"": addWish(mydrat)}} className='cartBtn-b'> <IoHeart />WISHLIST</button>}


                        </div>
                        <div className="details">
                            <h2>Product Description</h2>
                            <span className="desc">{mydrat.description}</span>


                        </div>

                    </div>




                </div>

            ))}


        </>
    )

}