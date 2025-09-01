// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!חדש
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { updateTypeDrivePrice } from "./redux/Actions";
 
export const TypeDrive=()=>{
    const driveTypes=useSelector(store=>store.typeDrive)
    console.log(driveTypes);
    const[change,setChange]=useState(false)
    const[index1,setIndex1]=useState('')
    
    const dis=useDispatch()
    const updatePrice = (index) => {
      setChange(true)
      setIndex1(index)
    //   console.log(true);
      
    }
    const save=(value,dt)=>{
        dis(updateTypeDrivePrice(dt,value))
        // setChange(false)

    }
    const ok=()=>{
         setChange(false)

    }
    return<>
     
    {/* <h1>סוגי ההנעה שלנו</h1> */}
    <div className="t">
    {driveTypes.map((item, index) => <div className="drivet" key={index}> 
        <div className="dt">
        <label className="dtname">שם : {item.discription}  </label><br></br>
        <label>מחיר : {item.priceL}  </label><br></br>
        
        <button  className="but1" onClick={() => updatePrice(index)}>עדכן את המחיר</button></div>
        {change&&index1==index&&<input className="input1" onChange={(e) => save(e.target.value,item)} onMouseLeave={(e) => ok()} placeholder="הכנס מחיר לשינוי"></input>}
    </div> )}</div>

    

    </>
}