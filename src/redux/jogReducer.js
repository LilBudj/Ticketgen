import {API} from "../API/API";

const START_SESSION = 'cashier_reducer/START_SESSION';
const SET_AUTH_ERROR = 'cashier_reducer/SET_AUTH_ERROR';
const LOGIN_ERROR = 'cashier_reducer/LOGIN_ERROR'
const DISPATCH_EVENTS = 'cashier_reducer/DISPATCH_EVENTS';
const DISPATCH_SEATS = 'cashier_reducer/DISPATCH_SEATS';
const PURCHASE_SEATS = 'cashier_reducer/PURCHASE_SEATS';
const CANCEL_ORDER = 'cashier_reducer/CANCEL_ORDER';
const TOGGLE_FILTER = 'cashier_reducer/TOGGLE_FILTER';
const SET_FILTER_FROM_DATE = 'cashier_reducer/SET_FILTER_FROM_DATE';
const SET_FILTER_TO_DATE = 'cashier_reducer/SET_FILTER_TO_DATE';
const ADD_CARD = 'cashier_reducer/ADD_CARD';
const REMOVE_CARD = 'cashier_reducer/REMOVE_CARD';
const LOG_OUT = 'cashier_reducer/LOG_OUT';
const SET_USERNAME = 'cashier_reducer/SET_USERNAME';
const SET_PASSWORD = 'cashier_reducer/SET_PASSWORD'
const SET_EMAIL = 'cashier_reducer/SET_EMAIL';
const SET_SECRET = 'cashier_reducer/SET_SECRET';
const SET_ADMIN = 'cashier_reducer/SET_ADMIN';
const SET_ACC_DATA = 'cashier_reducer/SET_ACC_DATA';
const DISCARD_ERROR = 'cashier_reducer/DISCARD_ERROR';
const DISCARD_LOGIN_ERROR = 'cashier_reducer/DISCARD_LOGIN_ERROR'
const CHANGE_USER_DATA = 'cashier_reducer/CHANGE_USER_DATA'
const CREATE_EVENT = 'cashier_reducer/CREATE_EVENT';
const DISPATCH_USERS = 'cashier_reducer/DISPATCH_USERS';
const DELETE_EVENT = 'cashier_reducer/DELETE_EVENT';
const DELETE_USER = 'cashier_reducer/DELETE_USER';

const initState = {
    isSession: false,
    isAuthorizationError: false,
    isLoginError: false,
    loginData: {
        username: "",
        password: "",
        email: "",
        secretAdminUUID: "",
        isAdmin: false
    },
    accountData: {
        username: "",
        email: "",
        password: "",
        orders: [],
        isAdmin: false
    },
    filter: {
        isFilter: false,
        fromDate: new Date(null),
        toDate: new Date()
    },
    events: [
        {id: 1, distance: 1, time: 1, date: 2020},
        {id: 2, distance: 1, time: 1, date: 2020},
        {id: 3, distance: 1, time: 1, date: 2020}
        ],
    seats: [],
    cards: [
        {cardNumber: 1488148814881488, cardholderName: "DOLBOEB", expirationDate: new Date(), cvv: 777}
    ],
    users: []
};

