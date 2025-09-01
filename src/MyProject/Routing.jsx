// יש חדש
import { Route, Routes, } from "react-router-dom"
import { Login } from "./Login"
import { Register } from "./Register"
import { AllCars } from "./AllCars"
import { ReturnCar } from "./ReturnCar"
import { MoreInfo } from "./MoreInfo"
import { Lend } from "./Lend"
import { Car } from "./Car"
// חדש
import { TypeDrive } from "./TypeDrive"
import { Models } from "./Models"
import { AddCar } from "./AddCar"
import { DeleteCar } from "./DeleteCar"
import { AllLends } from "./AllLends"
import { Home } from "./Home"

export const Routing = () => {
    // הצהרות על ניתובים
    return <>
        {/* תגית עוטפת לכל הניתובים */}
        <Routes>
            {/* הצהרה על ניתוב בודד */}
            {/* path - url ניתוב - מה נכתוב בשורת ה */}
            {/* element - הקומפוננטה שנטען עבור הניתוב */}
        <Route path="login" element={<Login></Login>}></Route>
        <Route path="register" element={<Register></Register>}></Route>
        <Route path="allcars" element={<AllCars></AllCars>}></Route>
        <Route path="returncar" element={<ReturnCar></ReturnCar>}></Route>
        <Route path="car" element={<Car></Car>}></Route>
        <Route path="moreinfo" element={<MoreInfo></MoreInfo>}>
        <Route path="lend/:licensing/:codeCar" element={<Lend></Lend>}></Route>
        </Route>
        {/* חדש */}
        <Route path="typedrive" element={<TypeDrive></TypeDrive>}></Route>
        <Route path="home" element={<Home></Home>}></Route>
        <Route path="" element={<Home></Home>}></Route>
        <Route path="models" element={<Models></Models>}></Route>
        <Route path="addcar" element={<AddCar></AddCar>}></Route>
        {/* <Route path="deletecar" element={<DeleteCar></DeleteCar>}></Route> */}
        <Route path="alllends" element={<AllLends></AllLends>}></Route>
    
        </Routes>
        
    </>
}