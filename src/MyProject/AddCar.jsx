// חדש לא להעתקה עדין:)
import { useRef, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addCar, addModelCar } from "./redux/Actions";
import swal from "sweetalert";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";
// חדש
export const AddCar = () => {

    const cars = useSelector(store => store.cars)
    const typeCar = useSelector(store => store.typeCar)
    const [mod, setmod] = useState()
    const [CodeTC, setCodeTC] = useState()
    const [addModel, setaddModel] = useState(false)
    const [errors, setErrors] = useState('')
    const dis = useDispatch()
    const navigate= useNavigate()
    // ----------------Ref---------------

    const refLicensing = useRef()

    {/* ????????????????? codeCar   codeM*/ }

    const refNumSeats = useRef()
    const refPic = useRef()
    const refYear = useRef()
    const refGir = useRef()
    const refPricePhour = useRef()
    const refNeedkmsh = useRef()
    const refLiterLeft = useRef()
    const refStreet = useRef()
    const refCity = useRef()
    const refEmpty = useRef()



    const send = (event) => {
        if(errors.city==""&&errors.left==""&&errors.licensing==""&&errors.need==""&&errors.numSeats==""&&errors.price==""&&errors.street==""&&errors.year==""){
console.log(errors);

        event.preventDefault();
        const car = {
            codeCar: cars[cars.length - 1].codeCar + 1,
            licensing: refLicensing.current.value,
            codeM: mod,
            numSeats: refNumSeats.current.value,
            pic: refPic.current.value,
            year: refYear.current.value,
            gir: refGir.current.value,
            pricePhour: refPricePhour.current.value,
            needkmsh: refNeedkmsh.current.value,
            literLeft: refLiterLeft.current.value,
            street: refStreet.current.value,
            city: refCity.current.value,
            empty: true,
           
        }
        dis(addCar(car))
        // swal(`שלום   מנהל יקר`,' הרכב נוסף בהצלחה','success')
        let timerInterval;
Swal.fire({
  title: "אנו מוסיפים את הרכב החדש למאגר",
  html: "אנא המתן <b></b> שניות.",
  timer: 2000,
  timerProgressBar: true,
  didOpen: () => {
    Swal.showLoading();
    const timer = Swal.getPopup().querySelector("b");
    timerInterval = setInterval(() => {
      timer.textContent = `${Swal.getTimerLeft()}`;
    }, 100);
  },
  willClose: () => {
    clearInterval(timerInterval);
  }
}).then((result) => {
  /* Read more about handling dismissals below */
  if (result.dismiss === Swal.DismissReason.timer) {
    console.log("I was closed by the timer");
  }
});

        navigate(`/allcars`)
    }
    else{
       swal(` מנהל יקר`,' ישנן שגיאות במילוי הפרטים  ','error')
    }
    }

    console.log(cars);
    console.log(cars);
    const cars1 = useSelector(store => store.cars)
    console.log(cars1);
    
    const savePic = (event) => {
        for (let i = 0; i < cars.length; i++) {
            if (cars[i].pic == event) {
                setmod(cars[i].codeM)
            }
        }
    }
    const checklicensing = (value) => {
        let idRegex = /^[0-9]{7,9}$/
        if (!value.match(idRegex)) {
            setErrors({ ...errors, licensing: ' מספר רישוי לא תקין*' })
        }
        else {
            setErrors({ ...errors, licensing: '' })
            //counter += 1
        }
    }
    const checkprice = (value) => {
        let priceRegex = /^[0-9]{1,2}[.]{0,1}[0-9]{1,2}$/
        if (!value.match(priceRegex)) {
            setErrors({ ...errors, price: ' מחיר לא תקין*' })
        }
        else {
            setErrors({ ...errors, price: '' })
            //counter += 1
        }
    }
    const checkneed = (value) => {
        let needRegex = /^[0-9]{1,2}[.]{0,1}[0-9]{1,2}$/

        if (!value.match(needRegex) || parseInt(value) > 25) {
            setErrors({ ...errors, need: ' צריכה לא הגיונית*' })
        }
        else {
            setErrors({ ...errors, need: '' })
            //counter += 1
        }
    }
    const checkleft = (value) => {
        let leftRegex = /^[0-9]{1,4}[.]{0,1}[0-9]{0,2}$/

        if (!value.match(leftRegex) || parseInt(value) > 900) {
            setErrors({ ...errors, left: ' כמות לא הגיונית*' })
        }
        else {
            setErrors({ ...errors, left: '' })
            //counter += 1
        }
    }
    const checknumSeats = value => {
        let idRegex = /^[0-9]{1,2}$/
        if (!value.match(idRegex) || parseInt(value) < 2 || parseInt(value) > 30) {
            setErrors({ ...errors, numSeats: ' מספר מקומות לא תקין*' })
        }
        else {
            setErrors({ ...errors, numSeats: '' })
        }

    }
    const checkyear = value => {
        let idRegex = /^[0-9]{4}$/
        if (!value.match(idRegex) || parseInt(value) < 1990 || parseInt(value) > 2024) {
            setErrors({ ...errors, year: 'שנה לא תקינה   *' })
        }

        else {
            setErrors({ ...errors, year: '' })
        }
    }
    const checkStreet = (value) => {
        let nameRegex = /^[א-ת]{2}[א-ת" "]{0,20}$/
        if (!value.match(nameRegex)) {
            setErrors({ ...errors, street: ' הכנס רחוב בעברית בלבד*' })

        }
        else {
            setErrors({ ...errors, street: '' })


        }
    }
    const checkCity = (value) => {
        let nameRegex = /^[א-ת]{2}[א-ת" "]{0,20}$/
        if (!value.match(nameRegex)) {
            setErrors({ ...errors, city: ' הכנס עיר בעברית בלבד*' })
        }
        else {
            setErrors({ ...errors, city: '' })
        }
    }
    return <>
        {/* ????????????????? codeCar   codeM*/}
        {/* // { codeCar: 500, licensing: '1234', codeM: 200, numSeats: '5', pic: 'יונדאי3', */}
        {/* // year: '2020', gir: true, codeD: '400', pricePhour: '20', needkmsh: '5', literLeft: '6',
    // street: 'פתח תקןןה', city: 'ירושלים', empty: true }, */}

        <div className="faddcar">
            <h1>הוספת רכב חדש</h1>

            {/* <form onSubmit={(e) => send(e)}> */}

            <label htmlFor="licensing" > הכנס מספר רישוי </label>
            <div className="d1"><input ref={refLicensing} type="text" id="licensing" className="input" placeholder=" מספר רישוי" required onChange={(e) => checklicensing(e.target.value)} />
                <p className="error">{errors.licensing}</p></div>


            <label htmlFor="numSeats" >הכנס מספר מקומות</label>
            <div className="d1"><input ref={refNumSeats} type="text" id="numSeats" className="input" placeholder=" מקומות" required onChange={(e) => checknumSeats(e.target.value)} />
                <p className="error">{errors.numSeats}</p></div>

            <h4>בחר תמונה מתוך המאגר:</h4>
            <select className="select" ref={refPic} onChange={(e) => savePic(e.target.value)}>
                <option className="option" disabled selected>בחר תמונה:</option>
                {/* הפרמטר הראשון - האיבר הנוכחי במערך */}
                {/* הפרמטר השני - האינדקס */}
                {cars.map((item, index) => <option className="option" key={index} value={item.pic}>{item.pic}</option>)}
            </select>
            <br></br>

            <label htmlFor="year" >הכנס שנה </label>
            <div className="d1"><input ref={refYear} type="text" id="year" className="input" placeholder=" שנה" required onChange={(e) => checkyear(e.target.value)} />
                <p className="error">{errors.year}</p></div>

            <label htmlFor="auto"> גיר אוטומטי</label>
            <input type="radio" name="s" id="auto" ref={refGir} />
            <label htmlFor="manual">גיר ידני</label>
            <input type="radio" name="s" id="manual" ref={refGir} /><br></br><br></br>
            {/* </form> */}

            <label htmlFor="price" >הכנס מחיר לשעה</label>
            <div className="d1"><input ref={refPricePhour} type="text" id="price" className="input" placeholder=" מחיר לשעה" required onChange={(e) => checkprice(e.target.value)} />
                <p className="error">{errors.price}</p></div>


            <label htmlFor="need" >הכנס צריכת דלק לקמ"ש</label>
            <div className="d1"><input ref={refNeedkmsh} type="text" id="need" className="input" placeholder=" צריכה לקמש" required onChange={(e) => checkneed(e.target.value)} />
                <p className="error">{errors.need}</p></div>


            <label htmlFor="left">הכנס את כמות הליטר במיכל כרגע</label>
            <div className="d1"><input ref={refLiterLeft} type="text" id="left" className="input" placeholder=" כמות הליטר במיכל " required onChange={(e) => checkleft(e.target.value)} />
                <p className="error">{errors.left}</p></div>

            <label htmlFor="street">הכנס את הרחוב בו נמצא הרכב</label>
            <div className="d1"><input ref={refStreet} type="text" id="street" className="input" placeholder="  רחוב " required onChange={(e) => checkStreet(e.target.value)} />
                <p className="error">{errors.street}</p></div>

            <label htmlFor="city">הכנס את עיר בה נמצא הרכב</label>
            <div className="d1"><input ref={refCity} type="text" id="city" className="input" placeholder="  עיר " required onChange={(e) => checkCity(e.target.value)} />
                <p className="error">{errors.city}</p></div>

            <input onClick={send} type={"submit"} className="input" />


        </div>



    </>
}
