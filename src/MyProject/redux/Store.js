import { createStore } from "redux";
import { produce } from 'immer'
//store יצירת סטור - מחסן- מכיל את הסטייט ואת הרדיוסר 
//state שמירת כל המשתנים -מסד נתונים
const initialState = {
    // משתמש 1 מנהל 2
    //משתמש-1 מנהל-2
    typeUsers: [
        { typeCode: '1', discription: 'user' },
        { typeCode: '2', discription: 'maneger' }
    ],
    users: [
        { codeU: 100, username: 'נחמי', id: '328183603', phone: '0556723622', password: '622', vizaNum: '4580324512895674', ex: '07/27', cvv: '456', typeCode: '2' },
        { codeU: 101, username: 'מרים', id: '214879116', phone: '0556722858', password: '858', vizaNum: '4580324512895647', ex: '09/29', cvv: '123', typeCode: '2' },
        { codeU: 102, username: 'אלי', id: '25626987', phone: '0548432688', password: '688', vizaNum: '4580324512895655', ex: '05/25', cvv: '445', typeCode: '1' },
        { codeU: 103, username: 'אברהם', id: '32071771', phone: '0527662970', password: '970', vizaNum: '4580324512895868', ex: '02/27', cvv: '656', typeCode: '1' },
        { codeU: 104, username: 'יצחק', id: '27422492', phone: '0527662980', password: '980', vizaNum: '4580324512895111', ex: '03/28', cvv: '765', typeCode: '1' },
        { codeU: 104, username: 'אמא', id: '27422492', phone: '0527662970', password: '123', vizaNum: '4580324512895111', ex: '03/28', cvv: '765', typeCode: '1' },
        { codeU: 104, username: 'אברימי', id: '27422492', phone: '0527662970', password: '321', vizaNum: '4580324512895111', ex: '03/28', cvv: '765', typeCode: '1' }
    ],
    typeCar: [
        { codeTC: 300, discription: 'פרטי' },
        { codeTC: 301, discription: 'סטיישן' },
        { codeTC: 302, discription: 'משפחתי' },
        { codeTC: 303, discription: 'בימבה' },
        { codeTC: 304, discription: 'מנהלי' },
        { codeTC: 305, discription: 'גיפ' },
        { codeTC: 307, discription: 'מסחרי' },
        { codeTC: 308, discription: 'מיניבוס' },
    ],

    modelCar: [//לבדוק חברות ודגמים
        { codeM: 200, company: 'טיוטה', model: 'קורולה', codeTC: 301 },
        { codeM: 201, company: 'טיוטה', model: 'קורולה קור', codeTC: 302 },
        { codeM: 202, company: 'טיוטה', model: 'האייס מסחרי', codeTC: 307 },
        { codeM: 203, company: 'טיוטה', model: 'פוטון', codeTC: 308 },
        { codeM: 206, company: 'יונדאי', model: 'איוניק', codeTC: 304 },
        { codeM: 207, company: 'יונדאי', model: 'אינסטר', codeTC: 304 },
        { codeM: 208, company: 'וולבא', model: 'אקס30', codeTC: 301 },
        { codeM: 209, company: 'מרצדס', model: 'שוהם', codeTC: 308 },
        { codeM: 210, company: 'סוזוקי', model: 'יולה', codeTC: 300 },
        { codeM: 211, company: 'סקודה', model: 'סקאלה', codeTC: 301 },
        { codeM: 212, company: 'קיה', model: 'נירו פלוס', codeTC: 302 },
        { codeM: 213, company: 'קיה', model: 'סול', codeTC: 300 },
        { codeM: 214, company: 'קיה', model: 'סיד', codeTC: 302 },
        { codeM: 215, company: 'קיה', model: 'ריו', codeTC: 301 },
        { codeM: 216, company: 'רנו', model: 'זואי', codeTC: 300 },
        { codeM: 217, company: 'רנו', model: 'מגאן', codeTC: 302 },
        { codeM: 218, company: 'שברולט', model: 'בלייזר', codeTC: 301 },
        { codeM: 219, company: 'שברולט', model: 'סוניק', codeTC: 300 },
        { codeM: 220, company: 'גיפ', model: 'אונגאר', codeTC: 305 },
        { codeM: 221, company: 'גיפ', model: 'גראנד', codeTC: 305},
        { codeM: 222, company: 'גיפ', model: 'רוביקן', codeTC: 305 },
        { codeM: 223, company: 'בימבה', model: 'רי', codeTC: 303 },
       
    ],
    typeDrive: [//בדיקת מחיר
        { codeD: 400, discription: 'דלק', priceL: 7.48 },
        { codeD: 401, discription: 'סולר', priceL: 7.15},
        { codeD: 402, discription: 'גז', priceL: 8.32},
        { codeD: 403, discription: 'חשמלי', priceL: 4 },
        { codeD: 404, discription: 'היברידי', priceL: 5 }
    ],
    cars: [
        
        { codeCar: 503, licensing: '1234568', codeM: 222, numSeats: '5', pic: 'גיפ רוביקן אפור 4 במדבר 2', year: '2020', gir: false, codeD: 20, pricePhour:20, needKmsh: 13.5, literLeft: 50, street:'ירושלים', city:'תל אביב', empty: true },
        { codeCar: 504, licensing: '1234598', codeM: 222, numSeats: '5', pic: 'גיפ רוביקן אפור 4 במדבר', year: '2020', gir: true, codeD: 20, pricePhour:20, needKmsh: 12, literLeft: 50, street:'מלוב', city:'הרצליה', empty: true },
        { codeCar: 505, licensing: '14725896', codeM: 222, numSeats: '7', pic: 'גיפ רוביקן לבן במדבר', year: '2022', gir: true, codeD: 20, pricePhour:40, needKmsh: 13, literLeft: 50, street:'מדבר', city:'ים המלח', empty: true },
        { codeCar: 506, licensing: '154236581', codeM: 222, numSeats: '8', pic: 'גיפ רוביקן', year: '2024', gir: true, codeD: 400, pricePhour:50, needKmsh: 11.2, literLeft: 60, street:'ירושלים', city:'קינג גורג', empty: true },
        { codeCar: 507, licensing: '789456123', codeM: 208, numSeats: '5', pic: 'וולוו1', year: '2019', gir: true, codeD: 403, pricePhour:20, needKmsh: 10, literLeft: 60, street:'בר אילן', city:'ירושלים', empty: true },
        { codeCar: 508, licensing: '147852369', codeM: 200, numSeats: '7', pic: 'טיוטה2', year: '2021', gir: true, codeD: 404, pricePhour:30, needKmsh: 14, literLeft: 70, street:'אהרונסון', city:'בני ברק', empty: true },
        { codeCar: 509, licensing: '85214796', codeM: 201, numSeats: '7', pic: 'טיוטה3', year: '2022', gir: true, codeD: 404, pricePhour:30, needKmsh: 15, literLeft: 60, street:'גני הדר', city:'פתח תקווה', empty: true },
        { codeCar: 510, licensing: '14523698', codeM: 202, numSeats: '7', pic: 'טיוטה-קרולה קרוס', year: '2024', gir: true, codeD: 304, pricePhour:30, needKmsh: 18, literLeft: 80, street:'גני הדר', city:'חיפה', empty: true },
        { codeCar: 511, licensing: '84596578', codeM: 206, numSeats: '5', pic: 'יונדאי 2', year: '2016', gir: false, codeD: 404, pricePhour:20, needKmsh: 16, literLeft: 50, street:'רשבי', city:'מירון', empty: true },
        { codeCar: 512, licensing: '14785698', codeM: 207, numSeats: '5', pic: 'יונדאי', year: '2017', gir: false, codeD: 400, pricePhour:20, needKmsh: 11, literLeft: 80, street:'גבעה', city:'תפרח', empty: true },
        { codeCar: 513, licensing: '12345847', codeM: 206, numSeats: '7', pic: 'יונדאי3', year: '2018', gir: true, codeD:400, pricePhour:30, needKmsh:11.1, literLeft: 70, street:'אל-נקווה', city:'אופקים', empty: true },
        { codeCar: 514, licensing: '14523698', codeM: 207, numSeats: '7', pic: 'יונדאי4', year: '2018', gir: false, codeD:400, pricePhour:30, needKmsh: 11.2, literLeft: 90, street:'אשדוד-ים', city:'אשדוד', empty: true },
        { codeCar: 515, licensing: '23456789', codeM: 222, numSeats: '8', pic: 'ים גיפ רוביקן', year: '2015', gir: true, codeD:400, pricePhour:40, needKmsh: 11.3, literLeft: 100, street:'אדמון', city:'הרצליה', empty: true },
        { codeCar: 516, licensing: '34567891', codeM: 209, numSeats: '15', pic: 'מיניבוס מרצדס שוהם', year: '2020', gir: true, codeD: 300, pricePhour:100, needKmsh:16, literLeft: 100, street:'רקנטי', city:'ירושלים', empty: true },
        { codeCar: 517, licensing: '45678912', codeM: 210, numSeats: '5', pic: 'סוזוקי1', year: '2003', gir: false, codeD: 300, pricePhour:20, needKmsh: 14.2, literLeft: 200, street:'בן זאב', city:'ירושלים', empty: true },
        { codeCar: 518, licensing: '56789123', codeM: 210, numSeats: '5', pic: 'סוזוקי2', year: '2005', gir: false, codeD: 300, pricePhour:20, needKmsh: 14.1, literLeft: 300, street:'בן יהודה', city:'תל אביב', empty: true },
        { codeCar: 519, licensing: '67891234', codeM: 210, numSeats: '5', pic: 'סוזוקי3', year: '2001', gir: false, codeD: 303, pricePhour:20, needKmsh: 14, literLeft: 400, street:'בר אילן', city:'ירושלים', empty: true },
        { codeCar: 520, licensing: '78945612', codeM: 211, numSeats: '7', pic: 'סקודה יטי1', year: '2020', gir: true, codeD: 300, pricePhour:30, needKmsh: 13.5, literLeft: 500, street:'אהרונוביץ', city:'בני ברק', empty: true },
        { codeCar: 521, licensing: '89123405', codeM: 211, numSeats: '5', pic: 'סקודה סקאלה', year: '2014', gir: true, codeD: 301, pricePhour:20, needKmsh: 13.7, literLeft: 100, street:'זבוטינסקי', city:'רמת גן', empty: true },
        { codeCar: 522, licensing: '30020050', codeM: 211, numSeats: '7', pic: 'סקודה סקאלה-2', year: '2020', gir: true, codeD: 301, pricePhour:30, needKmsh: 13.6, literLeft: 200, street:'בן יהודה', city:'תל אביב', empty: true },
        { codeCar: 523, licensing: '10203040', codeM: 211, numSeats: '5', pic: 'סקודה סקאלה3', year: '2020', gir: true, codeD: 302, pricePhour:20, needKmsh: 13.5, literLeft: 300, street:'ירושלים', city:'בני ברק', empty: true },
        { codeCar: 524, licensing: '20304050', codeM: 203, numSeats: '20', pic: 'פוטון טיוטה', year: '2020', gir: true, codeD: 300, pricePhour:100, needKmsh: 16, literLeft: 400, street:'גני הדר', city:'פתח תקווה', empty: true },
        { codeCar: 525, licensing: '30405060', codeM: 212, numSeats: '7', pic: 'קיה - נירו פלוס', year: '2018', gir: true, codeD:301, pricePhour:30, needKmsh: 13.3, literLeft: 500, street:'תלפיות', city:'תלפיות', empty: true },
        { codeCar: 526, licensing: '40506070', codeM: 213, numSeats: '7', pic: 'קיה - סול', year: '2015', gir: true, codeD: 303, pricePhour:30, needKmsh: 13.2, literLeft: 100, street:'ירמיהו', city:'ירושלים', empty: true },
        { codeCar: 527, licensing: '50607080', codeM: 214, numSeats: '7', pic: 'קיה סיד', year: '2020', gir: true, codeD: 304, pricePhour:30, needKmsh: 13.1, literLeft: 200, street:'המג', city:'ירושלים', empty: true },
        { codeCar: 528, licensing: '60708090', codeM: 215, numSeats: '7', pic: 'קיה ריו', year: '2020', gir: true, codeD: 304, pricePhour:30, needKmsh: 13, literLeft: 300, street:'פנים מאירות', city:'ירושלים', empty: true },
        { codeCar: 529, licensing: '70809060', codeM: 215, numSeats: '5', pic: 'קיה ריו-2', year: '2020', gir: true, codeD: 304, pricePhour:20, needKmsh: 12.9, literLeft: 400, street:'קרית ספר', city:'מודיעיו עילית', empty: true },
        { codeCar: 530, licensing: '80901020', codeM: 216, numSeats: '5', pic: 'רנו - זואי1', year: '2019', gir: true, codeD: 300, pricePhour:20, needKmsh: 12.8, literLeft: 100, street:'חשמונאים', city:'מודיעין', empty: false },
        { codeCar: 531, licensing: '90302050', codeM: 216, numSeats: '5', pic: 'רנו זואי - 2', year: '2020', gir: true, codeD: 303, pricePhour:20, needKmsh: 12.7, literLeft: 200, street:'מלכי ישראל', city:'ירושלים', empty: true },
        { codeCar: 532, licensing: '11223344', codeM: 217, numSeats: '5', pic: 'רנו-מגאן', year: '2018', gir: true, codeD: 300, pricePhour:20, needKmsh: 12.6, literLeft: 300, street:'שמגר', city:'ירושלים', empty: true },
        { codeCar: 533, licensing: '22334455', codeM: 218, numSeats: '7', pic: 'שברולט - בלייזר', year: '2020', gir: true, codeD: 301, pricePhour:30, needKmsh: 12.5, literLeft: 400, street:'רשבי', city:'מירון', empty: true },
        { codeCar: 534, licensing: '33445566', codeM: 218, numSeats: '7', pic: 'שברולט בלייזר', year: '2014', gir: true, codeD: 303, pricePhour:30, needKmsh: 12.4, literLeft: 500, street:'גבעת שאול', city:'ירושלים', empty: true },
        { codeCar: 535, licensing: '44556677', codeM: 218, numSeats: '7', pic: 'שברולט בלייזר-3', year: '2020', gir: true, codeD: 302, pricePhour:30, needKmsh: 12.3, literLeft: 100, street:'בית הדפוס', city:'ירושלים', empty: true },
        { codeCar: 536, licensing: '55667788', codeM: 219, numSeats: '5', pic: 'שברולט סוניק', year: '2015', gir: false, codeD: 302, pricePhour:20, needKmsh: 12.2, literLeft:200, street:'עלי הכהן', city:'ירושלים', empty: true },
        { codeCar: 537, licensing: '85698745', codeM: 219, numSeats: '5', pic: 'שברולט סוניק1', year: '2010', gir: false, codeD: 303, pricePhour:20, needKmsh:12, literLeft:300, street:'מינץ', city:'ירושלים', empty: true },
        { codeCar: 538, licensing: '50060050', codeM: 219, numSeats: '5', pic: 'שברולט סוניק2', year: '2020', gir: true, codeD: 300, pricePhour:20, needKmsh: 10, literLeft: 400, street:'פנינה ', city:'ירושלים', empty: true },
        { codeCar: 539, licensing: '50040020', codeM: 219, numSeats: '5', pic: 'שברולט סוניק4', year: '2004', gir: false, codeD: 300, pricePhour:100, needKmsh: 10, literLeft: 500, street:'יעקובזון', city:'ירושלים', empty: true },
        { codeCar: 540, licensing: '1234567', codeM: 223, numSeats: '2', pic: 'בימבה1', year: '2020', gir:false, codeD: 401, pricePhour: 15, needKmsh: 10, literLeft: 30, street: 'פנים מאירות', city: 'ירושלים', empty: true },
        { codeCar: 541, licensing: '123456789', codeM:220, numSeats: '7', pic: 'גיפ אוונגר', year: '2023', gir: true, codeD:400 , pricePhour:30, needKmsh: 13.3, literLeft: 50, street:'גבוטינסקי', city:'תל אביב', empty: true },
        { codeCar: 542, licensing: '12345678', codeM: 221, numSeats: '7', pic: 'גיפ גראנד', year: '2022', gir: true, codeD: 400, pricePhour:30, needKmsh: 14, literLeft: 70, street:'פתח תקווה', city:'ירושלים', empty: true },

    ],
    lends: [//לבדוק פורמט של תאריך ושעה
        { codeL: 600, codeU: '104', codeCar: '500', date: '2024-08-08T20:18:30.123Z' },
        { codeL: 602, codeU: '103', codeCar: '501', date: '2024-08-08T20:18:30.123Z' },
        { codeL: 603, codeU: '102', codeCar: '520', date: '2024-08-08T20:18:30.123Z' },
        { codeL: 604, codeU: '100', codeCar: '530', date: '2024-08-08T20:18:30.123Z' },
    ],
    returns: [
        { codeR: 700, codeL: 602, date: '2024-09-05T10:30.145Z', leftL: 80, pay: '3018', isPaid: true },
        { codeR: 701, codeL: 600, date: '2024-08-05T23:30.145Z', leftL: 50, pay: '3979', isPaid: true },
        { codeR: 702, codeL: 603, date: '2024-08-05T24:00.145Z', leftL: 60, pay: '4000', isPaid: true }
    ],
    currentUser: {},
    selectedCar: {},
}
// reduser - הפעלת הפעולות על הסטייט שינוי בפועל לפי סוג הפעולה ושימוש בפרמטרים
// produce? מה הוא עושה??
const reducer = produce((state, action) => {
    switch (action.type) {
        case 'SET_CURRENT_USER':
            state.currentUser = action.payload
            return;
        case 'SET_SELECTED_CAR':
            state.selectedCar = action.payload
            return;
        case 'ADD_USER':
            state.users.push(action.payload)
            return;
        case 'ADD_CAR':
            state.cars.push(action.payload)
            return;
        case 'ADD_MODEL_CAR':
            state.modelCar.push(action.payload)
            return;

        case 'DELETE_CAR':
            state.cars.splice(action.payload, 1)
            return;
        case 'UPDATE_CAR':
            state.cars = action.payload
            return;
        case 'ADD_LEND':
            state.lends.push(action.payload)
            return;
        case 'ADD_RETURN':
            state.returns.push(action.payload)
            return;
        case 'UPDATE_EMPTY':
            state.cars.find(x => x.codeCar == action.payload.codeCar).empty = action.field
            return;
        case 'UPDATE_TYPE_DRIVE_PRICE':
            state.typeDrive.find(x => x.codeD == action.payload.codeD).priceL = action.field
            return;
            case 'UPDATE_CITY':
                state.cars.find(x => x.codeCar = action.payload.codeCar).city = action.field
                return;
            //חדש
            case 'UPDATE_STREET':
                state.cars.find(x => x.codeCar = action.payload.codeCar).street = action.field
                return;
            //חדש
            case 'UPDATE_LITER_LEFT':
                state.cars.find(x => x.codeCar = action.payload.codeCar).literLeft = action.field
                return;
        default:
            break;
    }

}, initialState)
const store = createStore(reducer);
export default store;