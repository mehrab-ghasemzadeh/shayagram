import { defineStore } from 'pinia';

const CounterStore = defineStore('data', {
    state: () => ({
        inChat: false,
        openedChatId: -1,
    }),
    actions: {
        
    },
    
});

export default CounterStore;