<script setup lang="ts">
    import { defineProps } from 'vue'
    import Movies from './Home/Movies.vue'
    import Trends from './Home/Trends.vue'
    import { MovieType } from '../interface'
    

    const { movies } = defineProps(['movies']) as { movies: MovieType[] }


</script>

<template>
    <section>
        <Trends/>
        <Movies :movies="movies"/>
    </section>
</template>