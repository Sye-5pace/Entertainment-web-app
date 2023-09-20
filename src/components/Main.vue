<script setup>
 import Movies from './Movies.vue'
</script>

<template>
    <section class="flex flex-col gap-y-8">
        <div class="flex gap-2 ">
            <img src="../assets/icon-search.svg" class="w-8 h-8" alt="">
            <input type="text" placeholder="Search for movies or TV series" class="placeholder::text-[1.5rem] font-light text-opacity-50 bg-vulcan w-[20rem] focus:outline-none text-[#fff]">
        </div>
        <div>
            <h3 class="text-[#fff] font-light text-[2rem]">Trending</h3>
        </div>
        <Movies/>
    </section>
</template>