export const jogReducer = (state = initState, action) => {
    switch (action.type) {
        case START_SESSION: return {
            ...state,
            isSession: true
        };
        case SET_AUTH_ERROR: return {
            ...state,
            isAuthorizationError: true,
            isSession: false
        };
        case LOGIN_ERROR: return {
            ...state,
            isLoginError: true,
            isSession: false
        };
        case DISCARD_ERROR: return {
            ...state,
            isAuthorizationError: false,
        }
        case DISCARD_LOGIN_ERROR: return {
            ...state,
            isLoginError: false,
        }
        case DISPATCH_EVENTS: {
            return {
                ...state,
                events: action.events
            }
        }
        case DISPATCH_SEATS: {
            return {
                ...state,
                seats: action.seats
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
        case ADD_CARD: return {
            ...state,
            cards: [...state.cards, ...action.cards]
        };
        case REMOVE_CARD: return {
            ...state,
            cards: state.cards.filter(c => c.cardNumber !== action.cardNumber)
        };
        case PURCHASE_SEATS: {
            return {
                ...state,
                seats: state.seats.map(s => {
                    if (action.ticket.seatIds.includes(s.id)){
                        return {...s, status: true}
                    }
                    else return s
                }),
                accountData: {
                    ...state.accountData,
                    orders: [...state.accountData.orders, action.ticket]
                }
            }
        }
        case CANCEL_ORDER: {
            return {
                ...state,
                seats: state.seats.map(s => {
                    if (!!state.accountData.orders.filter(o => o.seats.includes(s.id)).length){
                        return {...s, status: false}
                    }
                    else return s
                }),
                accountData: {
                    ...state.accountData,
                    orders: []
                }
            }
        }
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
                password: action.password
            }
        }
        case SET_EMAIL: return {
            ...state,
            loginData: {
                ...state.loginData,
                email: action.email
            }
        }
        case SET_SECRET: return {
            ...state,
            loginData: {
                ...state.loginData,
                secretAdminUUID: action.secret
            }
        }
        case SET_ADMIN: return {
            ...state,
            loginData: {
                ...state.loginData,
                isAdmin: action.isAdmin
            }
        }
        case SET_ACC_DATA: return {
            ...state,
            accountData: {
                ...state.accountData,
                ...state.loginData,
                isAdmin: action.accData.isAdmin,
                orders: action.accData.orders
            }
        }
        case LOG_OUT: {
            localStorage.removeItem('token')
            return {
                ...state,
                isSession: false,
                accountData: {
                    ...state.accountData,
                    isAdmin: false
                }
            }
        }
        case CHANGE_USER_DATA: return {
            ...state,
            accountData: action.userData
        }
        case DISPATCH_USERS: return {
            ...state,
            users: action.users
        }
        case CREATE_EVENT: return {
            ...state,
            events: [...state.events, action.event]
        }
        case DELETE_EVENT: return {
            ...state,
            events: state.events.filter(e => action.showId !== e.showId)
        }
        case DELETE_USER: return {
            ...state,
            users: state.users.filter(e => action.userId !== e.userId)
        }
        default: return state
    }
};

export const startSession = () => ({type: START_SESSION});
const setAuthError = () => ({type: SET_AUTH_ERROR});
const loginError = () => ({type: LOGIN_ERROR});
export const discardLoginError = () => ({type: DISCARD_LOGIN_ERROR})
export const discardError = () => ({type: DISCARD_ERROR})
const dispatchEvents = (events) => ({type: DISPATCH_EVENTS, events});
const dispatchSeats = (seats) => ({type: DISPATCH_SEATS, seats});
export const setFromDate = (fromDate) => ({type: SET_FILTER_FROM_DATE, fromDate});
export const setToDate = (toDate) => ({type: SET_FILTER_TO_DATE, toDate});
export const toggleFilter = () => ({type: TOGGLE_FILTER});
const dispatchCard = (cards) => ({type: ADD_CARD, cards});
const unhandleCard = (cardNumber) => ({type: REMOVE_CARD, cardNumber})
const purchaseSeats = (ticket) => ({type: PURCHASE_SEATS, ticket});
const cancelOrder = () => ({type: CANCEL_ORDER});
export const setUsername = (username) => ({type: SET_USERNAME, username});
export const setPassword = (password) => ({type: SET_PASSWORD, password});
export const setEmail = (email) => ({type: SET_EMAIL, email});
export const setSecret = (secret) => ({type: SET_SECRET, secret});
export const setAdmin = (isAdmin) => ({type: SET_ADMIN, isAdmin})
const setAccountData = (accData) => ({type: SET_ACC_DATA, accData})
export const logOut = () => ({type: LOG_OUT})
const changeUserData = (userData) => ({type: CHANGE_USER_DATA, userData})
const dispatchUsers = (users) => ({type: DISPATCH_USERS, users})
const createEvent = (event) => ({type: CREATE_EVENT, event})
const deleteUser = (userId) => ({type: DELETE_USER, userId})
const deleteEvent = (showId) => ({type: DELETE_EVENT, showId})

