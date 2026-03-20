<script setup>
import NavBar from './components/NavBar.vue';
</script>

<template>
  <div>
    <NavBar/>
    <div class="container mt-4">
      <!-- 화면 출력 -->
      <router-view/>
    </div>
  </div>
</template>

<style scoped>

</style>