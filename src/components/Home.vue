<script setup lang="ts">
    import { defineProps } from 'vue'
    import Movies from './Home/Movies.vue'
    import Trends from './Home/Trends.vue'

    interface MovieType {
    title: string;
    thumbnail: {
      regular: {
        small: string;
        medium: string;
        large: string;
      };
    };
    year: number;
    category: string;
    rating: string;
    isBookmarked: boolean;
    isTrending: boolean;
    }

    const { movies } = defineProps(['movies']) as { movies: MovieType[] }


</script>

<template>
    <section>
        <Trends/>
        <Movies :movies="movies"/>
    </section>
</template>