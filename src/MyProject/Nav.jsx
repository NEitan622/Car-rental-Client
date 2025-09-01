// חדש- מסומן למטה
import { NavLink } from "react-router-dom"
import './style.css'
import { useSelector } from "react-redux"
import logo from './img/לוגו.png'
import userI from './img/user.png'
import { useState } from "react"
export const Nav=()=>{
    const[flag,setFlag]=useState(true)
    const user = useSelector(x => x.currentUser)
    return<>
    
   <div className='image'><img src={logo} ></img></div>

    <div className='nav'>
    {user.username && <label className='username'>{user.username}</label>}
    {user&&user.username&& <img src={userI} className="userI"></img>}
      
        <div id="returnbox"><NavLink to={'returncar'} className='link'>החזרת רכב</NavLink></div>
    <div id="allcarsbox"><NavLink  to={'allcars'} className='link'>הרכבים שלנו</NavLink></div>
    <div id="registerbox"><NavLink to={'register'} className='link'>הרשמה</NavLink></div>
    <div id="loginbox"><NavLink to={'login'} className='link'>כניסה</NavLink></div>
    <div id="loginbox"><NavLink to={'home'} className='link'>דף הבית</NavLink></div>
    </div>
 
    
    {/* {user&&user.typeCode=="2"&&<NavLink to={'alllends'} className='managerlink' > צפיה בהשאלות</NavLink>} */}
        {/* ומחודש חדש */}
        {user&&user.typeCode=="2"&&<div className="mnav">

        <NavLink to={'typedrive'} className='mlink' >סוגי הנעה לרכב   </NavLink>
        <NavLink to={'models'} className='mlink' > המודלים שלנו  </NavLink>
        <NavLink to={'addcar'} className='mlink' >הוספת רכב  </NavLink>
        
       <NavLink to={'alllends'} className='mlink' > צפיה בהשאלות</NavLink>

    </div>}

    </>
}