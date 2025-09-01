import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addReturn, updateCity, updateEmpty, updateLiterLeft, updateStreet } from "./redux/Actions"
import Swal from "sweetalert2"
import swal from "sweetalert"

export const ReturnCar = () => {
    const [error, setErrors] = useState('')
    const [flagR, setFlagR] = useState(true)
    const [flagP, setFlagP] = useState(false)
    const car = useSelector(store => store.cars)
    const rent = useSelector(store => store.returns)
    const typeDrive = useSelector(store => store.typeDrive)
    const [codeL, setCode] = useState()
    const [liter, setLiter] = useState()
    const [city, setCity] = useState()
    const [street, setStreet] = useState()
    const dis = useDispatch()

    const checkName = (value) => {
        let nameRegex = /^[א-ת]{2}[א-ת " "]{0,20}$/
        if (!value.match(nameRegex)) {
            setErrors({ ...error, city: ' הזן נתונים בעברית בלבד*' })

        }
        else {
            setErrors({ ...error, city: '' })
            setCity(value)
        }
    }

    const checkName1 = (value) => {
        let nameRegex = /^[א-ת]{2}[א-ת " "]{0,20}$/
        if (!value.match(nameRegex)) {
            setErrors({ ...error, street: ' הזן נתונים בעברית בלבד*' })

        }
        else {
            setErrors({ ...error, street: '' })
            setStreet(value)
        }
    }

    const chekLiter = (value) => {

        let nameRegex = /^[0-9]{1,2}[.]{0,1}[0-9]{0,2}$/

        if (!value.match(nameRegex)) {
            setErrors({ ...error, liter: 'הזן ספרות בלבד*' })
        }
        else {
            setErrors({ ...error, liter: '' })
            setLiter(value)
        }
    }

    const lend = useSelector(store => store.lends)

    const checkCodeLl = (event) => {

        let c = lend.filter(x => x.codeL == event)[0]
        if (!c) {
            setErrors({ ...error, codeLl: '  קוד ההשאלה אינו תקין*' })

        }

        else {
            setErrors({ ...error, codeLl: '' })
            setCode(event)
        }
    }

    const checkVisaNum = (value) => {
        let visaRegex = /^[0-9]{16}$/
        if (!value.match(visaRegex)) {
            setErrors({ ...error, visaNum: 'מספר אשראי לא תקין*' })
        }
        else {
            setErrors({ ...error, visaNum: '' })
            //counter += 1
        }
    }
    const checkEx = (value) => {
        let exRegex = /^[0-9]{2}[/]{1}[0-9]{2}$/
        if (!value.match(exRegex)) {
            setErrors({ ...error, ex: '  תוקף לא חוקי*' })
        }
        else {
            setErrors({ ...error, ex: '' })
            //counter += 1
        }
    }
    const checkCvv = (value) => {
        let cvvRegex = /^[0-9]{3}$/
        if (!value.match(cvvRegex)) {
            setErrors({ ...error, cvv: ' הכנס 3 ספרות*' })
        }
        else {
            setErrors({ ...error, cvv: '' })
            // counter += 1
        }
    }
    const chekId = (value) => {
        let idRegex = /^[0-9]{9}$/
        if (!value.match(idRegex)) {
            setErrors({ ...error, id: 'מספר זהות לא תקין*' })
        }
        else {
            setErrors({ ...error, id: '' })
            // counter += 1
        }
    }
    //פונקציה המחזירה את קוד הרכב שהלקוח מעונין להחזיר ע"מ שנוכל לעדכן את הרכב כפנוי
    const findCodeCar = (codeL) => {
        let i
        for (i = 0; i < lend.length; i++) {
            if (lend[i].codeL == codeL) {
                return lend[i]
                // .codeCar
            }

        }
        return lend[0]
    }
    const codeCar = findCodeCar(codeL).codeCar

    //פונקציה המחפשת את הרכב המוחזר כעת
    const findCar = (codeCar) => {
        for (let i = 0; i < car.length; i++) {
            if (car[i].codeCar == codeCar) {
                return car[i]
            }
        }

        return car[0]
    }
    const thisCar = findCar(codeCar)
    // console.log(thisCar.date);
    //פונקציה המחפשת את מחיר ההנעה לליטר 
    const findPrice = (thisCar) => {
        for (let i = 0; i < typeDrive.length; i++) {
            if (typeDrive[i].codeD == thisCar.codeD)
                return typeDrive[i].priceL
        }
    }
    const priceL = findPrice(thisCar)


    const send = (event) => {
        if ((error.codeLl == "" && error.city == "" && error.street == "" && error.liter == "")||
    (error.id==""&&error.visaNum&&error.ex==""&&error.cvv=="")) {


            const rentDate = findCodeCar(codeL).date; // נניח שזה בפורמט ISO 8601 או פורמט אחר תואם
           

            const now = new Date();
           
            // מפחית 3 שעות מהחשבון ללא סיבה
            const currentDateTimeISO = now.toISOString(); // תאריך נוכחי בפורמט ISO

            // המר את התאריכים לאובייקטי Date
            const dateObj1 = new Date(rentDate); // נניח שrentDate הוא בפורמט תואם

            const dateObj2 = new Date(currentDateTimeISO);
            // console.log(dateObj2);

            // חשב את ההפרש במילישניות
            const diffInMs = (dateObj2 - dateObj1);
            // console.log(diffInMs);

            // המרה לשעות (מילישניות ב-1 שעה = 3600000 מילישניות)
            const diffInHours = diffInMs / 3600000;
            // console.log(diffInHours);
            // עיגול התוצאה לשתי ספרות אחרי הנקודה
            const roundedDiffInHours = (diffInHours.toFixed(2));
            //  codeR: '700', codeL: 602, date: '', hour: '', leftL: '', pay: '', isPaid: false
            // console.log(roundedDiffInHours);
            let pay = 0
            //roundedDiffInHours ע"מ שיצא מחיר נכון הכפלתי פי 2.3 את 
            if ((parseInt(liter) > thisCar.literLeft)) {
                pay = (thisCar.pricePhour) * roundedDiffInHours - ((parseInt(liter) - thisCar.literLeft) * priceL)
                console.log(pay);
                // עיגול התוצאה לשתי ספרות אחרי הנקודה
                pay = (pay.toFixed(2));
                // console.log(pay);

                console.log(thisCar.literLeft);

                console.log(priceL);
                console.log((parseInt(liter) - thisCar.literLeft) * priceL);


                //  
            }
            //  if(parseInt(liter<thisCar.literLeft)){
            else {
                pay = (thisCar.pricePhour) * roundedDiffInHours + ((thisCar.literLeft - parseInt(liter)) * priceL)
                console.log(thisCar.literLeft);
                console.log(priceL);
                console.log((parseInt(liter) - thisCar.literLeft) * priceL);
                // 
            }
            if(pay!='NaN'){


            const swalWithBootstrapButtons = Swal.mixin({
                customClass: {
                    confirmButton: "btn btn-success",
                    cancelButton: "btn btn-danger"
                },
                buttonsStyling: true
            });
            swalWithBootstrapButtons.fire({
                title: `הסכום לתשלום הנו: ₪${pay} `,
                text: " ?האם לחייב בכרטיס אשראי השמור במערכת",
                icon: "question",
                showCancelButton: true,
                confirmButtonText: "אישור",
                cancelButtonText: "כרטיס אחר",
                reverseButtons: true
            }).then((result) => {
                if (result.isConfirmed) {
                    swalWithBootstrapButtons.fire({
                        title: "אושר",
                        text: "התשלום בוצע בהצלחה",
                        icon: "success"
                    });
                } else if (
                    /* Read more about handling dismissals below */
                    result.dismiss === Swal.DismissReason.cancel,
                    setFlagP(true),
                    setFlagR(false)

                ) {
                 
                }
            });
        }
        else{
            swal(`שלום`,'אין סכום לתשלום','info')
        }
            event.preventDefault();
            let returnC = {
                codeR: rent[rent.length - 1].codeR + 1,
                codeL: parseInt(codeL),
                date: now,
                left: parseInt(liter),
                pay: pay,
                isPay: true,
            }
            dis(addReturn(returnC))
            dis(updateEmpty(thisCar, true))
            dis(updateCity(thisCar, city))
            dis(updateStreet(thisCar, street))
            dis(updateLiterLeft(thisCar, parseInt(liter)))

        }
        else {
            swal(`הנתונים שהזנת שגויים  `, 'אנא נסה שוב', 'error')


        }

    }


    return <>
        {flagR && <div className="retrunform" onSubmit={(e) => send(e)}>
            <h1>טופס החזרת רכב</h1>
            <form >
                <label htmlFor="codeLl" >הזן קוד השאלה</label>
                <div className="d1"><input type="text" id="codeLl" className="input" placeholder="קוד השאלה" required onChange={(e) => checkCodeLl(e.target.value)} />
                    <p className="error">{error.codeLl}</p></div>

                <label htmlFor="city" >הזן את שם העיר בו נמצא הרכב </label>
                <div className="d1"><input type="text" id="city" className="input" placeholder=" עיר" required onChange={(e) => checkName(e.target.value)} />
                    <p className="error">{error.city}</p></div>

                <label htmlFor="street" >הזן את שם הרחוב בו נמצא הרכב</label>
                <div className="d1"> <input type="text" id="street" className="input" placeholder=" רחוב" required onChange={(e) => checkName1(e.target.value)} />
                    <p className="error">{error.street}</p></div>

                <label htmlFor="liter" >הזן יתרת ליטר </label>
                <div className="d1"> <input type="text" id="liter" className="input" placeholder=" יתרת ליטר" required onChange={(e) => chekLiter(e.target.value)} />
                    <p className="error">{error.liter}</p></div>

                <input type={"submit"} className="input" />
            </form>
        </div>}

        {flagP && <div className="retrunform">
            <h1>טופס פרטי אשראי</h1>
            <form onSubmit={(e) => send(e)} >

                <label htmlFor="id" className="lable"></label>הכנס מספר זהות של בעל הכרטיס<br></br>
                <div className="d1"><input type="text" id='id' placeholder="מ.ז" className="input" required onChange={(e) => chekId(e.target.value)}></input>
                    <p className="error">{error.id}</p>
                </div>

                <label htmlFor="visaNum" className="lable"> הכנס מספר אשראי </label>
                <div className="d1"><input type="text" id='visaNum' placeholder="מספר אשראי" className="input" required onChange={(e) => checkVisaNum(e.target.value)}></input>
                    <p className="error">{error.visaNum}</p></div>

                <label htmlFor="ex" className="lable">הכנס תוקף כרטיס </label><br></br>
                <div className="d1"><input type="text" id='ex' placeholder="תוקף " className="input" required onChange={(e) => checkEx(e.target.value)}></input>
                    <p className="error">{error.ex}</p></div>

                <label htmlFor="cvv" className="lable">הכנס 3 ספרות </label><br></br>
                <div className="d1"><input type="text" id='cvv' placeholder="cvv" className="input" required onChange={(e) => checkCvv(e.target.value)}></input>
                    <p className="error">{error.cvv}</p>
                </div>

                <input className="input" type={'submit'} />
            </form>
        </div>}
    </>
}