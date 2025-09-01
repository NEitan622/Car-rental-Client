import { useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import swal from "sweetalert";
import { addUser, setCurrentUser } from "./redux/Actions";
import './style.css'
export const Register = () => {
   
    const dis = useDispatch()
    const navigate = useNavigate()
    const [errors, setErrors] = useState({})
    // const [flag, setFlag] = useState(true)
   // let counter = 0;
    const users = useSelector(store => store.users)
    const checkName = (value) => {
       let nameRegex = /^[א-ת]{2}[א-ת" "]{0,20}$/
        // match
        // value.match(/regex/)
        if (!value.match(nameRegex)) {
            setErrors({ ...errors, username: 'הכנס שם בעברית בלבד *' })
        }
        else {
            setErrors({ ...errors, username: '' })
            //counter += 1
        }
    }
    const checkId = (value) => {
        let idRegex = /^[0-9]{9}$/
        if (!value.match(idRegex)) {
            setErrors({ ...errors, id: ' מספר זהות לא תקין*'})
        }
        else {
            setErrors({ ...errors, id: '' })
            //counter += 1
        }
    }
    const checkPhone = (value) => {
        let phoneRegex = /^[0-9]{10}$/
        if (!value.match(phoneRegex)) {
            setErrors({ ...errors, phone: 'מספר נייד לא תקין*' })
        }
        else {
            setErrors({ ...errors, phone: '' })
           // counter += 1
        }
    }
    const checkPass = value => {
        if (value.length < 3) {
            setErrors({ ...errors, password: 'סיסמה קצרה מידי*' })
        }
        else if (value.length > 6) {
            setErrors({ ...errors, password: 'סיסמה ארוכה מידי*' })
        }
        else {
            setErrors({ ...errors, password: '' })
            //counter += 1
        }
    }

    const checkVisaNum = (value) => {
        let visaRegex = /^[0-9]{16}$/
        if (!value.match(visaRegex)) {
            setErrors({ ...errors, visaNum: 'מספר אשראי לא תקין*' })
        }
        else {
            setErrors({ ...errors, visaNum: '' })
            //counter += 1
        }
    }
    const checkEx = (value) => {
        let exRegex = /^[0-9]{2}[/]{1}[0-9]{2}$/
        if (!value.match(exRegex)) {
            setErrors({ ...errors, ex: '  תוקף לא חוקי*' })
        }
        else {
            setErrors({ ...errors, ex: '' })
            //counter += 1
        }
    }
    const checkCvv = (value) => {
        let cvvRegex = /^[0-9]{3}$/
        if (!value.match(cvvRegex)) {
            setErrors({ ...errors, cvv: ' הכנס 3 ספרות*' })
        }
        else {
            setErrors({ ...errors, cvv: '' })
           // counter += 1
        }
    }
    const send = (event) => {
        event.preventDefault();
        console.log(event);
        // if (counter != 7) {
        //     swal(`שגיאה `, 'קיימת שגיאה במילוי הנתונים אנא בדוק טופס', 'error')
        //     navigate(`/register`)
        // }
        //else {


            const user = {
                userName: event.target[0].value,
                id: event.target[1].value,
                phone: event.target[2].value,
                password: event.target[3].value,
                visaNum: event.target[4].value,
                ex: event.target[5].value,
                cvv: event.target[6].value,
            }
            let u = users.filter(x => x.id == user.id)[0]
            if (errors.username!=''||errors.phone!=''||errors.password!=''||errors.visaNum!=''||errors.ex!=''||errors.cvv!='') {
              
            }
            else  {
                if(u){
                swal(`שלום ${user.userName}`, 'הנך רשום במערכת ', 'info')
                // /${user.userName}
                navigate(`/allcars`)
                dis(setCurrentUser(user))

            }
            else{
                
                swal(`שלום ${user.userName}`, ' נרשמת בהצלחה למערכת ', 'success')
                navigate(`/allcars`)
                dis(addUser(user))
                dis(setCurrentUser(user))
               
            }
            }
           
       // }
    }
    return <> <div className="registerform">
        <h1>טופס הרשמה</h1>
        {/* { codeU: '100', userName: 'נחמי', id: '328183603', phone: '0556723622', password: '622', visaNum: '4580345612895674', ex: '07/27', cvv: '456', typeCode: '2' }, */}
        {/* איך עושים משתנים שהמשתמש לא יכול לגשת קוד אוטומטי, משתמש רגיל/ מנהל */}
        
        <form onSubmit={(e) => send(e)}>

            {/* רק אותיות */}
            <label htmlFor="username" className="lable">הכנס שם משתמש</label>
            <div className="d1"><input type="text" id='username' placeholder="שם" className="input" required onChange={(e) => checkName(e.target.value)}></input>
            <p className="error">{errors.username}</p>
            </div>
            {/* 9 ספרות */}
            <label htmlFor="id" className="lable"> הכנס מספר זהות</label>
            <div className="d1"><input type="text" id='id' placeholder="מ.ז. " className="input" required onChange={(e) => checkId(e.target.value)}></input>
            <p className="error">{errors.id}</p></div>
            {/*10 ספרות  */}
            <label htmlFor="phone" className="lable">הכנס מספר נייד</label><br></br>
            <div className="d1"><input  type="text" id='phone' placeholder="מספר נייד" className="input" required onChange={(e) => checkPhone(e.target.value)}></input>
            <p className="error">{errors.phone}</p></div>
            {/* */}
            <label htmlFor="password" className="lable"> צור סיסמא </label>
            <div className="d1"><input type="password" id='password' placeholder="סיסמא" className="input" required onChange={(e) => checkPass(e.target.value)} ></input>
            <p className="error">{errors.password}</p></div>
            
            <label htmlFor="visaNum" className="lable"> הכנס מספר אשראי </label>
            <div className="d1"><input type="text" id='visaNum' placeholder="מספר אשראי" className="input" required onChange={(e) => checkVisaNum(e.target.value)}></input>
            <p className="error">{errors.visaNum}</p></div>

            <label htmlFor="ex" className="lable">הכנס תוקף כרטיס </label><br></br>
            <div className="d1"><input type="text" id='ex' placeholder="תוקף " className="input" required onChange={(e) => checkEx(e.target.value)}></input>
            <p className="error">{errors.ex}</p></div>

            <label htmlFor="cvv" className="lable">הכנס 3 ספרות </label><br></br>
            <div className="d1"><input type="text" id='cvv' placeholder="cvv" className="input" required onChange={(e) => checkCvv(e.target.value)}></input>
            <p className="error">{errors.cvv}</p>
            </div>
            <input className="input" type={'submit'} />


        </form>
        </div>

    </>
}