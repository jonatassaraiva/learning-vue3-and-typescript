<script setup lang="ts">
import { reactive } from 'vue';
import { AppInfo } from './types';

import Counter from "./components/Counter.vue";

const appInfo: AppInfo = reactive({
  name: 'Counter',
  slogan: 'an app you can count on'
});

</script>

<template>
  <div>
    <div>
      <h1>{{appInfo.name}}</h1>
      <h2>{{appInfo.slogan}}</h2>
    </div>
    <Counter :limit="10" />
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
