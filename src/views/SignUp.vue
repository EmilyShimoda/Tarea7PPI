<script setup>
import NavBar from '@/components/NavBar.vue';
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
</script>

<template>
    <NavBar/> 
    <div class="flex items-center justify-center h-[88vh] bg-[url('../components/imgs/abstractbackground.jpg')] bg-center bg-cover">
        <div class="p-10 bg-white rounded-xl shadow-md w-lg">
            <h2 class="parisienne text-5xl font-bold text-center text-[#66469a] mb-4">Crear cuenta</h2>
            <form @submit.prevent="register" class="flex flex-col">
                <div class="mb-4">
                    <label for="email" class="block text-sm font-medium text-gray-800">Nombre</label>
                    <input
                    id="name"
                    type="text"
                    v-model="name"
                    class="mt-2 p-2 w-full border border-gray-300 rounded-md text-gray-700"
                    placeholder="Ingrese su nombre"
                    required
                    />
                </div>

                <div class="mb-4">
                    <label for="email" class="block text-sm font-medium text-gray-800">Email</label>
                    <input
                    id="email"
                    type="email"
                    v-model="email"
                    class="mt-2 p-2 w-full border border-gray-300 rounded-md text-gray-700"
                    placeholder="Ingrese su correo"
                    required
                    />
                </div>

                <div class="mb-6">
                    <label for="password" class="block text-sm font-medium text-gray-800">Contraseña</label>
                    <input
                    id="password"
                    type="password"
                    v-model="password"
                    class="mt-2 p-2 w-full border border-gray-300 rounded-md text-gray-700"
                    placeholder="Ingrese su contraseña"
                    required
                    />
                </div>

                <div class="text-center">
                    <button
                    type="submit"
                    class="sour-gummy text-2xl w-full bg-violet-500 text-purple-100 py-4 rounded-md hover:bg-violet-600 transition duration-300"
                    >
                    Sign Up
                    </button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: '',
      name: '',
    };
  },
  methods: {
    register() {
      // For now, just log the email and password
        console.log('Email:', this.email);
        console.log('Password:', this.password);
        console.log('Name: ', this.name);
        
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, this.email, this.password)
        .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;

            updateProfile(auth.currentUser, {
                //add user name
                displayName: this.name
            }).then(() => {
                console.log(user);
                this.$router.push('/dashboard');
            }).catch((error) => {
                alert(error);
            });
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage);
            // ..
        });
    },
  },
};
</script>