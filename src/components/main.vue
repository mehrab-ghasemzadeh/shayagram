<template>
    <main>
        <mh/>
        <div class="contactCardContainer w-full sm:min-w-[400px] sm:max-w-[500px] sm:w-2/5 flex flex-col gap-3 p-10 sm:p-4 border">
        <div class="contactCard w-full flex gap-3 border-b border-[#eee] pb-3" v-for="(contact, index) in store.contacts" :key="index">
            <img class="object-cover w-16 h-16 rounded-full" src="https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg" alt="">
            <div class="cardInfo flex flex-col gap-2">
            <span>{{ contact.name.slice(0,40) }} <span v-if="contact.name.length > 40">...</span> </span>
            <span>{{ contact.body.slice(0,40) }} <span v-if="contact.body.length > 40">...</span> </span>
            </div>
        </div>
        </div>
    </main>
</template>

<script>
    import useCounterStore from '../stores/store'
    import { ref, computed } from 'vue'
    import mainHeader from './mainNav.vue'
    export default{
        components:{
        mh: mainHeader
        },
        setup(){
        const counterStore = useCounterStore();
        return {
            store: computed(() => counterStore),
        };
        },
    }
</script>