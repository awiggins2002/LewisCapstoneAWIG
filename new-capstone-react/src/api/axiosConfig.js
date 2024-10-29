import axios from 'axios';

export default axios.create({
    baseURL:'https://',
    headers: {"ngrok-skip-browser-warning": "true"}
});