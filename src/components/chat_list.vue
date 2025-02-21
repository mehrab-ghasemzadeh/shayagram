<template>
    <section class="absolute w-full sm:static sm:w-2/5 sm:min-w-[300px] sm:max-w-[500px] max-h-svh overflow-y-hidden bg-white flex flex-col" :class="{'chatListState': store.inChat}">
        <clh/>
        <aside class="contactCard w-full flex flex-col h-full overflow-y-scroll">
            <button @click="openChat(contact.userId)" class="cardInfo w-full flex gap-4 justify-start items-center px-4 py-3 duration-100 active:bg-[#eee] border-b border-[#eee] " v-for="(contact, index) in store.contacts" :key="index">
                <img class="object-cover w-16 h-16 rounded-full" src="https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg" alt="">
                <div class="flex flex-col gap-2">
                    <span>{{ contact.userId }}</span>
                    <span class="h-6 overflow-hidden">
                        <span>{{ contact.title.slice(0,30) }}</span>
                        <span>...</span>
                    </span>
                </div>
            </button>
        </aside>
    </section>
</template>

<script>
    import useCounterStore from '../stores/store'
    import { ref, computed } from 'vue'
    import chat_list_headerVue from './chat_list_header.vue'
    export default{
        components:{
            clh: chat_list_headerVue
        },
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
    @media screen and (max-width: 680px) {
        .chatListState{
            display: none;
        }
    }
</style>