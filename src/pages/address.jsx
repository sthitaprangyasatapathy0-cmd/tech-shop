import { useContext, useState } from "react"
import './adress.css'
import { shopContext } from "../main";
export function Address() {
    const { text, SetText } = useContext(shopContext)
    const [form, SetForm] = useState(false)
    //const [text, SetText] = useState([]);
    const [tex, SetTet] = useState({ name: "", city: "", phone: "", address: "" })

    function changDef(e) {
        e.preventDefault()
        const newData = {
            id: Date.now(),
            ...tex
        }

        if (tex.id) {
            SetText((prvr) => prvr.map((look) => look.id === tex.id ? tex : look))
        }
        else {
            SetText((prv) => [...prv, newData])
        }

        SetForm(false)


    }



    function handleChange(e) {
        console.log(e.target.name, e.target.value)

        SetTet({ ...tex, [e.target.name]: e.target.value })
        console.log(tex)

    }
    function getsomeId(id) {
        const oneData = text.find(ok => ok.id === id)


        SetTet(oneData)
        SetForm(true)


    }
    function removeAdress(id){
        SetText(text.filter(okk=>okk.id!=id))

    }



    return (
        < div >
            <h2>Adress</h2>

            <button className="adrs" onClick={() => SetForm(true)}>+ Add Address</button>
            <div className="formdel" style={{ alignItems: "center", textAlign: "center" }}>
                {form && <form action="" onSubmit={changDef} >
                    <input value={tex.name} name="name" placeholder="Enter your name" onChange={handleChange} type="text" />
                    <input value={tex.phone} name="phone" placeholder=" 10-digit mobile number " onChange={handleChange} type="number" />


                    <div>
                        <input value={tex.city} name="city" placeholder="Flat/House/Building name" onChange={handleChange} type="text" />
                        <input value={tex.address} name="address" placeholder="City name" onChange={handleChange} type="text" />

                    </div>


                    <button type="submit" >Submit</button>


                </form>

                }
            </div>

            <div>
                {text?.length > 0 &&
                    text.map((op, i) => (
                        <ul key={i}>
                            <li className="l1"> {op.name}  </li>
                            <li><span>City:</span> {op.city} </li>
                            <li><span>Phone: </span>  {op.phone}</li>
                            <li> <span>Address:</span> {op.address}</li>

                            <hr
                                style={{
                                    border: "none",
                                    borderTop: "2px solid #f5f5f5",
                                    width: "100%",
                                    margin: "0"
                                }}
                            />
                            <div className="btnadrs">
                                <div className="b2">
                                    <button onClick={() => getsomeId(op.id)}>Edit</button>
                                </div>
                                <div
                                    style={{
                                        borderLeft: "1px solid #ccc",
                                        height: "50px",
                                        margin: "0 15px"
                                    }}
                                />

                                <div className="b2">
                                    <button onClick={()=>removeAdress(op.id)}>Remove</button>
                                </div>


                            </div>


                        </ul>




                    ))

                }
            </div>






        </div >
    )
}