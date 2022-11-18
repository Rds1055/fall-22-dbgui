import axios from "axios";

const baseEndpoint = "http://localhost:8000/session";
let apiConfig;
let token;

export const getToken = () => {
    return token;
}

export const login = (info, setLogin) => new Promise((resolve, reject) => {
    axios.post(`${baseEndpoint}/session/`, info, apiConfig)
        .then(x => {
          token = x.data;
          apiConfig = {
              headers: {
                  Authorization: `Bearer ${token}`
              }
          };
          resolve(x.data);
          if(setLogin){
            setLogin('success');
          }
        })
        .catch(x => {
          if(setLogin){
            setLogin('failed');
          }
          reject(x);
        });
});

export const getUserInfo = () => new Promise((resolve, reject) => {
    axios.get(`${baseEndpoint}`, apiConfig)
        .then(x => resolve(x.data))
        .catch(x => {
          alert(x);
          reject(x);
        });
});