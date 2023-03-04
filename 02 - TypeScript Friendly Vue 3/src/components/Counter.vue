<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { fetchCount } from '../fetchs';

import ControlBar from "./ControlBar.vue";

interface Props {
  limit: number;
  alertMessageOnLimit?: string;
};
const props = withDefaults(defineProps<Props>(), {
  alertMessageOnLimit: "can not go any higher"
});

const count = ref<number | null>(null);

onMounted(() => {
  fetchCount((initalConunt) => {
    count.value = initalConunt;
  });
});

function addCount(num: number) {
  if (count.value != null) {
    if (count.value >= props.limit) {
      alert(props.alertMessageOnLimit);
    } else {
      count.value += num;
    }
  }
}
</script>


<template>
  <div>
    <p>{{ count }}</p>
    <ControlBar
      @add-count="addCount"
      @reset="count = 0"
    />
  </div>
</template>