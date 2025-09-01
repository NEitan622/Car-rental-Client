import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"

import { useParams } from "react-router"
import { addLend, updateEmpty } from "./redux/Actions"

export const Lend = () => {
    {/* מספר רישוי, תאריך ושעה, אישור, שמירה במערכת, עדכון תפוס, קוד השאלה */ }
    const params = useParams()
    const car = useSelector(store => store.selectedCar)
    const cars = useSelector(store => store.cars)
    const cu = useSelector(store => store.currentUser)
    const lends=useSelector(store=>store.lends)
    const { licensing, codeCar } = params
    const [message, setMessage] = useState('')
    const dis = useDispatch()
/// 
    // const ccar = (codeC) => {
    //     for (let i = 0; i < cars.length; i++) {
    //         if (cars[i].codeC == codeC)
    //             cars[i].empty = true
    //     }
    // }

    const send = (event) => {
        event.preventDefault();
       
        event.target.hidden = true
        // codeL: '600', codeU: '104', codeCar: '', date: {}, hour: '' },
        console.log(car.empty);
        const lend = {
            codeL:(lends[lends.length-1].codeL)+1,
            codeU: cu.codeU,
            codeCar: car.codeCar,
            date: { day: '16', month: '8', year: '2024' },
            hour: { h: '16', m: 30 }
        }
        console.log(cu.codeU);
        // ccar(car.codeC)
    
        
        dis(addLend(lend))
        setMessage(`קוד השאלה: ${lend.codeL} שמור לעת החזרת רכב`)
        dis(updateEmpty(car,false))
        console.log(car.empty);
        // dis(updateCar())
        console.log(car);


    }
    const l = useSelector(store => store.cars)
    console.log(l);
const now=new Date().toDateString();

    return <>
        <div className="lendform">
            <h1>טופס השאלת רכב</h1>
            <p >מספר רישוי: {licensing}</p>
            <p >{now}</p>
            {message != '' && <h4>{message}</h4>}
            <button className="ok" onClick={(e) => send(e)} >אישור</button>
        </div>
    </>
}