<script setup lang="ts">
import { reactive } from "vue";
import { PageInfo } from "@/types";

const pageInfo: PageInfo = reactive({
  title: "Home",
  description: "Web project base with NUXT 3, TypeScript and Lambda Host",
});

useHead({
  title: pageInfo.title,
  meta: [{ name: "description", content: pageInfo.description }],
});
</script>

<template>
  <v-row>
    <p class="text-h3">{{ pageInfo.title }}</p>
  </v-row>
  <v-row>
    <p class="text-subtitle-1">{{ pageInfo.description }}</p>
  </v-row>
  <v-row>
    <v-btn variant="outlined" to="/about"> Abount </v-btn>
  </v-row>
</template>
