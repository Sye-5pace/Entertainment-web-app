<script setup lang="ts">
 import { ref,computed } from 'vue'
 import Movies from './Movies.vue'
 import Trends from './Trends.vue'
 
  //prop for movie/tvseries title
 const title = ref<string>('')

 const handleInputQuery = (event)=> {
    title.value = event.target.value
 }
  


 </script>

<template>
    <section class="flex flex-col w-full overflow-x-hidden gap-y-5">
        <div class="flex gap-2 ">
            <img src="../../public/assets/icon-search.svg" class="w-8 h-8" alt="">
            <input  type="text" placeholder="Search for movies or TV series" class="placeholder::text-[1.5rem] font-light text-opacity-50 bg-vulcan w-[20rem] focus:outline-none text-[#fff]" :value="title" @input="handleInputQuery">
        </div>
        <Trends/>
        <Movies :title="title" />
    </section>
</template>


