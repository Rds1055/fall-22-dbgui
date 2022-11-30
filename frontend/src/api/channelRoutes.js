import axios from "axios";

const baseEndpoint = "http://3.144.198.45:8000/channel";
let apiConfig;

export const getChannelById = (channelId) => new Promise((resolve, reject) => {
    axios.get(`${ baseEndpoint }/${ channelId }`, apiConfig)
        .then(x => resolve(x.data))
        .catch(x => {
            alert(x);
            reject(x);
        });
});

export const getFilteredChannels = (params) => new Promise((resolve, reject) => {
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

export const getChannels = (params) => new Promise((resolve, reject) => {
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

export const getChannelCount = (channelId) => new Promise((resolve, reject) => {
    axios.get(`${ baseEndpoint }/count/${ channelId }`, apiConfig)
        .then(x => resolve(x.data))
        .catch(x => {
            alert(x);
            reject(x);
        });
});

export const addChannel = (channel) => new Promise((resolve, reject) => {
    axios.post(`${ baseEndpoint }`, channel, apiConfig)
        .then(x => resolve(x.data))
        .catch(x => {
            alert(x);
            reject(x);
        });
});

export const deleteChannel = (channel_id) => new Promise((resolve, reject) => {
    axios.delete(`${ baseEndpoint }/${ channel_id }`, apiConfig)
        .then(x => resolve(x.data))
        .catch(x => {
            alert(x);
            reject(x);
        });
});
