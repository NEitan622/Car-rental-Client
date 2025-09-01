import { useSelector } from "react-redux"
import { Car } from "./Car"
import { useState } from "react"
import { useNavigate } from "react-router"

export const AllCars = () => {
    // יש להראות אייקון של המשתמש 
    // const users = useSelector(store => store.users)
    const cars = useSelector(store => store.cars)
    // console.log(cars);
    const models = useSelector(store => store.modelCar)
    const typeCar = useSelector(store => store.typeCar)
    const typeDrive = useSelector(store => store.typeDrive)
    const navigate=useNavigate()
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

    return <>
        {/* company, modle, typeCar, numSeats, place, isEmpty, typeDrive,pic */}
        {/* <Car company={'Toyota'} modle={'corola'}  typeCar={'משפחתי'} numSeats={5} place={'פנים מאירות'} isEmpty={false} typeDrive={'דלק'} pic={'יונדאי3'}></Car> */}
        {/*                                (codeM מופיע בכאר) modelCar   modelCar 
            typeCar מופיע בטבלת typeCar והקוד מופיע במודל ונקרא codeTC 
            typeDrive נמצא בטבלת typeDrive קוד מופיע בכאר בשם codeD */}

        {/*codeM, commpany, model, codeTC  */}
        {/* <input id="Toyota" onClick={(e)=>saveValue(e.target.value)}></input> */}
        <h4>בחר חברה:</h4>
        <select onChange={(e) => setcompany(e.target.value)}>
            <option disabled selected>בחר חברה:</option>
            {/* הפרמטר הראשון - האיבר הנוכחי במערך */}
            {/* הפרמטר השני - האינדקס */}
            {models.map((item, index) => <option key={index} value={item.company}>{item.company}</option>)}
        </select>

        {cars.map((item, index) => !comp && <Car car={item} scomp={item.company} key={index} company={findModel(item.codeM).company} model={findModel(item.codeM).model} typeCar={findTypeCar(item.codeM).description} numSeats={item.numSeats} street={item.street} city={item.city} isEmpty={item.isEmpty} typeDrive={findTypeDrive(item.codeD).description} pic={item.pic}></Car> )}
        {cars.map((item, index) => findModel(item.codeM).company==comp && <Car car={item} key={index} company={findModel(item.codeM).company} model={findModel(item.codeM).model} typeCar={findTypeCar(item.codeM).description} numSeats={item.numSeats} street={item.street} city={item.city} isEmpty={item.isEmpty} typeDrive={findTypeDrive(item.codeD).description} pic={item.pic}></Car>)}
    </>

}