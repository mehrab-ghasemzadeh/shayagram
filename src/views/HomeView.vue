<template>
  <main class="flex">
    <chat_list/>
    <chat_form v-if="store.inChat"/>
    <no_chat_form v-else/>
  </main>
</template>

<script>
import CounterStore from '@/stores/store.js';
import { computed } from 'vue';
import chat_list from '../components/chat_list.vue'
import chat_form from '../components/chat_form.vue'
import no_chat_form from '../components/no_chat_form.vue'
export default{
  components:{
    chat_list: chat_list,
    chat_form: chat_form,
    no_chat_form: no_chat_form
  },
  setup(){
    return {
      store: computed(() => CounterStore()),
    };
  },
}
</script>

<style scoped>

</style>