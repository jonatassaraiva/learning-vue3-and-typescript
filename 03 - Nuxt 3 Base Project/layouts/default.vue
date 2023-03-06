<script setup lang="ts">
const drawer = ref(true);

const runtimeConfig = useRuntimeConfig();
const VUETFY_ISSUE_15202 = runtimeConfig.VUETFY_ISSUE_15202;
</script>

<template>
  <v-app v-if="!VUETFY_ISSUE_15202">
    <!-- TODO: Create component to navigation -->
    <v-navigation-drawer v-model="drawer" width="204">
      <!-- TODO: Menu -->
    </v-navigation-drawer>

    <!-- TODO: Create component to app-bar -->
    <v-app-bar>
      <v-app-bar-nav-icon @click="drawer = !drawer" />
      <!-- TODO: Get application title from .env -->
      <v-toolbar-title>Application Title</v-toolbar-title>

      <v-spacer />

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
    </v-app-bar>

    <core-view>
      <slot />
    </core-view>
  </v-app>
</template>
