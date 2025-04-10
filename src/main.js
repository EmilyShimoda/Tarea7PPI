import './assets/base.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { initializeApp } from "firebase/app";
// import dotenv from 'dotenv'
import axios from 'axios'
import VueAxios from 'vue-axios'
 
// Vue.use(VueAxios, axios)

// Agregamos la URL base de nuestra API
axios.defaults.baseURL = 'https://tarea7ppi-production.up.railway.app/api/';

// dotenv.config()
// import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBJpejep81ioNVUO4egC89F0EWxdyEtlmI",
    authDomain: "tarea7-ef72c.firebaseapp.com",
    projectId: "tarea7-ef72c",
    storageBucket: "tarea7-ef72c.firebasestorage.app",
    messagingSenderId: "617097137418",
    appId: "1:617097137418:web:90021c4300162293573ef3"
};
// firebase.initializeApp(firebaseConfig);
const appAuth = initializeApp(firebaseConfig);
// require('dotenv').config();

const app = createApp(App)

app.use(router)

app.mount('#app')
