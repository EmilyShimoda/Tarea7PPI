<script setup>
import NavBar from '@/components/NavBar.vue';
import router from '@/router';
import { getAuth, signOut } from "firebase/auth";
import favCard from '@/components/favCard.vue';
import { onMounted } from 'vue';
import axios from 'axios'

const auth = getAuth();
const user = auth.currentUser;

function logout(){
    const auth = getAuth();
    signOut(auth).then(() => {
        router.push('/');
        // Sign-out successful.
    }).catch((error) => {
        alert(error);
        // An error happened.
    })
}

function learn(){
    router.push('/temas');
}

const ruta = router.currentRoute.value.name;

onMounted(() => {
    console.log("tema 0");    
    console.log(ruta);
    axios.get(`fav/${user.uid}/0`)
    .then(res => {
        if(res.data == null){
            console.log("color");
            document.getElementById("tema0").style.display = "none";
        }
    })
    .catch(e => {
        console.log(e.response);
    })


    console.log("tema 1");    
    console.log(ruta);
    axios.get(`fav/${user.uid}/1`)
    .then(res => {
        if(res.data == null){
            console.log("color");
            document.getElementById("tema1").style.display = "none";
        }
    })
    .catch(e => {
        console.log(e.response);
    })


    console.log("tema 2");    
    console.log(ruta);
    axios.get(`fav/${user.uid}/2`)
    .then(res => {
        if(res.data == null){
            console.log("color");
            document.getElementById("tema2").style.display = "none";
        }
    })
    .catch(e => {
        console.log(e.response);
    })
});

</script>

<template>
    <NavBar/>
    <div class="flex justify-center items-center gap-10 flex-wrap bg-[url('../components/imgs/7087596.jpg')] bg-center bg-cover h-[88vh]">
        <div class="bg-white rounded-xl px-20 py-15 flex flex-col justify-center gap-7">
            <h1 class="quicksand text-[#66469a] text-3xl">Usuario: {{ user.displayName }} </h1>
            <div class="flex flex-col gap-3">
                <button @click="logout" class="sour-gummy text-2xl bg-violet-500 text-purple-100 px-6 py-2 rounded-md hover:bg-violet-600 transition duration-300">Log out</button>
                <button @click="learn" class="sour-gummy text-2xl bg-purple-100 outiline-3 border-violet-500 text-violet-500 px-6 py-2  rounded-md hover:bg-purple-200 transition duration-300">Lista de temas</button>
            </div>
        </div>
        <!-- division para favoritos  -->
        <div class="p-10 bg-purple-100 rounded-xl shadow-md w-lg">
            <h2 class="parisienne text-5xl font-bold text-center text-[#66469a] mb-4">Favoritos</h2>
            <div class="flex items-stretch justify-center flex-col gap-3">
                <favCard id="tema0" title="Binary search" link="binary"/>
                <favCard id="tema1" title="Two Pointers" link="two-pointers"/>
                <favCard id="tema2" title="Prefix Sum" link="prefix"/>
            </div>
        </div>
    </div>
</template>