import { computed, ref } from 'vue';

export const useCounter = (initial_value: number) => {
  const counter = ref(initial_value);
  const squareCounter = computed(() => counter.value * counter.value);
  return { counter, squareCounter };
};
