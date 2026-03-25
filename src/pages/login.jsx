
import { useContext } from 'react'
import './login.css'
import { shopContext } from '../main'
import { useLocation, useNavigate } from 'react-router-dom';

export function Login(){
  const{islog,Setislog}=useContext(shopContext)
  const location = useLocation();
  const navigate = useNavigate();
  const btnClick=()=>{
    Setislog(!islog);
        navigate(location?.state?.from?.pathname);


  };

    return(
        <>
        


            <div>
  <h2>Login Form</h2>
<div>
  <label htmlFor="email">Email</label><br/>
  <input type="email" placeholder="example@gmail.com" id="email" />
</div>
  <label htmlFor="password">Password</label><br/>
  <input type="password"  placeholder="Enter your password"  id="password" />
</div>
<button onClick={btnClick}>Login as guest</button>
        

        
   



        </>
    )
}