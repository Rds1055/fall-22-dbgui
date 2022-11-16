import axios from "axios";

const baseEndpoint = "http://localhost:3306/user";
let apiConfig;

export const getUserById = (userId) => new Promise((resolve, reject) => {
    axios.get(`${ baseEndpoint }/${ userId }`, apiConfig)
        .then(x => resolve(x.data))
        .catch(x => {
            alert(x);
            reject(x);
        });
});

export const addUser = (user) => new Promise((resolve, reject) => {
    axios.post(`${ baseEndpoint }`, user, apiConfig)
        .then(x => resolve(x.data))
        .catch(x => {
            alert(x);
            reject(x);
        });
});