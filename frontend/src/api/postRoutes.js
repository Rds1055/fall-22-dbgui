import axios from "axios";
import { address } from "./ipAddress";

const baseEndpoint = address + "post";
let apiConfig;

export const getPostById = (postId) => new Promise((resolve, reject) => {
    axios.get(`${ baseEndpoint }/${ postId }`, apiConfig)
        .then(x => resolve(x.data))
        .catch(x => {
            alert(x);
            reject(x);
        });
});

export const getPosts = (params) => new Promise((resolve, reject) => {
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
});

export const addPost = (post) => new Promise((resolve, reject) => {
    axios.post(`${ baseEndpoint }`, post, apiConfig)
        .then(x => resolve(x.data))
        .catch(x => {
            alert(x);
            reject(x);
        });
});

export const getPostsByChannel = (channelId) => new Promise((resolve, reject) => {
    axios.get(`${ baseEndpoint }/channel/${ channelId }`, apiConfig)
        .then(x => resolve(x.data))
        .catch(x => {
            alert(x);
            reject(x);
        });
});

export const getFilteredPostsByChannel = (params) => new Promise((resolve, reject) => {
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

export const updatePost = (postId, params) => new Promise((resolve, reject) => {
    axios.put(`${ baseEndpoint }/${ postId }`, params, apiConfig)
        .then(x => resolve(x.data))
        .catch(x => {
            alert(x);
            reject(x);
        });
});

export const deletePost = (post_id) => new Promise((resolve, reject) => {
    axios.delete(`${ baseEndpoint }/${ post_id }`, apiConfig)
        .then(x => resolve(x.data))
        .catch(x => {
            alert(x);
            reject(x);
        });
});