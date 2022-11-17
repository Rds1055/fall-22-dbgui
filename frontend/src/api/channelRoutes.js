import axios from "axios";

const baseEndpoint = "http://localhost:8000/channel";
let apiConfig;

export const getChannelById = (channelId) => new Promise((resolve, reject) => {
    axios.get(`${ baseEndpoint }/${ channelId }`, apiConfig)
        .then(x => resolve(x.data))
        .catch(x => {
            alert(x);
            reject(x);
        });
});

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

export const addChannel = (channel) => new Promise((resolve, reject) => {
    axios.channel(`${ baseEndpoint }`, channel, apiConfig)
        .then(x => resolve(x.data))
        .catch(x => {
            alert(x);
            reject(x);
        });
});

