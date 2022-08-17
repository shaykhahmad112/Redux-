
import { clientAxios } from "../../../config";
import { ActionTypes } from "../constants/action-types"
import { toast } from "react-toastify"

export const loginAction = (userloginObj, history) => dispatch => {
    clientAxios
        .post(`/auth/login`, userloginObj)
        .then(response => {
            dispatch({
                type: ActionTypes.LOGIN_REQUEST,
                payload: response.data
            })
            localStorage.setItem('jwtAdmin', response.data.access_token)
            history.push({ pathname: '/dashboard' });
        })
        .catch(error => {
            toast.error(error.response.data.message)
        });
}