<script setup>
import NavBar from '@/components/NavBar.vue';
import router from '@/router';
import { getAuth, signOut } from "firebase/auth";

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
    router.push('/binary');
}

</script>

<template>
    <NavBar/>
    <div class="flex justify-center items-center bg-[url('../components/imgs/7087596.jpg')] bg-center bg-cover h-[88vh]">
        <div class="bg-white rounded-4xl px-30 py-20 flex flex-col justify-center gap-7">
            <h1 class="quicksand text-[#66469a] text-5xl">User: {{ user.displayName }} </h1>
            <div class="flex flex-col gap-3">
                <button @click="logout" class="sour-gummy text-2xl bg-violet-500 text-purple-100 px-6 py-2 rounded-md hover:bg-violet-600 transition duration-300">Log out</button>
                <button @click="learn" class="sour-gummy text-2xl bg-purple-100 outiline-3 border-violet-500 text-violet-500 px-6 py-2  rounded-md hover:bg-purple-200 transition duration-300">Start learning</button>
            </div>
        </div>
    </div>
</template>