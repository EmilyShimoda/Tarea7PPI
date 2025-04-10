<script setup>
import router from '@/router';

const props = defineProps({
    title: String,
    link: String
});

function clk(){
    router.push('/' +  props.link );
}
</script>

<template>

    <button @click=clk class="sour-gummy text-xl bg-white text-violet-500 py-2 rounded-md hover:bg-purple-200 transition duration-300">
        <h3>{{ title }}</h3>
    </button>
</template>