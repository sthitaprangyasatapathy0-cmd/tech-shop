import { useContext } from "react"
import { shopContext } from "../Context/context"
import { Link } from "react-router-dom"

export   function Wishlist(){
    const{whislist,text}=useContext(shopContext)
    return(
        <>
        <h2>Wishlist</h2>
        {whislist.map((data) => (
                            <Link style={{ textDecoration: "none", color: "inherit" }}  key={data.id} to={`/detiles/${data.id}`}>

                            <div className='card'>

                                <img style={{ height: '200px', width: '250px' }} src={data.image} alt="" />
                                <div className='cardContex'>
                                    <h4>{data.brand}</h4>
                                    <span>{data.title}</span>
                                    <br />
                                    <span className='MainPrice'>₹{data.price}<span className='actulPrice'> ₹{data.originalPrice}</span> <span className='percent'>({data.discountPercent}%OFF)</span></span>
                                    <br />
                                </div>
                              


                            </div>
                           </Link>
                        ))}
 {/* {text?.length > 0 &&
                    text.map((op, i) => (
                        <ul  key={i}>
                            <li className="l1"> {op.name}  </li>
                            <li><span>City:</span> {op.city} </li>
                            <li><span>Phone: </span>  {op.phone}</li>
                            <li> <span>Address:</span> {op.address}</li>

                            <button onClick={() => getsomeId(op.id)}>Edit</button>

                        </ul>
                    ))
                } */}

                        


        </>
    )

}