export const logInUser = () => (
    async (dispatch, getState) => {
        try {
            let result = await API.logInUser(getState().loginData);
            if (result.status === 200 && result.data.token) {
                localStorage.setItem('token', result.data.token)
                dispatch(setAccountData({isAdmin: result.data.isAdmin, orders: result.data.orders}))
                if (!result.data.isAdmin) {
                    dispatch(startSession())
                }
            }
        }
        catch (e) {
            dispatch(loginError())
        }
    }
);
export const createUser = () => (
    async (dispatch, getState) => {
        let result = await API.createUser(getState().loginData);
        if (result.status === 200) {
            localStorage.setItem('token', result.data.token)
            dispatch(startSession())
        }
    }
)
export const fetchEvents = () => (
    async (dispatch) => {
        try {
            let result = await API.getEvents('ping');
            if (result.status === 200) {
                dispatch(dispatchEvents(result.data.events))
            }
        }
        catch (e) {
            dispatch(setAuthError())
        }
    }
);
export const fetchEvent = (id) => (
    async (dispatch) => {
        try {
            let result = await API.getSingleEvent(id);
            if (result.status === 200) {
                dispatch(dispatchSeats(result.data.seats))
            }
        }
        catch (e) {
            dispatch(setAuthError())
        }
    }
);
export const fetchCards = () => (
    async (dispatch) => {
        try {
            let result = await API.fetchCard()
            if (result.status === 200) {
                dispatch(dispatchCard(result.data.cards))
            }
        }
        catch (e) {
            dispatch(setAuthError())
        }
    }
)
export const addCard = (cardData) => (
    async (dispatch) => {
        try {
            let result = await API.addCard(cardData)
            if (result.status === 200) {
                dispatch(dispatchCard([cardData]))
            }
        }
        catch (e) {
            dispatch(setAuthError())
        }
    }
);
export const removeCard = (cardNumber) => (
    async (dispatch) => {
        try {
            let result = await API.removeCard(cardNumber)
            if (result.status === 200) {
                dispatch(unhandleCard(cardNumber))
            }
        }
        catch (e) {
            dispatch(setAuthError())
        }
    }
);
export const deleteAccount = () => (
    async (dispatch) => {
        try {
            let result = await API.deleteAccount()
            if (result.status === 200) {
                dispatch(logOut())
            }
        }
        catch (e) {
            dispatch(setAuthError())
        }
    }
);
export const purchaseOperation = (seatIds, showId) => (
    async (dispatch) => {
        try {
            let result = await API.purchaseTickets(seatIds, showId)
            if (result.status === 200) {
                dispatch(purchaseSeats(result.data.seats))
            }
        }
        catch (e) {
            dispatch(setAuthError())
        }
    }
);
export const cancelOperation = () => (
    async (dispatch) => {
        try {
            let result = await API.cancelOrder()
            if (result.status === 200) {
                dispatch(cancelOrder())
            }
        }
        catch (e) {
            dispatch(setAuthError())
        }
    }
);
export const updateUserData = (userData) => (
    async (dispatch) => {
        try {
            let result = await API.updateUser(userData)
            if (result.status === 200) {
                dispatch(changeUserData(userData))
            }
        }
        catch (e) {
            dispatch(setAuthError())
        }
    }
);
export const fetchUsers = () => (
    async (dispatch) => {
        try {
            let result = await API.fetchUsers()
            if (result.status === 200) {
                console.log(result.data.users)
                dispatch(dispatchUsers(result.data.users))
            }
        }
        catch (e) {
            dispatch(setAuthError())
        }
    }
);
export const uploadEvent = (eventData) => (
    async (dispatch) => {
        try {
            let result = await API.createEvent(eventData)
            if (result.status === 200) {
                dispatch(createEvent(result.data.event))
            }
        }
        catch (e) {
            dispatch(setAuthError())
        }
    }
);
export const removeUser = (userId) => (
    async (dispatch) => {
        try {
            let result = await API.deleteUser(userId)
            if (result.status === 200) {
                dispatch(deleteUser(userId))
            }
        }
        catch (e) {
            dispatch(setAuthError())
        }
    }
);
export const removeEvent = (showId) => (
    async (dispatch) => {
        try {
            let result = await API.deleteEvent(showId)
            if (result.status === 200) {
                dispatch(deleteEvent(showId))
            }
        }
        catch (e) {
            dispatch(setAuthError())
        }
    }
);