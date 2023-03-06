<script setup lang="ts">
import { reactive } from "vue";
import { PageInfo } from "@/types";

const pageInfo: PageInfo = reactive({
  title: "About",
  description:
    "This project implements the use of some frameworks to build a web application using Nuxt 3 and TypeScript.",
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
    <v-btn variant="outlined" to="/"> home </v-btn>
  </v-row>
</template>
