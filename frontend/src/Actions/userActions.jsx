import { USER_LOGOUT } from "../Constants.jsx/userConstants"

export const logout = () => (dispatch) => {
    localStorage.removeItem('userInfo')
    dispatch({type: USER_LOGOUT})
}