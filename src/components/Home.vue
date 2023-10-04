<script setup lang="ts">
    import { ref, defineProps } from 'vue'
    import Movies from './Home/Movies.vue'
    import Trends from './Home/Trends.vue'


    const { movies } = defineProps(['movies'])


</script>

<template>
    <section>
        <Trends/>
        <Movies :movies="movies"/>
    </section>
</template>