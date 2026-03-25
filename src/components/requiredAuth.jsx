import { useContext } from "react"
import { shopContext } from "../Context/context"
import { Navigate, useLocation } from "react-router-dom"

export function RequiredAuth({children}){
    let location = useLocation();
const{islog}=useContext(shopContext)
    return islog?(children):(<Navigate to="/login" state={{from:location}}/>)
};
