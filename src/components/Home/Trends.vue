<script setup lang="ts">
    import Iconplay from '../../../public/assets/iconplay.svg'
    import { TrendType } from '../../interface'


    const trends: TrendType[] = [
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
 ]
</script>

<template>
    <div class="flex flex-col gap-y-2" >
        <h3 class="text-[#fff] font-light text-[2rem]">Trending</h3>
        <div class="flex text-[#fff] flex-row gap-7 h-[15.875rem] w-full overflow-x-scroll">
            <div class="" v-for="(item,index) in trends" :key="index">
                <!-- trends img -->
                <div :style="{ backgroundImage: `url(${item.trending})`}" class="bg-cover w-[29.375rem] h-[14rem] rounded-[0.5rem] flex items-center justify-center">
                    <div id="play"  class="w-[7.3125rem] h-[3rem] rounded-[1.78125rem] bg-[#fff] bg-opacity-25 flex gap-[1.1875rem] items-center justify-center cursor-pointer" >
                        <img :src="Iconplay" alt="">
                        <h3>Play</h3>
                    </div>
                    <div class="w-8 h-8 rounded-full bg-vulcan bg-opacity-40 z-[999] flex items-center justify-center hover:bg-white cursor-pointer self-start relative left-[9rem] top-[1.875rem]">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-5 cursor-pointer hover:stroke-vulcan" :class="item.isBookmarked ? 'stroke-none fill-white': 'stroke-white fill-none'">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
                        </svg>  
                    </div>
                </div>
                <!-- Trends details -->
                <div class="relative flex flex-col ml-6 bottom-[4rem]">
                    <div class="flex gap-2 opacity-75 text-[0.9375rem] font-light items-center">
                        <span>{{ item.year }}</span>
                        <span class="bg-[#fff] rounded-full w-[0.19rem] h-[0.19rem]"></span>
                        <span v-if="item.category === 'Movie'">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 cursor-pointer stroke-white ">
                              <path stroke-linecap="round" stroke-linejoin="round" d="M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 01-1.125-1.125M3.375 19.5h1.5C5.496 19.5 6 18.996 6 18.375m-3.75 0V5.625m0 12.75v-1.5c0-.621.504-1.125 1.125-1.125m18.375 2.625V5.625m0 12.75c0 .621-.504 1.125-1.125 1.125m1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125m0 3.75h-1.5A1.125 1.125 0 0118 18.375M20.625 4.5H3.375m17.25 0c.621 0 1.125.504 1.125 1.125M20.625 4.5h-1.5C18.504 4.5 18 5.004 18 5.625m3.75 0v1.5c0 .621-.504 1.125-1.125 1.125M3.375 4.5c-.621 0-1.125.504-1.125 1.125M3.375 4.5h1.5C5.496 4.5 6 5.004 6 5.625m-3.75 0v1.5c0 .621.504 1.125 1.125 1.125m0 0h1.5m-1.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125m1.5-3.75C5.496 8.25 6 7.746 6 7.125v-1.5M4.875 8.25C5.496 8.25 6 8.754 6 9.375v1.5m0-5.25v5.25m0-5.25C6 5.004 6.504 4.5 7.125 4.5h9.75c.621 0 1.125.504 1.125 1.125m1.125 2.625h1.5m-1.5 0A1.125 1.125 0 0118 7.125v-1.5m1.125 2.625c-.621 0-1.125.504-1.125 1.125v1.5m2.625-2.625c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125M18 5.625v5.25M7.125 12h9.75m-9.75 0A1.125 1.125 0 016 10.875M7.125 12C6.504 12 6 12.504 6 13.125m0-2.25C6 11.496 5.496 12 4.875 12M18 10.875c0 .621-.504 1.125-1.125 1.125M18 10.875c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125m-12 5.25v-5.25m0 5.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125m-12 0v-1.5c0-.621-.504-1.125-1.125-1.125M18 18.375v-5.25m0 5.25v-1.5c0-.621.504-1.125 1.125-1.125M18 13.125v1.5c0 .621.504 1.125 1.125 1.125M18 13.125c0-.621.504-1.125 1.125-1.125M6 13.125v1.5c0 .621-.504 1.125-1.125 1.125M6 13.125C6 12.504 5.496 12 4.875 12m-1.5 0h1.5m-1.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125M19.125 12h1.5m0 0c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h1.5m14.25 0h1.5" />
                            </svg>                  
                        </span>
                        <span v-else-if="item.category === 'TV Series'">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 cursor-pointer stroke-[#fff]">
                              <path stroke-linecap="round" stroke-linejoin="round" d="M6 20.25h12m-7.5-3v3m3-3v3m-10.125-3h17.25c.621 0 1.125-.504 1.125-1.125V4.875c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125z" />
                            </svg>
                        </span>
                        <span>{{ item.category }}</span>
                        <span class="bg-[#fff] rounded-full w-[0.19rem] h-[0.19rem]"></span>
                        <span>{{ item.rating }}</span>
                    </div>
                    <h3 class="text-[1.5rem] font-medium">{{ item.title }}</h3>
                </div>
            </div>
        </div>
    </div>
</template>
    