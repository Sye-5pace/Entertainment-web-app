<script setup>
    import { ref,defineProps } from 'vue'
    
    const { movies } = defineProps(['movies'])
    const tvseriesOnly = ref([])

    const tvseriesCat = () => {
        tvseriesOnly.value = movies.filter(movie => movie.category === 'TV Series')
    }

    tvseriesCat();
</script>

<template>
    <div>
        <h2 class="text-[2rem] text-white">TV Series</h2>
        <div class="grid grid-cols-4 text-white gap-y-[2rem]  children:rounded-[0.5rem]">
            <div v-for="(item, index) in tvseriesOnly" :key="index" class="flex flex-col gap-y-1">
                <div class="flex w-full">
                  <img :src="item.thumbnail.regular.small" class=" relative w-[20rem] h-[10.9125rem] rounded-[0.5rem] object-cover z-0"/>
                  <div class="relative top-6 right-10 w-9 h-8 rounded-full bg-vulcan hover:bg-white bg-opacity-40 z-[999] flex items-center justify-center cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-5 cursor-pointer hover:stroke-vulcan" :class="item.isBookmarked ? 'stroke-none fill-white': 'stroke-white fill-none'">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
                    </svg>  
                  </div>
                </div>
                <div class=" flex flex-col  top-[18.5rem]">
                    <div class="flex gap-2 opacity-75 text-[0.8125rem] font-light items-center">
                        <span>{{ item.year }}</span>
                        <span class="bg-[#fff] rounded-full w-[0.19rem] h-[0.19rem]"></span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 cursor-pointer stroke-[#fff] hover:stroke-sunsetorange">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 20.25h12m-7.5-3v3m3-3v3m-10.125-3h17.25c.621 0 1.125-.504 1.125-1.125V4.875c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125z" />
                        </svg>                  
                        <span>{{ item.category }}</span>
                        <span class="bg-[#fff] rounded-full w-[0.19rem] h-[0.19rem]"></span>
                        <span>{{ item.rating }}</span>
                    </div>
                    <h3 class="text-[1.125rem] font-medium">{{ item.title }}</h3>
                </div>
            </div>
        </div>
    </div>
</template>