<template>
    <main class="w-full bg-green-300 max-h-svh overflow-y-scroll ">
        <button class="block p-3 m-2 mb-5 border" @click="store.inChat = false">x</button>
        <span>____________{{username}}___________</span>
        <div class="flex flex-col gap-3 p-5">
            <p class="border p-2 max-w-7/10" v-for="(message, index) in messages" :key="index">{{ message }}</p>
        </div>
    </main>
</template>

<script>
import CounterStore from '@/stores/store.js';
import { computed } from 'vue';
import axios from 'axios'
export default{
    data(){
        return{
            username:'',
            messages:[],
        }
    },
    created(){
        axios.get(`https://jsonplaceholder.typicode.com/posts/?userId=${this.store.openedChatId}`)
        .then((Response) => {
            console.log(Response)
            this.username = this.store.openedChatId;
            this.messages = [];
            for(let i in Response.data){
                this.messages.push(Response.data[i].body)
            }
            // this.username = Response.data[this.store.openedChatId].name;
            // this.messages = [];
            // for (let i in Response.data[this.store.openedChatId]){
            //     this.messages.push(Response.data[this.store.openedChatId][i]);
            // }
        })
        .catch((error) => {
            console.error(error);
        })
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