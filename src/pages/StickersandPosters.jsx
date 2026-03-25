
    

 

 import './DeskSetup.css'
import data from '../Database/data.json'
import { useContext, useState } from 'react';
import { shopContext } from '../Context/context';
import { Link } from 'react-router-dom';
export function Stickers() {
    let mydata = data.filter((desk) => desk.category === 'Stickers & Posters')
    const { addToCart, cartItem } = useContext(shopContext)

    const [value, SetHigh] = useState()
    const [head, SetHead] = useState()
    const [mouse, Setmouse] = useState()
    const [laptop, SetLaptop] = useState()
    const [rating, SetRating] = useState()
     function clerAll(){
          window.location.reload();
        
    }


    return (
        <>
            <h2> DeskSetup</h2>
              <button onClick={clerAll}>ClearAll</button>
            <div className="grid-col">
                <div className='ok'>
                    <div>
                        <h3>Price</h3>


                        <input type="radio" style={{ accentColor: "red" }} name="price" onChange={() => SetHigh("high")} />
                        <span>High to low</span>

                        <input type="radio" style={{ accentColor: "red" }} name="price" onChange={() => SetHigh("low")} />

                        <span>Low to high</span>
                    </div>
                    <div>
                        <h2>categories </h2>
                        <input className='inputCatagory' type="checkbox" style={{ accentColor: "red" }} onChange={(e) => SetHead(e.target.checked ? "Stickers" : '')} /><span>Stickers Pack</span><br />
                        <input className='inputCatagory' type="checkbox" style={{ accentColor: "red" }} onChange={(e) => Setmouse(e.target.checked ? "motivational" : '')} /><span> Motivational Poster </span><br />
                        <input className='inputCatagory' type="checkbox" style={{ accentColor: "red" }} onChange={(e) => SetLaptop(e.target.checked ? "Wall Decal" : '')} /><span> Wall Decal</span>



                    </div>
                    <div>
                        <h3>Rating</h3>
                        <input className='inputRating' type="radio" style={{ accentColor: "red" }} name="rating" onChange={() => SetRating(5)} />
                        <span>5 star&below</span><br />

                        <input className='inputRating' type="radio" style={{ accentColor: "red" }} name="rating" onChange={() => SetRating(4)} />

                        <span>4 star&below</span>
                        <br />
                        <input className='inputRating' type="radio" style={{ accentColor: "red" }} name="rating" onChange={() => SetRating(3)} />

                        <span>3star&below</span>


                    </div>







                </div>

                <div className='cards'>

                    {[...mydata].sort((a, b) => {
                        if ("high" === value) return b.price - a.price;
                        if ("low" === value) return a.price - b.price;
                        return 0;

                    }

                    ).filter((mydata) => {
                        const categoryMatch = (head && mydata.subCategory === head) || (mouse && mydata.subCategory === mouse) || (laptop && mydata.subCategory === laptop) || (!head && !mouse && !laptop);
                        const ratingMatch = (!rating || Number(mydata.rating) <= Number(rating))
                        return categoryMatch && ratingMatch;
                    })

                        .map((data) => (
                            <Link style={{ textDecoration: "none", color: "inherit" }}  key={data.id} to={`/detiles/${data.id}`}>

                            <div className='card'>

                                <img style={{ height: '200px', width: '250px' }} src={data.image} alt="" />
                                <div className='cardContex'>
                                    <span>{data.title} </span>
                                    <br />
                                    <span className='MainPrice'>₹{data.price}<span className='actulPrice'> ₹{data.originalPrice}</span> <span className='percent'>({data.discountPercent}%OFF)</span></span>
                                    <br />
                                </div>
                              


                            </div>
                           </Link>
                        ))


                    }

                </div>




            </div>

        </>
    )
}
    