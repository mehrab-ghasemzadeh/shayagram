<template>
    <main class="absolute w-full sm:static sm:w-2/5 sm:min-w-[300px] sm:max-w-[500px] max-h-svh overflow-y-scroll bg-white">
        <div class="contactCard w-full flex border-b border-[#eee]" v-for="(contact, index) in store.contacts" :key="index">
            <!-- <img class="object-cover w-16 h-16 rounded-full" src="https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg" alt=""> -->
            <button @click="openChat(contact.userId)" class="cardInfo flex flex-col gap-2 justify-evenly items-start px-10 sm:px-4 py-3 duration-100 active:bg-[#eee]">
                <span>{{ contact.userId }}</span>
                <span>{{ contact.title.slice(0,40) }} <span v-if="contact.title.length > 40">...</span> </span>
            </button>
        </div>
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
        methods:{
            openChat(index){
                this.store.inChat = false;
                this.store.openedChatId = -1;
                setTimeout(() => {
                    this.store.openedChatId = index;
                    this.store.inChat = true;
                }, 10);
            }
        },
    }
</script>

<style scoped>
    span{
        text-align: start;
    }
</style>