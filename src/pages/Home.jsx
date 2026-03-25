import { useState } from "react";
import jsonData from "../Database/data.json";
import { Route, Routes } from "react-router-dom";
import hero from"../assets/hero.webp";
import { Catagory } from "../components/catagory";
import Footer from "./footer";

export default function Home() {
  const[loading,SetLoading]=useState(true)
  

  return (
    < div  className="home">
        <div style={{ position: "relative" }}>
       {loading && (
          <div className="hero-loader"></div>
        )}
    
      <img src={hero} alt=""  onLoad={() => SetLoading(false)} style={{width:"100%",height:"400px",marginTop:"10px"}} />
    </div>
    <Catagory/>


      {/* {data.filter(op=>op.category==="Stickers & Posters").map(item => (
        <div key={item.id}>
            <img src={item.image}alt=""  style={{width:"420px"}} />
          <h3>{item.title}</h3>
          <p>₹{item.price}</p>
          
        </div>
      ))} */}

      <Footer/>

    </div>
  );
}
