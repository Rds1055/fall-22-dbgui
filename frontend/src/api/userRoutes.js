import axios from "axios";

const baseEndpoint = "http://localhost:8000/register";
let apiConfig;

// export const getUserByUsername = (username) => new Promise((resolve, reject) => {
//     axios.get(`${ baseEndpoint }/${ username }`, apiConfig)
//         .then(x => resolve(x.data))
//         .catch(x => {
//             alert(x);
//             reject(x);
//         });
// });

export const register = (user) => new Promise((resolve, reject) => {
    axios.post(`${ baseEndpoint }`, user, apiConfig)
        .then(x => resolve(x.data))
        .catch(x => {
            alert(x);
            reject(x);
        });
});