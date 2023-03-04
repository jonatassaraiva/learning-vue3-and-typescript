<script setup lang="ts">
import { reactive } from "vue";
import { PageInfo } from "@/types";

const pageInfo: PageInfo = reactive({
  title: "Home",
  description: "Web project base with NUXT 3 and TypeScript"
});

useHead({
  title: pageInfo.title,
  meta: [{ name: "description", content: pageInfo.description }],
});
</script>

<template>
  <div>
    <h1>{{ pageInfo.title }}</h1>
    <p>{{ pageInfo.description }}</p>
    <NuxtLink to="/about">
      About
    </NuxtLink>
  </div>
</template>
