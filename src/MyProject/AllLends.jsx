import { useState } from "react"
import { useSelector } from "react-redux"

// חדש
export const AllLends = () => {

    const lends = useSelector(store => store.lends)
    const returns = useSelector(store => store.returns)
    const [ret, setRet] = useState('')
    const [ret1, setRet1] = useState('')
    const [index1, setIndex1] = useState('')
    const dateR = (code) => {

        for (let i = 0; i < returns.length; i++) {
            if (returns[i].codeL == code) {
    
                return true;
            }

        }
        return false
    }
    let date=new Date()
    let date1=new Date()
    let d=date
    let d1=date1
    // console.log(ret);
    const show = (index, code) => {
        setIndex1(index)
        date1=new Date(lends[index].date)
        
        d1=(d1).toISOString()

        for (let i = 0; i < returns.length; i++) {
            if (returns[i].codeL == code) {
                date=new Date(returns[i].date)
                   d = (d).toString(); 
                   setRet(d)

            }
        }
        // return returns[0].date
    }
        let yes = 0
        let now=new Date()
        return <>
            {/* <h1>השאלות</h1> */}
            {/* onLoad={chekcret(item.codeL)} */}
<div className="AllL">
            {lends.map((item, index) => <div key={index} className="lend">
                <p className="l1" > קוד ההשאלה:{item.codeL}</p>
                <p className="l1">קוד המשתמש :{item.codeU}</p>
                <p className="l1">קוד רכב :{item.codeCar}</p>
               
                <p className="l1">{item.date}</p>
                {yes = dateR(item.codeL)}
                {yes&&<label className="l2">✅</label>}
                {!yes&&<label className="l2">❌</label>}
                {yes && <div><button onClick={(e) => show(index, item.codeL)} className="Rbutton">תאריך החזרת רכב</button><br></br></div>}
           
                {yes && index1 == index && <lable className="ll">{ret} </lable>}


            </div>)
            }
            </div>
        </>
    }