import { useDispatch, useSelector } from 'react-redux'
import { removeProduct } from './redux/Actions'


export const Products = () => {

    // list products from state
    // useSelector - שליפה מתוך הסטייט
    // מקבל פונקצית חץ שמקבלת משתנה - אוטומטית הסטור
    // const products = useSelector(store => store.products)
    const products = useSelector(x => x.products)

    let dispatch = useDispatch()

    const remove = (index) => {
        dispatch(removeProduct(index))
    }

    return <>

        {products && products.map((item, index) =>
            <div key={index}>
                <h3>~~~~~~~~~~~~~~~</h3>
                <h3>name: {item.name}</h3>
                <h3>price: {item.price}</h3>
                {/* process.env.PUBLIC_URL+'/pictures/'+item.pic+'.JPG' */}
                <img src={`${process.env.PUBLIC_URL}/pictures/${item.pic}.JPG`} alt={item.name} style={{ width: '10vw', height: 'auto' }}></img>
                <button onClick={() => remove(index)}>delete product</button>
            </div>
        )}
    </>
}