import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { setCurrentUser } from "./redux/Actions";
import "./style.css"
import swal from "sweetalert"

export const Login = () => {

    const [errors, setErrors] = useState({})
    const navigate = useNavigate()
    //useSelector - שליפת נתונים מהסטייט - מקבל ביטוי למבדא שמקבל את הסטור ושולף מהסטייט את המשתנה הרצוי
    const users = useSelector(store => store.users)
    // console.log(users);
    //useDispach -  - הפעלת פעולות - יצירת פעולות מסוג זה ושליחת פעולה עם הערך הרצוי
    const dis = useDispatch()

    const checkName = (value) => {
        let nameRegex = /^[א-ת]{2}[א-ת" "]{0,20}$/
        if (!value.match(nameRegex)) {
            setErrors({ ...errors, username: ' הכנס שם  בעברית בלבד*' })
            console.log('erro');

        }
        else {
            setErrors({ ...errors, username: '' })
            console.log('good');

        }
    }

    const checkPhone = (value) => {
        let nameRegex = /^[0-9]{10}$/

        if (!value.match(nameRegex)) {
            setErrors({ ...errors, phone: 'מספר נייד לא תקין*' })
        }
        else {
            setErrors({ ...errors, phone: '' })

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

        }
    }

    const send = (event) => {
        event.preventDefault();
        const user = {
            username: event.target[0].value,
            password: event.target[1].value,
            phone: event.target[2].value
        }

        let u = users.filter(x => x.username == user.username && x.password == user.password && x.phone == user.phone)[0]
        //o routes matched location "/" - שגיעה שמופיעה בעת הרצה אך לא הפריעה להרצה ולקישורים
        //
        if (u) {
            //history.ts:501 No routes matched location "/allcars/%D7%9E%D7%A8%D7%99%D7%9D" 
            //שגיעה המופיעה בעת הרצה כאשר המשתמש שמור אך לא מפריעה להרצה ולקישורים
            swal(`שלום ${user.username}`, ' נכנסת בהצלחה', 'success')
            // /${user.username} למה לא מסכים להשתמש
            navigate(`/allcars`)
            dis(setCurrentUser(u))
            // if(u.typeCode=='2'){

            // }
        }
        else if (errors.username == "" && errors.password == "" && errors.phone == "") {
            swal(`שלום ${user.username}`, 'הנתונים שהזנת אינם קיימים במערכת, הנך מועבר להרשמה', 'info')
            navigate(`/register`)
        }
        else {
            swal(`הנתונים שהזנת שגויים  `, 'אנא נסה שוב', 'error')


            
        }
        }
        return <>
            <div className="loginform">
                <h1>כניסה</h1>

                <form onSubmit={(e) => send(e)}>
                    <label htmlFor="username" >הכנס שם משתמש</label>
                    <div className="d1"><input type="text" id="username" className="input" placeholder=" שם משתמש" required onChange={(e) => checkName(e.target.value)} />
                        <p className="error">{errors.username}</p></div>

                    <label htmlFor="password" >הכנס סיסמא</label>
                    <div className="d1"><input type="password" id="password" className="input" placeholder=" סיסמא" required onChange={(e) => checkPass(e.target.value)} />
                        <p className="error">{errors.password}</p></div>

                    <label htmlFor="phone" >הכנס מספר נייד</label>
                    <div className="d1"><input type="text" id="phone" className="input" placeholder=" פלאפון" required onChange={(e) => checkPhone(e.target.value)} />
                        <p className="error">{errors.phone}</p></div>

                    <input type={"submit"} className="input" />
                </form>
            </div>
        </>

    
}
