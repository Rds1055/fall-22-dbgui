import axios from "axios";
import { address } from "./ipAddress";

const baseEndpoint = address + "session";
let apiConfig;

export const login = (info, setLogin = undefined) => new Promise((resolve, reject) => {
    axios.post(`${baseEndpoint}/`, info, apiConfig)
        .then(x => {
          sessionStorage.token = x.data;
          if(setLogin){
            setLogin('success');
          }
          resolve(x.data);
        })
        .catch(x => {
          if(setLogin){
            setLogin('failed');
          }
          reject(x);
        });
});

export const getUserInfo = () => new Promise((resolve, reject) => {
    apiConfig = {
      headers: {
          Authorization: `Bearer ${ sessionStorage.token }`
      }
    };
    axios.get(`${baseEndpoint}`, apiConfig)
        .then(x => resolve(x.data))
        .catch(x => {
          alert(x);
          reject(x);
        });
});