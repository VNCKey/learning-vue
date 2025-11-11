<script setup lang="ts">
import { useCounter } from '@/composable/useCounter';

//const props = defineProps({ value: { type: Number, required: true } });
//const props = defineProps<Props>();

const { counter, squareCounter } = useCounter(10);
</script>
<template>
  <h1></h1>
  <section>
    <h3>Counter{{ counter }}</h3>
    <h3>Square{{ squareCounter }}</h3>
    <div>
      <button class="p-2 w-16 bg-amber-400 mr-2" @click="counter++">+1</button>
      <button class="p-2 w-16 bg-amber-400 mr-2" @click="counter--">-1</button>
    </div>
  </section>
</template>
<style scoped></style>
