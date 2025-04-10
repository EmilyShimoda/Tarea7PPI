<script setup>
import NavBar from '@/components/NavBar.vue';
import router from '@/router';

function binary(){
    router.push('/binary');
}
function twop(){
    router.push('/two-pointers');
}
function prefix(){
    router.push('/prefix');
}
</script>

<template>
    <NavBar/> 
    <div class="flex items-center justify-center h-[88vh] bg-[url('../components/imgs/abstractbackground.jpg')] bg-center bg-cover">
        <div class="p-10 bg-white rounded-xl shadow-md w-lg">
            <h2 class="parisienne text-5xl font-bold text-center text-[#66469a] mb-4">Lista de temas</h2>
            <div class="flex items-stretch justify-center flex-col gap-3">
                <button @click=binary class="sour-gummy text-xl bg-violet-500 text-purple-100 py-2 rounded-md hover:bg-violet-600 transition duration-300">
                    <h3>Binary search</h3>
                </button>
                <button @click=twop class="sour-gummy text-xl bg-purple-100 text-violet-500 py-2 rounded-md hover:bg-purple-200 transition duration-300">
                    <h3>Two pointers</h3>
                </button>
                <button @click=prefix class="sour-gummy text-xl bg-violet-500 text-purple-100 py-2 rounded-md hover:bg-violet-600 transition duration-300">
                    <h3>Prefix Sum</h3>
                </button>
            </div>
        </div>
    </div>
</template>

<script>
</script>