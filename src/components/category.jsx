import { Link } from "react-router-dom";
import './catagory.css'
import cat1 from '../assets/cat1.jpg'
import cat2 from '../assets/cat2.jpg'
import cat3 from '../assets/cat3.jpg'
import cat4 from '../assets/cat4.jpg'




export function Catagory() {
    return (
        <div className="catagory-container" >
            
                <Link to="/CodingDeskSetup" className="catagory-box">
                    <img src={cat1} alt="" className="images" />
                    <li className="title" >Coding Desk Setup</li>




                </Link>

                <Link to="/StudyEssentials" className="catagory-box">
                    <img src={cat2} alt="" className="images" />

                    <li className="title">Study Essentials</li>


                </Link>
                <Link to="LaptopMobileAccessories" className="catagory-box">
                    <img src={cat3} alt="" className="images" />
                    <li className="title">Laptop & Mobile Accessories</li>

                </Link>
                <Link to="StickersPosters" className="catagory-box">
                    <img src={cat4} alt="" className="images" />


                    <li className="title">Stickers & Posters</li>


                </Link>











            



        </div>
    )
}