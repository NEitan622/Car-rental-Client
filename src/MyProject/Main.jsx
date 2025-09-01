import { BrowserRouter } from "react-router-dom"
import { Nav } from "./Nav"
import { Routing } from "./Routing"
import { Provider } from "react-redux"
import store from "./redux/Store"

export const Main = () => {

    return <>
        {/* Provider - ספק */}
        {/* store - מקבלת כפרופס את הסטור שיצרנו */}
        {/* כל קומפוננטה שתהיה טעונה בין התגיות של הפרוביידר תכיר את הסטור */}
        <Provider store={store}>
            {/* Provider בתוך ה BrowserRouter טעינה של */}
            {/* ע"מ שכל קומפוננטה שתעטן דרך הראוטינג תכיר את הסטור */}
            {/* BrowserRouter => Nav, Routing */}

            <BrowserRouter>
                <Nav></Nav>
                <Routing></Routing>
            </BrowserRouter>
        </Provider>
      
    </>
}