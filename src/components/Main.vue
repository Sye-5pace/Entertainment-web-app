<script setup>
 import { ref,watch } from 'vue'
 import Movies from './Movies.vue'

 const trends = ref([
    {
        title: "Beyond Earth",
        trending: `../assets/thumbnails/beyond-earth/trending/large.jpg`,
        year: 2019,
        category: "Movie",
        rating: "PG",
        isBookmarked: false,
        isTrending: true
    },
    {
        title: "Bottom Gear",
        trending: `../assets/thumbnails/bottom-gear/trending/large.jpg`,
        year: 2021,
        category: "Movie",
        rating: "PG",
        isBookmarked: false,
        isTrending: true
    },
    {
        title: "Undiscovered Cities",
        trending: `../assets/thumbnails/undiscovered-cities/trending/large.jpg`,
        year: 2019,
        category: "TV Series",
        rating: "E",
        isBookmarked: false,
        isTrending: true
    },
    {
        title: "1998",
        trending: `../assets/thumbnails/1998/trending/large.jpg`,
        year: 2021,
        category: "Movie",
        rating: "18+",
        isBookmarked: false,
        isTrending: true
    },
    {
        title: "Dark Side of the Moon",
        trending: `../assets/thumbnails/dark-side-of-the-moon/trending/large.jpg`,
        year: 2018,
        category: "TV Series",
        rating: "PG",
        isBookmarked: true,
        isTrending: true
    },
 ])

 </script>

<template>
    <section class="flex flex-col w-full gap-y-5">
        <div class="flex gap-2 ">
            <img src="../../public/assets/icon-search.svg" class="w-8 h-8" alt="">
            <input type="text" placeholder="Search for movies or TV series" class="placeholder::text-[1.5rem] font-light text-opacity-50 bg-vulcan w-[20rem] focus:outline-none text-[#fff]">
        </div>
        <div class="flex flex-col gap-y-2" >
            <h3 class="text-[#fff] font-light text-[2rem]">Trending</h3>
            <div class="flex text-[#fff] flex-row gap-2 h-[14.375rem]">
                <div class="w-full" v-for="(item,index) in trends" :key="index">
                    <div>
                        <img :src="item.trending" :alt="item.trending" class="relative w-[35rem] h-[14.375rem] rounded-[0.5rem] object-cover">
                        <div class="relative bottom-[12.8rem] left-[14.3rem] w-8 h-8 rounded-full bg-vulcan bg-opacity-40 z-[999] flex items-center justify-center hover:bg-white cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-5 cursor-pointer hover:stroke-vulcan" :class="item.isBookmarked ? 'stroke-none fill-white': 'stroke-white fill-none'">
                              <path stroke-linecap="round" stroke-linejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
                            </svg>  
                        </div>
                    </div>
                    <div class="absolute flex flex-col  top-[18.5rem] ml-6 ">
                        <div class="flex gap-2 opacity-75 text-[0.9375rem] font-light items-center">
                            <span>{{ item.year }}</span>
                            <span class="bg-[#fff] rounded-full w-[0.19rem] h-[0.19rem]"></span>
                            <span>{{ item.category }}</span>
                            <span class="bg-[#fff] rounded-full w-[0.19rem] h-[0.19rem]"></span>
                            <span>{{ item.rating }}</span>
                        </div>
                        <h3 class="text-[1.5rem] font-medium">{{ item.title }}</h3>
                    </div>
                </div>
            </div>
        </div>
        <Movies/>
    </section>
</template>


