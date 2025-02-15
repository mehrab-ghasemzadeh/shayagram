<template>
  <main>
    <h1>adjaofn</h1>
    <h2>{{ store.name }}</h2>
  </main>
</template>

<script>
  import useCounterStore from '../stores/store'
  import { ref, computed } from 'vue'
  export default{
    setup(){
      const counterStore = useCounterStore();
      return {
        store: computed(() => counterStore),
      };
    },
  }
</script>
