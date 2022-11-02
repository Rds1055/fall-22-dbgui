import axios from "axios";

const baseEndpoint = "http://localhost:3001/movie";
let apiConfig;

export const getMovieById = (movieId) => new Promise((resolve, reject) => {
    axios.get(`${ baseEndpoint }/${ movieId }`, apiConfig)
        .then(x => resolve(x.data))
        .catch(x => {
            alert(x);
            reject(x);
        });
});

export const addMovie = (movie) => new Promise((resolve, reject) => {
    axios.post(`${ baseEndpoint }`, movie, apiConfig)
        .then(x => resolve(x.data))
        .catch(x => {
            alert(x);
            reject(x);
        });
});