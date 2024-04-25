/*import {combineReducers, configureStore} from '@reduxjs/toolkit'
import {thunk} from 'redux-thunk'
import { creatorListReducer } from './Reducers/cretorReducers'
const reducer = combineReducers ({
creatorList: creatorListReducer
})

const initialState = {

}

const middleware = [thunk]

const store = configureStore({
    reducer,
    initialState,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(middleware),
})

const shippingAddressFormStorage = localstorage.getItem('shippingAddress') ?
    JSON.parse(localStorage.getItem('shippingAddress')) : {}

const initialState = {
    cart: {
        cartItems: cartItemsFromStorage,
        shippinhAddress: shippingAddressFromStorage
    },
    userlogin: {userInfo: userInfoFromStorage}
}


export default store
*/