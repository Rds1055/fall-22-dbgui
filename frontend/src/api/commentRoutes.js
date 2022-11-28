import axios from "axios";

const baseEndpoint = "http://3.144.198.45:8000/comment";
let apiConfig;

export const getCommentsByPost = (post_id) => new Promise((resolve, reject) => {
    axios.get(`${ baseEndpoint }/post/${ post_id }`, apiConfig)
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