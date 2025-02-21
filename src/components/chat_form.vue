<template>
    <section class="w-full bg-green-300 max-h-svh overflow-y-hidden flex flex-col">
        <cfh/>
        <section class="flex flex-col gap-3 p-5 h-full  overflow-y-scroll">
            <div v-for="(message, index) in messages" :key="index" class="flex flex-col gap-3" :class="{'items-end': index%num==0, 'items-start': index%num!=0}">
                <p class="p-2 bg-[#f5f5f5] max-w-7/10 rounded-lg" :class="{'sent': index%num==0, 'recieved': index%num!=0}">{{ message }}</p>
            </div>
            <!--  -->
            <div v-for="(message, index) in messages" :key="index" class="flex flex-col gap-3" :class="{'items-end': index%num==0, 'items-start': index%num!=0}">
                <p class="p-2 bg-[#f5f5f5] max-w-7/10 rounded-lg" :class="{'sent': index%num==0, 'recieved': index%num!=0}">{{ message }}</p>
            </div>
            <div v-for="(message, index) in messages" :key="index" class="flex flex-col gap-3" :class="{'items-end': index%num==0, 'items-start': index%num!=0}">
                <p class="p-2 bg-[#f5f5f5] max-w-7/10 rounded-lg" :class="{'sent': index%num==0, 'recieved': index%num!=0}">{{ message }}</p>
            </div>
        </section>
        <section class="inp sticky bottom-0 flex justify-center items-center bg-white w-full h-20 p-3 gap-3">
            <input type="text" class="rounded-md w-full p-1">
            <button class="p-3 bg-[#4bc] aspect-square flex justify-center items-center rounded-md" style="color: white;">></button>
        </section>
    </section>
</template>

<script>
import CounterStore from '@/stores/store.js';
import { computed } from 'vue';
import axios from 'axios'
import chat_form_headerVue from './chat_form_header.vue';
export default{
    components:{
        cfh: chat_form_headerVue
    },
    data(){
        return{
            username:'',
            messages:[],
            num: this.store.openedChatId+1
        }
    },
    created(){
        axios.get(`https://jsonplaceholder.typicode.com/posts/?userId=${this.store.openedChatId}`)
        .then((Response) => {
            this.username = this.store.openedChatId;
            this.messages = [];
            for(let i in Response.data){
                this.messages.push(Response.data[i].body)
            }
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
.inp input{
    border: 1px solid #d9d9d9;
}
.inp input:focus{
    border: 1px solid #bbb;
}
</style>