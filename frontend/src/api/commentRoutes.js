import axios from "axios";

const baseEndpoint = "http://localhost:3001/comment";
let apiConfig;

export const getCommentsByMovie = (movieId) => new Promise((resolve, reject) => {
    axios.get(`${ baseEndpoint }/${ movieId }`, apiConfig)
        .then(x => resolve(x.data))
        .catch(x => {
            alert(x);
            reject(x);
        });
});

export const addComment = (comment) => new Promise((resolve, reject) => {
    axios.post(`${ baseEndpoint }`, comment, apiConfig)
        .then(x => resolve(x.data))
        .catch(x => {
            alert(x);
            reject(x);
        });
});