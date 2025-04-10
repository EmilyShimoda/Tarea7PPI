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
                    <h1 className="text-violet-950 text-7xl pt-20 sour-gummy">Búsqueda Binaria</h1>
                    <div class="text-right" >
                        <addFav/>
                    </div>
                </div>
                <p className="px-13 sm:px-23 md:px-33 text-2xl text-zinc-500 pb-10 quicksand">01/03/2025</p>

                <img src="../components/imgs/digitization-5194814_1920.jpg" alt="binary img" class="px-5 sm:px-15 md:px-25">
            
            </div>

            <div className="py-10 px-10 text-xl sm:px-20 lg:px-30 quicksand">
                <p>Si quisiera buscar el número 8 en el siguiente arreglo:</p>
                <div className="bg-zinc-50 p-3 rounded-2xl shadow-md my-5 text-center courier-prime text-lg">
                    <p> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] </p>
                </div>
                <p>Normalmente comparararías todos los elementos del arreglo hasta encontrar el que estas buscando, y en el peor de los casos, llegarías al final del arreglo sin encontrarlo.</p>
                <p>A esta técnica se le llama Búsqueda lineal y tiene una complejidad de O(n) siendo n el tamaño del arreglo. Una manera mas rápida de hacerlo es utilizando búsqueda binaria.</p>
            </div>

            <div className="py-10 px-10 text-xl sm:px-20 lg:px-30 quicksand bg-gray-100">
                <h2 className="text-4xl mb-5 dm-serif-text">¿Qué es Búsqueda Binaria?</h2>
                <p>
                    La búsqueda binaria es un algoritmo eficiente para encontrar un elemento en una lista <b>ordenada</b>. Funciona dividiendo repetidamente la lista en dos mitades y comparando el elemento buscado con el valor central
                </p>
                <p>
                    Para aplicar este algoritmo es necesario que:
                </p>
                <ul className="list-disc pl-4">
                    <li>La estructura debe estar ordenada</li>
                    <li>El acceso a cualquiera elemento de la estrcutura debe ser en tiempo lineal</li>
                </ul>
            </div>

            <div className="py-10 px-10 text-xl sm:px-20 lg:px-30 quicksand">
                <h2 className="text-4xl mb-5 dm-serif-text">¿Cómo funciona?</h2>
                <p>Como ya se mencionó anteriormente, primero dividimos nuestra estructura en dos partes, encontrando un índice en el centro, o &quot;mid&quot;</p>
                <p>Comparamos ese elemento con lo que estamos buscando, en caso de que sea menor ahora hacemos lo mismo para la mitad izquierda de la estructura, si es mayor lo repetimos en la mitad derecha, y si es igual, lo retornamos.</p>
                <p>¿Qué pasa si no lo encuentra? Retornará un indice inválido, o en este caso, -1</p>
                <p>Este algoritmo tiene una complejidad de O(log n)</p>
                <div className="flex justify-center">
                    <img src="../components/imgs/Screenshot.png" alt="code" class="mt-5">
                </div>
            </div>
        </div>
    </div>
</template>

