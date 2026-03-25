
 import { Children, createContext, useState } from "react"
 export const shopContext=createContext();
 
 export function MainProvider({children}){
    const[cartItem,SetCartitem]=useState([])
    const[whislist,SetWishlist]=useState([])
     const [text, SetText] = useState([]);
    const[islog,Setislog]=useState(false)
    const[mony,SetMony]=useState(0)


    const addToCart=(item)=>{
         
        SetCartitem((cartItem)=>[...cartItem,item])

    }
    const addWish=(wish)=>{

        SetWishlist((whislist)=>[...whislist,wish])
    }

    return(
        <>
        <shopContext.Provider value={{addToCart,cartItem,SetCartitem,addWish,whislist,islog,Setislog,text, SetText,mony,SetMony}}>
            {children}
        </shopContext.Provider>


        </>
    )
 }