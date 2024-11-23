import actionTypes from './actionTypes';
import {
    getEliteDoctorsForHomePageService,
    getSpecialtiesForHomePageService,
    getInforAndArticleForADoctor,
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

export const fetchSpecialties = () => {
    return async (dispatch, getState) => {
        try {
            let res = await getSpecialtiesForHomePageService('');
            // console.log("Check res fetch specialties: ", res);
            if (res && res.errCode === 0) {
                dispatch({
                    type: actionTypes.FETCH_SPECIALTIES_VALUE_SUCCESSFULLY,
                    specialtiesData: res.data,
                })
            } else {
                dispatch({
                    type: actionTypes.FETCH_SPECIALTIES_VALUE_FAILED,
                })
            }
        } catch (e) {
            console.log('Fetch specialties data fail: ', e);
            dispatch({
                type: actionTypes.FETCH_SPECIALTIES_VALUE_FAILED,
            })
        }
    }
}

export const fetchDoctorDetailsForDoctorManagePage = (id) => {
    return async (dispatch, getState) => {
        try {
            let res = await getInforAndArticleForADoctor(id);
            // console.log("Check doctor details in redux: ", res);
            if (res && res.errCode === 0) {
                dispatch({
                    type: actionTypes.FETCH_DOCTOR_DETAILS_FOR_DOCTOR_MANAGE_PAGE_SUCCESSFULLY,
                    detailsOfADoctor: res.data,
                })
            } else {
                dispatch({
                    type: actionTypes.FETCH_DOCTOR_DETAILS_FOR_DOCTOR_MANAGE_PAGE_FAILED,
                })
            }
        } catch (e) {
            console.log('Fetch doctor details fail: ', e);
            dispatch({
                type: actionTypes.FETCH_DOCTOR_DETAILS_FOR_DOCTOR_MANAGE_PAGE_FAILED,
            })
        }
    }
}
