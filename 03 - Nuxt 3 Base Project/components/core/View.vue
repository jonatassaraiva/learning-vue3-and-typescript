<template>
  <v-main class="grey">
    <v-fade-transition mode="out-in">
      <v-container id="core-view">
        <v-col>
          <slot />
        </v-col>
      </v-container>
    </v-fade-transition>
  </v-main>
</template>
