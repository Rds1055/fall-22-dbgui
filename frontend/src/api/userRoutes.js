import axios from "axios";

const baseEndpoint = "http://3.144.198.45:8000/user";
let apiConfig;

export const getUserByUsername = (username) => new Promise((resolve, reject) => {
    axios.get(`${ baseEndpoint }/${ username }`, apiConfig)
        .then(x => resolve(x.data))
        .catch(x => {
            alert(x);
            reject(x);
        });
});

export const getUserPosts = (username) => new Promise((resolve, reject) => {
    axios.get(`${ baseEndpoint }/posts/${ username }`, apiConfig)
        .then(x => resolve(x.data))
        .catch(x => {
            alert(x);
            reject(x);
        });
});

export const getUserPostLikes = (username) => new Promise((resolve, reject) => {
    axios.get(`${ baseEndpoint }/posts/likes/${ username }`, apiConfig)
        .then(x => resolve(x.data))
        .catch(x => {
            alert(x);
            reject(x);
        });
});

export const getUserComments = (username) => new Promise((resolve, reject) => {
    axios.get(`${ baseEndpoint }/comments/${ username }`, apiConfig)
        .then(x => resolve(x.data))
        .catch(x => {
            alert(x);
            reject(x);
        });
});

export const getUserCommentLikes = (username) => new Promise((resolve, reject) => {
    axios.get(`${ baseEndpoint }/comments/likes/${ username }`, apiConfig)
        .then(x => resolve(x.data))
        .catch(x => {
            alert(x);
            reject(x);
        });
});

export const register = (user) => new Promise((resolve, reject) => {
    axios.post(`${ baseEndpoint }`, user, apiConfig)
        .then(x => resolve(x.data))
        .catch(x => {
            alert(x);
            reject(x);
        });
});

export const updateUser = (username, params) => new Promise((resolve, reject) => {
    axios.put(`${ baseEndpoint }/${ username }`, params, apiConfig)
        .then(x => resolve(x.data))
        .catch(x => {
            alert(x);
            reject(x);
        });
})

export const deleteUser = (username) => new Promise((resolve, reject) => {
    axios.delete(`${ baseEndpoint }/${ username }`, apiConfig)
        .then(x => resolve(x.data))
        .catch(x => {
            alert(x);
            reject(x);
        });
});
