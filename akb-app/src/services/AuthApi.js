import axios from 'axios';
import {addItem, getItem, setItem} from './LocaleStorage';

export function hasAuthenticated() {
    const token = getItem('sessionConnect');

    if (token === "null") {
        return false
    } else {
        return true
    }
}


export function login(credentials) {
    return axios
        .post('http://localhost:8083/connexionUser', {
            email: credentials.email,
            mot_de_pass: credentials.password,
        })
        .then(response => {
            //display reponse
            console.log(response.data);
            if (response.data.statutTO === "user") {
                addItem('sessionConnect', credentials.email);
                return true;
            } else {
                setItem('sessionConnect', "null");
                return false;
            }

        })

}

export function logout() {
    setItem('sessionConnect', "null")
}

