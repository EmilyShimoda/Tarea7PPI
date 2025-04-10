<script setup>
import { getAuth, signOut } from "firebase/auth";
import router from '@/router';
import axios from 'axios'
import { onMounted } from "vue";


const auth = getAuth();
const user = auth.currentUser;
const ruta = router.currentRoute.value.name;

const temas = {
    "Binary": 0,
    "Two Pointers": 1,
    "Prefix Sum": 2
}

let fav = null;
onMounted(() => {
    console.log("estado");    
    console.log(ruta);
    axios.get(`fav/${user.uid}/${temas[ruta]}`)
    .then(res => {
        if(res.data != null){
            console.log("color");
            document.getElementById("fav").classList.add("fav");
            fav = true;
        }
        else fav = false;
    })
    .catch(e => {
        console.log(e.response);
        fav = false;
    })
})

function favoritos(){
    console.log("favorito");    
    console.log(ruta);

    if(fav){
        axios.delete(`del/fav/${user.uid}/${temas[ruta]}`)
        .then(res => {
            fav = false;
            document.getElementById("fav").classList.remove("fav");
        })
        .catch(e =>{
            console.log(e.response);
        })
    }
    else {
        axios.post(`nuevo-f/${user.uid}/${temas[ruta]}`)
        .then(res => {
            fav = true;
            document.getElementById("fav").classList.add("fav");
        })
        .catch( e => {
            console.log(e.response);
        })
    }
}
</script>

<template>
    <button @click="favoritos" id="fav" class="rounded-full border-violet-800">
        <img width="65" src="/src/components/imgs/corazon.png" alt="fav">
    </button>
</template>

<style>
.fav{
    background-color: var(--color-purple-200);
}

.notfav{
    background-color: white;
}
</style>