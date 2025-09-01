// חדש!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// איך מסתירים את כפתור השליחה???????????????????? לאחר ביצוע הפעולה
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addModelCar } from "./redux/Actions";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";

export const Models = () => {
    const models = useSelector(store => store.modelCar)
    const typeCar = useSelector(store => store.typeCar)
    const [comp, setcompany] = useState()
    const [flag, setflag] = useState(true)
    const [CodeTC, setCodeTC] = useState()
    const [addModel, setaddModel] = useState(false)
    const [errors, setErrors] = useState({})
    const dis = useDispatch()
    const navigate=useNavigate()
    // console.log(models);

    const findModel = (codeM) => {
        for (let i = 0; i < models.length; i++) {
            if (models[i].codeM == codeM)
                return models[i]
        }

        return models[0];
    }
    const checkName = (value) => {
        let nameRegex = /^[א-ת]{2}[א-ת" "]{0,20}$/
        if (!value.match(nameRegex)) {
            setErrors({ ...errors, company: ' הכנס שם  בעברית בלבד*' })
            console.log('erro');

        }
        else {
            setErrors({ ...errors, company: '' })
            console.log('good');

        }
    }
    const checkNameM = (value) => {
        let nameRegex = /^[א-ת]{2}[א-ת" "]{0,20}$/
        if (!value.match(nameRegex)) {
            setErrors({ ...errors, model: ' הכנס שם בעברית בלבד*' })
            console.log('erro');

        }
        else {
            setErrors({ ...errors, model: '' })
            console.log('good');

        }
    }
    const send = (event) => {

        event.preventDefault();
        const modelCar = {
            codeM: models[models.length - 1].codeM + 1,
            company: event.target[0].value,
            model: event.target[1].value,
            codeTC: CodeTC

        }
        dis(addModelCar(modelCar))
        console.log(models);

    }
    const models1 = useSelector(store => store.modelCar)
    console.log(models1);
    const saveCode = (event) => {
        for (let i = 0; i < typeCar.length; i++) {

            if (typeCar[i].description == event) {
                //return models[i].CodeTC
                setCodeTC(typeCar[i].codeTC)
                console.log(typeCar[i].codeTC);

            }
        }

    }
    const addModels = (e) => {
        setaddModel(true)
        e.target.hidden = true;
        setflag(false)

    }
    const deleteb = (e) => {
        // e.target.hidden = true;
        const Toast = Swal.mixin({
            toast: true,
            position: "center",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.onmouseenter = Swal.stopTimer;
              toast.onmouseleave = Swal.resumeTimer;
            }
          });
          Toast.fire({
            icon: "success",
            title: "הדגם נוסף בהצלחה"
          });
          
        setflag(true)
    }

    return <>
        {/* <h1>הדגמים שלנו:  כאן ניתן לצפות בדגמים ולהוסיף דגם!</h1> */}
        {flag && <div className="myDiv">

            <select className="select" onChange={(e) => setcompany(e.target.value)}>
                <option className="option" disabled selected>בחר דגם:</option>
                {/* הפרמטר הראשון - האיבר הנוכחי במערך */}
                {/* הפרמטר השני - האינדקס */}
                {models.map((item, index) => <option className="option" key={index} value={item.model}>{item.model}</option>)}
            </select><br></br>
            {models.map((item, index) => !comp && <div className="drivet" key={index}>
                <label className="label">חברה  : {item.company}  </label>
                <label className="label" >דגם : {item.model}  </label>
            </div>)}
            {models.map((item, index) => findModel(item.codeM).model == comp && <div className="drivet" key={index}>
                <label className="label" >חברה  : {item.company}  </label>
                <label className="label" >דגם : {item.model}  </label>
            </div>)}
        </div>}
        <button id="button" onClick={(e) => addModels(e)}> הוספת דגם </button>
        {/* { codeM: 200, company: 'טיוטה', model: '1', codeTC: 300 }, */}
        {addModel && <div className="loginform">
            <h1>הוספת דגם</h1>

            <form onSubmit={(e) => send(e)}>
                <label htmlFor="company" > הכנס שם חברה </label>
                <div className="d1"><input type="text" id="company" className="input" placeholder=" שם חברה" required onChange={(e) => checkName(e.target.value)} />
                    <p className="error">{errors.company}</p></div>

                <label htmlFor="model" >הכנס דגם</label>
                <div className="d1"><input type="text" id="model" className="input" placeholder=" מודל" required onChange={(e) => checkNameM(e.target.value)} />
                    <p className="error">{errors.model}</p></div>
                <h4>בחר סוג רכב:</h4>

                <select className="select" onChange={(e) => saveCode(e.target.value)}>
                    <option className="option" disabled selected>בחר סוג רכב:</option>
                    {/* הפרמטר הראשון - האיבר הנוכחי במערך */}
                    {/* הפרמטר השני - האינדקס */}
                    {typeCar.map((item, index) => <option className="option" key={index} value={item.discription}>{item.discription}</option>)}
                </select>

                <input onClick={(e) => deleteb(e)} type={"submit"} className="input" />
            </form>
        </div>}
    </>
}