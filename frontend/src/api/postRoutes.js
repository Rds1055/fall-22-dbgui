import axios from "axios";

const baseEndpoint = "http://localhost:3001/post";
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
