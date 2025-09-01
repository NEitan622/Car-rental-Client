import { useDispatch, useSelector } from "react-redux"
import { Car } from "./Car"
import { useState } from "react"
import Swal from "sweetalert2"
import { deleteCar } from "./redux/Actions"

export const AllCars = () => {

   
    const cars = useSelector(store => store.cars)
    // console.log(cars);
    const models = useSelector(store => store.modelCar)
    const typeCar = useSelector(store => store.typeCar)
    const typeDrive = useSelector(store => store.typeDrive)
    {/* הוספת כפתור למחיקה - חדש!!!!!!!!!!!!!*/}
    let dis = useDispatch()
    const user=useSelector(store=>store.currentUser)
    // console.log(models.length);

    const findModel = (codeM) => {
        for (let i = 0; i < models.length; i++) {
            if (models[i].codeM == codeM)
                return models[i]
        }

        return models[0];
    }
    const findTypeCar = (codeM) => {
        const f = findModel(codeM).codeTC;
        console.log(f);

        for (let i = 0; i < typeCar.length; i++) {
            if (typeCar[i].codeTC == f) {
                return typeCar[i];
            }
        }
        return typeCar[0]
    }
    const findTypeDrive = (codeD) => {

        for (let i = 0; i < typeDrive.length; i++) {
            if (typeDrive[i].codeD == codeD) {
                return typeDrive[i]
            }
        }
        return typeDrive[0]
    }
    const [comp, setcompany] = useState()
    {/* הוספת כפתור למחיקה - חדש!!!!!!!!!!!!!*/}
    const delCar=(ind)=>{
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
                confirmButton: "btn btn-success",
                cancelButton: "btn btn-danger"
            },
            buttonsStyling: true
        });
        swalWithBootstrapButtons.fire({
            title: "האם אתה בטוח?",
            text: "לאחר המחיקה לא ניתן להתחרט",
            icon: "question",
            showCancelButton: true,
            confirmButtonText: "אישור",
            cancelButtonText: "ביטול",
            reverseButtons: true
        }).then((result) => {
            if (result.isConfirmed) {
                swalWithBootstrapButtons.fire({
                    title: "נמחק",
                    text: " המחיקה בוצעה בהצלחה",
                    icon: "success"
                });
                dis(deleteCar(ind))
            } else if (
                /* Read more about handling dismissals below */
                result.dismiss === Swal.DismissReason.cancel
            ) {
                  swalWithBootstrapButtons.fire({
                    title: "!בוטל",
                    text: "הרכב מופיע במאגר ההשכרה",
                    icon: "info"
                  });
            }
        });
    
    }
    

    return <>
    
        <select className="selectC" onChange={(e) => setcompany(e.target.value)}>
            <option className="optionC" disabled selected>בחר סוג רכב</option>
            {/* הפרמטר הראשון - האיבר הנוכחי במערך */}
            {/* הפרמטר השני - האינדקס */}
            {typeCar.map((item, index) => <option className="optionC" key={index} value={item.discription}>{item.discription}</option>)}
        </select>
        {/* Products.jsx:19 Warning: Each child in a list should have a unique "key" prop. */}                                                                                                                                                          
      
      <div className="AllC">  {cars.map((item, index) => !comp && <div  className="card"  ><Car car={item} scomp={item.company} key={index} company={findModel(item.codeM).company} model={findModel(item.codeM).model} typeCar={findTypeCar(item.codeM).description} numSeats={item.numSeats} street={item.street} city={item.city} isEmpty={item.empty} typeDrive={findTypeDrive(item.codeD).discription} pic={item.pic} allc={true}></Car>
        {/* הוספת כפתור למחיקה - חדש!!!!!!!!!!!!!*/}
        {user&&user.typeCode==2&&<button id="del" onClick={() => delCar(index)}>מחק רכב</button>}
        </div> )
        }
        {cars.map((item, index) => findTypeCar(item.codeM).discription==comp &&<div  className="card"  > <Car car={item} key={index} company={findModel(item.codeM).company} model={findModel(item.codeM).model} typeCar={findTypeCar(item.codeM).description} numSeats={item.numSeats} street={item.street} city={item.city} isEmpty={item.empty} typeDrive={findTypeDrive(item.codeD).discription} pic={item.pic} allc={true}></Car>
        {/* הוספת כפתור למחיקה - חדש!!!!!!!!!!!!!*/}
        {user&&user.typeCode==2&&<button id="del"onClick={() => delCar(index)}>מחק רכב</button>}
        </div>)
        }
        </div>
        

    </>

}

