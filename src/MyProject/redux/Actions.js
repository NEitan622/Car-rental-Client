// action- יצירת פעולות - הוספה, עדכון, מחיקה -שינוי החזרת אוביקט שמכיל סוג פעולה ופרמטרים לשליחה!!!!
export const setCurrentUser=(user)=>{
    return{type:'SET_CURRENT_USER',payload:user}
}
export const setSelectedCar=(car)=>{
    return{type:'SET_SELECTED_CAR',payload:car}
}
export const addUser=(user)=>{
    return{type:'ADD_USER',payload:user}
}
export const addCar=(car)=>{
    return{type:'ADD_CAR',payload:car}
}
export const addModelCar=(model)=>{
    return{type:'ADD_MODEL_CAR',payload:model}
}
export const deleteCar=(car)=>{
    return{type:'DELETE_CAR',payload:car}
}
export const updateCar=(car)=>{
    return{type:'UPDATE_CAR',payload:car}
}
export const addLend=(lend)=>{
    return{type:'ADD_LEND',payload:lend}
}
export const addReturn=(returns)=>{
    return{type:'ADD_RETURN',payload:returns}
}
export const updateEmpty =(car,empty)=>{
    return { type: 'UPDATE_EMPTY', payload: car, field: empty}
}
export const updateTypeDrivePrice =(typeDrive, priceL)=>{
    return { type: 'UPDATE_TYPE_DRIVE_PRICE', payload: typeDrive, field: priceL}
}
//חדש
export const updateCity =(car, city)=>{
    return { type: 'UPDATE_CITY', payload: car, field: city}
}
//חדש
export const updateStreet =(car, street)=>{
    return { type: 'UPDATE_STREET', payload: car, field: street}
}
//חדש
export const updateLiterLeft =(car, literLeft)=>{
    return { type: 'UPDATE_LITER_LEFT', payload: car, field: literLeft}
}

