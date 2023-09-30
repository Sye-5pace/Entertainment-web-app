<script setup lang="ts">
    import { ref,computed, defineProps } from 'vue'
    import Movies from './Movies.vue'
    import Trends from './Trends.vue'


    const { movies } = defineProps(['movies'])


</script>

<template>
    <section>
        <Trends/>
        <Movies :movies="movies"/>
    </section>
</template>