import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://basic-tinder-clone-backend.herokuapp.com/'
})

export default instance;