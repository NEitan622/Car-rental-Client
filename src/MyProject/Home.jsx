import { useNavigate } from "react-router"
import tip from './img/טיפים.png'
import back from './img/רקע1.png'
import s from './img/סניפים.png'
import serves from './img/שירות.png'
import b from './img/בית.png'

export const Home=()=>{
    const navigate=useNavigate()
    const set=()=>{
        navigate('/allcars')
    }
    return<>
    <div id='home'>
    <div ><img src={b} className='home11'></img></div>   
   <div ><img src={back}className='home1' onClick={(e)=>set()}></img></div>
   <div ><img src={s} className='home1'></img></div>
   <div ><img src={serves}className='home1' ></img></div>
    <div ><img src={tip} className='home1'></img></div>
    </div>
    </>
}