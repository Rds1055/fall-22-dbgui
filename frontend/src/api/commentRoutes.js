import axios from "axios";
import { address } from "./ipAddress";

const baseEndpoint = address + "comment";
let apiConfig;

export const getCommentsByPost = (post_id) => new Promise((resolve, reject) => {
    axios.get(`${ baseEndpoint }/post/${ post_id }`, apiConfig)
        .then(x => resolve(x.data))
        .catch(x => {
            alert(x);
            reject(x);
        });
});

export const getFilteredCommentsByPost = (params) => new Promise((resolve, reject) => {
    let _apiConfig = { ...apiConfig };
    if (params) {
        _apiConfig.params = params;
    }
    axios.get(`${ baseEndpoint }`, _apiConfig)
        .then(x => resolve(x.data))
        .catch(x => {
            alert(x);
            reject(x);
        });
})

export const addComment = (comment) => new Promise((resolve, reject) => {
    axios.post(`${ baseEndpoint }`, comment, apiConfig)
        .then(x => resolve(x.data))
        .catch(x => {
            alert(x);
            reject(x);
        });
});

export const updateComment = (commentId, params) => new Promise((resolve, reject) => {
    axios.put(`${ baseEndpoint }/${ commentId }`, params, apiConfig)
        .then(x => resolve(x.data))
        .catch(x => {
            alert(x);
            reject(x);
        });
});

export const deleteComment = (comment_id) => new Promise((resolve, reject) => {
    axios.delete(`${ baseEndpoint }/${ comment_id }`, apiConfig)
        .then(x => resolve(x.data))
        .catch(x => {
            alert(x);
            reject(x);
        });
});