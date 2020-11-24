import {jogAPI} from "../API/jogAPI";

const START_SESSION = 'jog_reducer/START_SESSION';
const GET_JOGS = 'jog_reducer/GET_JOGS';
const CREATE_NEW_JOG = 'jog_reducer/CREATE_NEW_JOG';
const TOGGLE_FILTER = 'jog_reducer/TOGGLE_FILTER';
const SET_FILTER_FROM_DATE = 'jog_reducer/SET_FILTER_FROM_DATE';
const SET_FILTER_TO_DATE = 'jog_reducer/SET_FILTER_TO_DATE';
const DISPLAY_EXTRA_JOGS = 'jog_reducer/DISPLAY_EXTRA_S';
const EDIT_JOG = 'jog_reducer/EDIT_JOG';
const DELETE_JOG = 'jog_reducer/DELETE_JOG';
const SET_USERNAME = 'jog_reducer/SET_USERNAME';
const SET_PASSWORD = 'jog_reducer/SET_PASSWORD'

const initState = {
    isSession: false,
    loginData: {
        username: "",
        password: ""
    },
    filter: {
        isFilter: false,
        fromDate: new Date(null),
        toDate: new Date()
    },
    jogs: [],
    jogsToDisplay: []
};

export const jogReducer = (state = initState, action) => {
    switch (action.type) {
        case START_SESSION: return {
            ...state,
            isSession: true
        };
        case GET_JOGS: {
            return {
                ...state,
                jogs: action.jogs
            }
        }
        case CREATE_NEW_JOG: {
            let jogsArr = state.jogs;
            jogsArr.push(action.newJog);
            return {
                ...state,
                jogs: jogsArr
            }
        }
        case TOGGLE_FILTER: return {
            ...state,
            filter: {...state.filter, isFilter: !state.filter.isFilter}
        };
        case SET_FILTER_FROM_DATE: return {
            ...state,
            filter: {...state.filter, fromDate: action.fromDate}
        };
        case  SET_FILTER_TO_DATE: return {
            ...state,
            filter: {...state.filter, toDate: action.toDate}
        };
        case DISPLAY_EXTRA_JOGS: {
            let jogsArr = state.jogsToDisplay;
            jogsArr.push(...action.jogs);
            return {
                ...state,
                jogsToDisplay: jogsArr
            }
        }
        case EDIT_JOG: {
            let {distance, time, date} = action;
            return {
                ...state,
                jogs: state.jogs.map(j => {
                    if (j.id === action.id){
                        return {...j, distance, time, date}
                    }
                    else return j
                }),
                jogsToDisplay: state.jogsToDisplay.map(j => {
                    if (j.id === action.id){
                        return {...j, distance, time, date}
                    }
                    else return j
                }),
            }
        }
        case DELETE_JOG: return {
            ...state,
            jogs: state.jogs.filter(j => (j.id !== action.id)),
            jogsToDisplay: state.jogsToDisplay.filter(j => (j.id !== action.id))
        };
        case SET_USERNAME: return {
            ...state,
            loginData: {
                ...state.loginData,
                username: action.username
            }
        };
        case SET_PASSWORD: return {
            ...state,
            loginData: {
                ...state.loginData,
                username: action.password
            }
        }
        default: return state
    }
};

export const startSession = () => ({type: START_SESSION});
const getJogs = (jogs) => ({type: GET_JOGS, jogs});
const createNewJog = (newJog) => ({type: CREATE_NEW_JOG, newJog});
export const setFromDate = (fromDate) => ({type: SET_FILTER_FROM_DATE, fromDate});
export const setToDate = (toDate) => ({type: SET_FILTER_TO_DATE, toDate});
export const toggleFilter = () => ({type: TOGGLE_FILTER});
export const displayExtraJogs = (jogs) => ({type: DISPLAY_EXTRA_JOGS, jogs});
const editJog = (jog) => ({type: EDIT_JOG, ...jog});
const deleteJog = (id) => ({type: DELETE_JOG, id});
export const setUsername = (username) => ({type: SET_USERNAME, username});
export const setPassword = (password) => ({type: SET_PASSWORD, password});

export const logInUser = () => (
    async (dispatch, getState) => {
        let result = await jogAPI.logInUser(getState().loginData);
        if (result.status === 201) {
            dispatch(startSession())
        }
    }
);
export const createUser = () => (
    async (dispatch, getState) => {
        let result = await jogAPI.createUser(getState().loginData);
        if (result.status === 200) {
            dispatch(startSession())
        }
    }
)
export const fetchJogs = () => (
    async (dispatch) => {
        let result = await jogAPI.getJogs();
        dispatch(getJogs(result.data.response.jogs))
    }
);
export const submitNewJog = (jogData) =>
    async (dispatch) => {
    let result = await jogAPI.postNewJog(jogData);
    if (result.status === 201) {
        let {date, time, distance, id, user_id} = result.data.response;
        dispatch(createNewJog({id, user_id, distance, time, date}))
    }
};
export const updateJog = (jogData) => (
    async (dispatch) => {
        console.log(jogData.date);
        let result = await jogAPI.updateJog(jogData);
        if (result.status === 200){
            dispatch(editJog(jogData))
        }
    }
);
export const submitJogDelete = (jogId, userId) => (
    async (dispatch) => {
        let result = await jogAPI.deleteJog(jogId, userId);
        if (result.status === 200){
            dispatch(deleteJog(jogId))
        }
    }
);