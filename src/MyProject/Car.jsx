// import { green } from "@mui/material/colors"

import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router"
import swal from "sweetalert"
import { setSelectedCar } from "./redux/Actions"

export const Car = props => {
     const { codecar,
          licensing,
          codeM,
          company,
          model,
          typeCar,
          numSeats,
          street,
          city,
          isEmpty,
          typeDrive,
          pic,
          year,
          gir,
          codeD,
          pricePhour,
          needkmsh,
          literLeft,
          car,
          allc
      } = props

     const reg = useSelector(store => store.currentUser)
     const navigate = useNavigate()
     const dis = useDispatch()
     //console.log(reg);

     const send = (event) => {

          if (reg.username&&allc) {
               // navigate(`/welcome/${user.username}/${user.password}`)
               // /${}
               // /${company}/${model}/${typeCar}/${numSeats}/${street}/${city}/${isEmpty}/${typeDrive}/${pic}
               navigate(`/moreinfo`)
               dis(setSelectedCar(car))

          }
          else if(!reg.username&&allc) {
               swal(`מאופשר רק ללקוחות קיאק`, 'אם הנך לקוח עבור דרך הכניסה', 'error')
          }
     }

     const style = isEmpty ? 'empty' : 'notEmpty'
     return <>
     {/* className="card" */}
          <div  onClick={(e) => send(e)} >

               {/* <img class="card-img-top" src="..." alt="Card image cap"> */}
               <img className="img" src={`${process.env.PUBLIC_URL}/pic/${pic}.png`}></img>
               <div className="card-body">
                    {/* <p class="card-text"></p> */}

                    <label  id="carname"> {company} {'-'} {model}</label>
                    <label className="details" id="d1">{typeCar}</label>
                    <label id="d1" className="details"> מס מקומות : {numSeats} </label>
                    <img className="imgdc" src={`${process.env.PUBLIC_URL}/pic/${typeDrive}.png`}></img>
                    <label className="details">מיקום : {city} {street}</label>   
                    {!allc && <label id="d1" className="details">מחיר לשעה :{pricePhour}</label>}          
                    {!allc && <label className="details">מספר רישוי : {licensing} </label>}
                    {!allc &&gir &&<label className="details" > גיר אוטומטי </label>}
                    {!allc && !gir &&<label className="details">גיר ידני </label>}
                    {!allc && <label  id="d1"className="details">שנה : {year}</label>}
                    
                    {!allc && <label className="details">צורך לשעה {needkmsh} ליטר דלק </label>}
                    {!allc && <label className="details">מיכל מלא כרגע ב {literLeft} ליטר דלק</label>}
                    {isEmpty && <label id="d3" className={style}>פנוי</label>}
                    {!isEmpty && <label id="d3" className={style}>בשימוש כעת</label>}
                    <button   id="button">אני רוצה להזמין</button>

                    {/* <label className="card-text"></label> */}


               </div>
          </div>
     </>
}
