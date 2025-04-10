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
                    <h1 className="text-violet-950 text-7xl pt-20 sour-gummy">Prefix Sum</h1>
                    <div class="text-right" >
                        <addFav/>
                    </div>
                </div>
                <p className="px-13 sm:px-23 md:px-33 text-2xl text-zinc-500 pb-10 quicksand">01/03/2025</p>


                <img src="../components/imgs/digitization-5194814_1920.jpg" alt="binary img" class="px-5 sm:px-15 md:px-25">
            
            </div>

            <div className="py-10 px-10 text-xl sm:px-20 lg:px-30 quicksand">
                <p>En un arreglo de enteros, un arreglo de prefix sum es un arreglo en el que cada elemento representa la suma de todos los elementos del arreglo original hasta ese índice</p>
                <p>Por ejemplo, en el siguiente arreglo:</p>
                <div className="bg-zinc-50 p-3 rounded-2xl shadow-md my-5 text-center courier-prime text-lg">
                    <p> [1, 2, 3, 4, 5] </p>
                </div>
            </div>

            <div className="py-10 px-10 text-xl sm:px-20 lg:px-30 quicksand bg-gray-100">
                <h2 className="text-4xl mb-5 dm-serif-text">Ejemplo</h2>
                <p>
                    En el ejemplo anterior, tenemos un arreglo con n = 5, diremos que el prefix sum es p[]:
                </p>
                <div className="bg-zinc-50 p-3 rounded-2xl shadow-md my-5 text-left courier-prime text-lg">
                    <p> p[0] = arreglo[0] = 1 </p>
                    <p> p[1] = arreglo[0] + arreglo[1] = 3 </p>
                    <p> p[2] = arreglo[0] + arreglo[1] + arreglo[2] = 6 </p>
                    <p> p[2] = arreglo[0] + arreglo[1] + arreglo[2] + arreglo[3] = 10 </p>
                    <p> p[2] = arreglo[0] + arreglo[1] + arreglo[2] + arreglo[3] + arreglo[4] = 15 </p>
                </div>
            </div>

            <div className="py-10 px-10 text-xl sm:px-20 lg:px-30 quicksand">
                <h2 className="text-4xl mb-5 dm-serif-text">¿Cómo funciona?</h2>
                <p>Crea un arreglo prefix del mismo tamaño del arreglo e inicia su primer elemeto igual al primer elemento del arreglo original, ya que inicialmente la suma es igual al primer elemento del arreglo</p>
                <p>Para cada indice del prefix suma el elemento anterior del prefix + elemento del arreglo: </p>
                <div className="bg-zinc-50 p-3 rounded-2xl shadow-md my-5 text-center courier-prime text-lg">
                    <p> p[1] = p[0] + arr[1] </p>
                </div>
                <p>Repite el proceso anterior para cada indice del 1 al n</p>
                <div className="bg-zinc-50 p-3 rounded-2xl shadow-md my-5 text-center courier-prime text-lg">
                    <p> p[i] = p[i - 1] + arr[i] </p>
                </div>
                <p>Este algoritmo tiene una complejidad de O(n)</p>
                <div className="flex justify-center">
                    <img src="../components/imgs/ScreenshotPrefixCode.png" alt="code" class="mt-5">
                </div>
            </div>
        </div>
    </div>
</template>

