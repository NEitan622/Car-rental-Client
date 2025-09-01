import { useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
import { Car } from "./Car";
import swal from "sweetalert";

export const MoreInfo = () => {
    const car = useSelector(store => store.selectedCar)
    const navigate = useNavigate()
    console.log(car);
    const models = useSelector(store => store.modelCar)
    const typeCar = useSelector(store => store.typeCar)
    const typeDrive = useSelector(store => store.typeDrive)
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

    const send = (event) => {
        if (car.empty) {
            navigate(`lend/${car.licensing}/${car.codeCar}`)
        }
        else{
            swal(`רכב זה אינו פנוי כרגע`,'בחר רכב אחר','info')
        }
    }
    return <>
        <Outlet></Outlet>
        <div className="info" onClick={(e) => send(e.target.value)}>
        <Car licensing={car.licensing} year={car.year} gir={car.gir} pricePhour={car.pricePhour} needkmsh={car.needkmsh} literLeft={car.literLeft} company={findModel(car.codeM).company} model={findModel(car.codeM).model} 
    typeCar={findTypeCar(car.codeM).description} numSeats={car.numSeats} street={car.street}
     city={car.city} isEmpty={car.empty} typeDrive={findTypeDrive(car.codeD).description} 
     pic={car.pic} alls={false}></Car>
        </div>
       
    </>

}