<script setup>
import clsx from 'clsx';
</script>

<template>
    <button class="rounded-full border-violet-800 fav">
        <img width="65"  src="/src/components/imgs/corazon.png" alt="fav">
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