import axios from "axios";

const instance = axios.create({
    baseURL: 'https://ticketgen-backend.herokuapp.com/',
    headers: {
        "Authorization": localStorage.getItem('token')
    }
});

export const API = {
    endureSession(){
        return instance.post('/session')
    },
    createUser(data) {
        return instance.post('/signup', data)
    },
    logInUser(data) {
        return instance.post('/auth', data)
    },
    deleteAccount() {
        return instance.delete('/signup')
    },
    getEvents() {
        return instance.get('/events')
    },
    getSingleEvent(showId) {
        return instance.get(`/event?show_id=${ showId }`)
    },
    purchaseTickets( seatsIds, showId) {
        return instance.post('/purchase', { seatsIds, showId })
    },
    cancelOrder() {
        return instance.delete(`/canceling`)
    },
    fetchUserData() {
        return instance.get('/user')
    },
    fetchCard() {
        return instance.get('/card')
    },
    addCard(cardData) {
        return instance.post('/card', cardData)
    },
    removeCard(cardNumber) {
        return instance.delete(`/cards?card_number=${cardNumber}`)
    },
    updateUser(userData) {
        return instance.put('/user', userData)
    },
    fetchUsers() {
        return instance.get('/users')
    },
    createEvent(eventData) {
        return instance.post('/event', eventData)
    },
    deleteUser(userId) {
        return instance.delete(`/users?user_id=${userId}`)
    },
    deleteEvent(showId) {
        return instance.delete(`/events?event_id=${showId}`)
    }
};