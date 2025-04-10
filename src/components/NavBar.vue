<!-- src/components/NavBar.vue -->
<script setup>
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import router from "@/router";
import { ref } from "vue";

const isLoggedIn = ref(false);
const auth = getAuth();
onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/auth.user
    const uid = user.uid;
    // ...
    isLoggedIn.value = true;
  } else {
    // User is signed out
    // ...
    isLoggedIn.value = false;
  }
});

function logOut() {
    const auth = getAuth();
    signOut(auth).then(() => {
        isLoggedIn.value = false;
        router.push('/');
        // Sign-out successful.
    }).catch((error) => {
        alert(error);
        // An error happened.
    })
}
</script>

<template>
    <nav class="w-screen bg-fuchsia-100 p-4 h-[12vh] flex items-center">
      <div class="container mx-auto flex justify-between items-center ">
        <div class="text-[#66469a] text-3xl font-bold sour-gummy">My App</div>
        <div class="flex gap-8">

          <router-link to="/" class="quicksand text-lg text-[#66469a] hover:text-violet-950">Inicio</router-link>
          <router-link v-if="!isLoggedIn" to="/login" class="quicksand text-lg text-[#66469a] hover:text-violet-950">Log In</router-link>
          <router-link v-if="!isLoggedIn" to="/signup" class="quicksand text-lg text-[#66469a] hover:text-violet-950">Crear cuenta</router-link>
          <router-link v-if="isLoggedIn" to="/dashboard" class="quicksand text-lg text-[#66469a] hover:text-violet-950">Perfil</router-link>
          <router-link v-if="isLoggedIn" to="/chatbot" class="quicksand text-lg text-[#66469a] hover:text-violet-950">ChatBot</router-link>
          <button v-if="isLoggedIn" @click="logOut" class="quicksand text-lg text-[#66469a] hover:text-violet-950">Log Out</button>
        </div>
      </div>
    </nav>
</template>
  
<style scoped>
/* You can add custom styles here */
</style>
  