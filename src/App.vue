<script setup lang="ts">
  import Sidebar from './components/Sidebar.vue';
  import Main from './components/Main.vue';
</script>

<template>
  <main class="grid w-full min-h-screen px-5 m-0 grid-cols-[10%_80%] gap-9 border-box font-outfit bg-vulcan pt-8">
    <Sidebar />
    <Main/>
  </main>
</template>

