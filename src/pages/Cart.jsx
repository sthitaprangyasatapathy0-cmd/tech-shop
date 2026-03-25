import { useContext, useState } from "react"
import { shopContext } from "../Context/context"
import './cart.css'
import { RiAddCircleFill } from "react-icons/ri";
import { IoIosRemoveCircle } from "react-icons/io";
import { CiCircleRemove } from "react-icons/ci";
import { useNavigate } from "react-router-dom";

export function Cart() {
    const navigate = useNavigate()


    const [selctId, SetselectId] = useState(null)
    const [discounts, SetDiscount] = useState(0)


    const { cartItem, SetCartitem, text,SetMony } = useContext(shopContext)
    function removeItem(id) {
        SetCartitem(cartItem.filter(op => op.id !== id))

    }

    const price = cartItem.reduce((acc, cur) => {
        return acc + cur.price * cur.qty + 25 - discounts;
    }, 0);

    const actual = cartItem.reduce((acc, cur) => {
        return acc + cur.originalPrice;
    }, 0);
    let discount = actual - price

    function justadd(id) {
        SetCartitem(prv => prv.map((prv) => prv.id === id ? { ...prv, qty: prv.qty + 1 } : prv))

    }
    function justRemov(id) {
        SetCartitem(prv => prv.map((prv) => prv.id === id ? { ...prv, qty: prv.qty === 1 ? prv.qty : prv.qty - 1 } : prv))

    }
    function orderplace() {
        navigate('/order-success');
        SetMony(price)
    }

    let [dis, Setdis] = useState(false)
    //const pra=price-dis

    return (
        <>


            <div className="cartCard">
                <div className="cart-a">
                    {cartItem.map((dataitem) =>

                        <div className="cardCat-a">
                            <div >
                                <img className="img-cat" src={dataitem.image} alt="" />
                            </div>
                            <div className="cardContent" key={dataitem.id}>

                                <div className="t1"> {dataitem.brand} <button className="remtext" onClick={() => removeItem(dataitem.id)}> <CiCircleRemove /></button></div>
                                <span className="title">{dataitem.title}</span>

                                <span className="eoo"><span className="cat-a">₹{dataitem.price}</span> <span className="cat-b1">MRP <span className="cat-b">₹{dataitem.originalPrice}</span></span> <span className="cat-c">({dataitem.discountPercent}%OFF)</span></span>

                                <span> 7-Day Replacement Available</span> <br />
                                <div className="qty-btn"> <button onClick={() => justRemov(dataitem.id)} className="icon-btn"> <IoIosRemoveCircle /></button> <span className="qtynum">{dataitem.qty} </span><button className="icon-btn" onClick={() => justadd(dataitem.id)}><RiAddCircleFill /></button></div>



                            </div>
                        </div>
                    )}


                </div>


                <div style={{ borderLeft: "1px solid #eee" }} className="cart-b">

                    <div className="mr-row">
                        <span>Total MRP</span> <span className="amount1">  ₹{actual.toLocaleString("en-IN")}</span>
                    </div>


                    <div className="mr-row">
                        <span>Discount on MRP</span> <span className="amount2" >- ₹{discount.toLocaleString("en-IN")}</span>

                    </div>
                    <div className="mr-row">
                        {cartItem.length >= 1 ? <><span>Coupon</span> <span  > ₹100OFF<button style={{ border: "none" }} onClick={() => SetDiscount(100)}> Apply  </button></span></> : ""}

                    </div>
                    <div className="mr-row" >
                        {cartItem.length >= 1 ? (<><span>Platform Fee</span> <span>₹25</span> </>) : ""}

                    </div>
                    <div className="liner"></div>
                    <div className="mr-row" >
                        <span>Total Amount</span>{cartItem.length >= 1 ? <span>{ (price).toLocaleString("en-IN", {
                            style: "currency",
                            currency: "INR",
                            minimumFractionDigits: 0,
                            maximumFractionDigits: 0,
                        })} </span>:""}
                    



                    </div>


                    <div className="btnplaceorder">
                        <button onClick={orderplace} className="btnplace">Place order</button>

                    </div>







                </div>

                    <div>

                        <div>
                            {
                                text.map((op, i) => (
                                    <ul key={i}>
                                        <input type="radio" name="adress" onChange={() => SetselectId(i)} checked={selctId === i} />
                                        <li className="l1"> {op.name}  </li>
                                        <li><span>City:</span> {op.city} </li>
                                        <li><span>Phone: </span>  {op.phone}</li>
                                        <li> <span>Address:</span> {op.address}</li>





                                    </ul>




                                ))

                            }
                        </div>
                    </div>

                </div >




            </>
            )
}