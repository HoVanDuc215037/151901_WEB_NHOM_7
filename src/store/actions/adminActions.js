import actionTypes from './actionTypes';
import {
    getEliteDoctorsForHomePageService,
} from "../../services/userService";

export const adminLoginSuccess = (adminInfo) => ({
    type: actionTypes.ADMIN_LOGIN_SUCCESS,
    adminInfo: adminInfo
})

export const adminLoginFail = () => ({
    type: actionTypes.ADMIN_LOGIN_FAIL
})

export const processLogout = () => ({
    type: actionTypes.PROCESS_LOGOUT
})

export const fetchEliteDoctors = () => {
    return async (dispatch, getState) => {
        try {
            let res = await getEliteDoctorsForHomePageService('');
            if (res && res.errCode === 0) {
                dispatch({
                    type: actionTypes.FETCH_ELITE_DOCTORS_VALUE_SUCCESSFULLY,
                    eliteDoctorsData: res.data,
                })
            } else {
                dispatch({
                    type: actionTypes.FETCH_ELITE_DOCTORS_VALUE_FAILED,
                })
            }
        } catch (e) {
            console.log('Fetch elite doctors data fail: ', e);
            dispatch({
                type: actionTypes.FETCH_ELITE_DOCTORS_VALUE_FAILED,
            })
        }
    }
}
