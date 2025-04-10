<script setup>
import NavBar from '@/components/NavBar.vue';
import addFav from '@/components/addFav.vue';
</script>

<template>
    <NavBar/>
    <div class="px-10 py-10 items-center bg-[url('../components/imgs/7087596.jpg')] bg-center bg-cover">
        <div class="bg-white rounded-4xl w-[90vw] text-zinc-700">
            <div class="">
                <div class="pt-10 px-10 text-xl sm:px-20 lg:px-30 flex flex-row justify-between items-baseline">
                    <h1 className="text-violet-950 text-7xl pt-20 sour-gummy">Two Pointers</h1>
                    <div class="text-right" >
                        <addFav/>
                    </div>
                </div>
                <p className="px-13 sm:px-23 md:px-33 text-2xl text-zinc-500 pb-10 quicksand">01/03/2025</p>

                <img src="../components/imgs/digitization-5194814_1920.jpg" alt="binary img" class="px-5 sm:px-15 md:px-25">
            
            </div>

            <div className="py-10 px-10 text-xl sm:px-20 lg:px-30 quicksand">
                <p>Se trata de una tecnica en la que siempre se tienen dos punteros recorriendo un arreglo, pudiendo ser uno que se mueve más rápido y uno que se mueve más despacio, o uno que va del inicio y uno que inicia en el final</p>
            </div>

            <div className="py-10 px-10 text-xl sm:px-20 lg:px-30 quicksand bg-gray-100">
                <h2 className="text-4xl mb-5 dm-serif-text">Ejemplos</h2>
                <p>
                    Tenemos el ejemplo básico de invertir los caracteres en un string, este ejemplo requiere un puntero al inicio y otro al final del arreglo que se van acercando uno al otro
                </p>
                <div className="flex justify-center">
                    <img src="../components/imgs/ScreenshotTwoCode.png" alt="code" class="mt-5">
                </div>
            </div>

            <div className="py-10 px-10 text-xl sm:px-20 lg:px-30 quicksand">
            </div>
        </div>
    </div>
</template>

