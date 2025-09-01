import { useParams } from 'react-router-dom'
import './style.css'

export const Details = () => {

    const params = useParams()

    const { n, p } = params

    return <>
        <div className="product">
            name: {n}
            <br></br>
            price: {p}
        </div>
    </>
}