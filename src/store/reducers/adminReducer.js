import actionTypes from '../actions/actionTypes';

const initialState = {
    isLoggedIn: false,
    adminInfo: null,
    specialties: [],
    eliteDoctors: [],
}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADMIN_LOGIN_SUCCESS:
            return {
                ...state,
                isLoggedIn: true,
                adminInfo: action.adminInfo
            }
        case actionTypes.ADMIN_LOGIN_FAIL:
            return {
                ...state,
                isLoggedIn: false,
                adminInfo: null
            }
        case actionTypes.PROCESS_LOGOUT:
            return {
                ...state,
                isLoggedIn: false,
                adminInfo: null
            }
        case actionTypes.FETCH_ELITE_DOCTORS_VALUE_SUCCESSFULLY:
            state.eliteDoctors = action.eliteDoctorsData;
            return {
                ...state,
            }
        case actionTypes.FETCH_ELITE_DOCTORS_VALUE_FAILED:
            state.eliteDoctors = [];
            return {
                ...state,
            }
        //lấy dữ liệu các bác sĩ ưu tú cho trang home
        case actionTypes.FETCH_ELITE_DOCTORS_VALUE_SUCCESSFULLY:
            state.eliteDoctors = action.eliteDoctorsData;
            return {
                ...state,
            }
        case actionTypes.FETCH_ELITE_DOCTORS_VALUE_FAILED:
            state.eliteDoctors = [];
            return {
                ...state,
            }
        //lấy dữ liệu specialties cho trang home
        case actionTypes.FETCH_SPECIALTIES_VALUE_SUCCESSFULLY:
            state.specialties = action.specialtiesData;
            return {
                ...state,
            }
        case actionTypes.FETCH_SPECIALTIES_VALUE_FAILED:
            state.specialties = [];
            return {
                ...state,
            }
        default:
            return state;
    }
}

export default appReducer;