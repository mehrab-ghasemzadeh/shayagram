<template>
  <RouterView />
</template>

<script>
  import axios from 'axios'
  import useCounterStore from './stores/store'
  import { ref, computed } from 'vue'
  export default{
    setup(){
      const counterStore = useCounterStore();
      return {
        store: computed(() => counterStore),
      };
    },
    created(){
      axios.get('https://jsonplaceholder.typicode.com/posts')
      .then((Response) => {
        this.store.contacts = Response.data;
        // console.log(this.store.contacts);  
      })
      .catch((error) => {
        console.error(error);
      })
    },
  }
</script>

<style scoped>

</style>
