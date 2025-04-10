<script setup>
import NavBar from '@/components/NavBar.vue';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
</script>

<template>
    <NavBar/> 
    <div class="flex items-center justify-center h-[88vh] bg-[url('../components/imgs/abstractbackground.jpg')] bg-center bg-cover">
        <div class="p-10 bg-white rounded-xl shadow-md w-lg">
            <h2 class="parisienne text-5xl font-bold text-center text-[#66469a] mb-4">Login</h2>
            <form @submit.prevent="login" class="flex flex-col">
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
                    minlength="6"
                    />
                </div>

                <div class="text-center">
                    <button
                    type="submit"
                    class="sour-gummy text-2xl w-full bg-violet-500 text-purple-100 py-4 rounded-md hover:bg-violet-600 transition duration-300"
                    >
                    Log In
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
    };
  },
  methods: {
    login() {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, this.email, this.password)
        .then((userCredential) => {
            const user = userCredential.user;
            this.$router.push('/dashboard');
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorMessage);
            console.log(errorMessage);
        });
    },
  },
};
</script>