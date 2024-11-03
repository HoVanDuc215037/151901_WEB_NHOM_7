import actionTypes from '../actions/actionTypes';

const initialState = {
    isLoggedIn: false,
    adminInfo: null
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
        default:
            return state;
    }
}

export default appReducer;