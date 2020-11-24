import axios from "axios";

const instance = axios.create({
    baseURL: 'https://jogtracker.herokuapp.com/api/v1',
    headers: {
        "Authorization": 'Bearer eb8cdf9e61521369da24ab55f0095f5da870881990d9b75daefef50333178daf'
    }
});

export const jogAPI = {
    createUser(data) {
        return instance.post('/signup', data)
    },
    logInUser(data) {
        return instance.post('/auth', data)
    },
    getJogs() {
        return instance.get('/data/sync')
    },
    postNewJog(bundle) {
        return instance.post('/data/jog', bundle)
    },
    updateJog(bundle) {
        debugger
        return instance.put('/data/jog', {...bundle, jog_id: bundle.id})
    },
    deleteJog(jogId, userId) {
        return instance.delete(`/data/jog?jog_id=${jogId}&user_id=${userId}`)
    }
};