import { toast } from "react-toastify"
import { clientAxios } from "../../../config";
import { ActionTypes } from "../constants/action-types"

export const signupAction = (userSignupObj, history) => dispatch => {
    clientAxios.post(`/auth/register`, userSignupObj)
        .then(response => {
            dispatch({
                type: ActionTypes.SIGNUP_REQUEST,
                payload: response.data
            })
            localStorage.setItem('jwtAdmin', response.data.response_data.token)
            toast.success(response.data.message)
            history.push({ pathname: '/dashboard' });
        })
        .catch(error => {
            toast.error(error.response.data.message)
        });
}