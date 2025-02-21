<template>
    <header class="bg-white shadow-md flex justify-between items-center sticky top-0 border-s border-[#eee]">
        <button class=" active:bg-[#eee] p-3 rounded-e-md duration-100" @click="store.inChat = false">
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M560-240 320-480l240-240 56 56-184 184 184 184-56 56Z"/></svg>
        </button>
        <h1 class="text-bold font-lg">name</h1>
        <button class=" active:bg-[#eee] p-3 rounded-s-md duration-100" @click="showOpt = !showOpt">
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M480-160q-33 0-56.5-23.5T400-240q0-33 23.5-56.5T480-320q33 0 56.5 23.5T560-240q0 33-23.5 56.5T480-160Zm0-240q-33 0-56.5-23.5T400-480q0-33 23.5-56.5T480-560q33 0 56.5 23.5T560-480q0 33-23.5 56.5T480-400Zm0-240q-33 0-56.5-23.5T400-720q0-33 23.5-56.5T480-800q33 0 56.5 23.5T560-720q0 33-23.5 56.5T480-640Z"/></svg>
        </button>
    </header>
    <div v-show="showOpt" class="absolute top-16 right-3 min-w-64 bg-white rounded-md p-1">
        <ul>
            <li>
                <button class="w-full flex gap-2 justify-between items-center active:bg-[#eee] hover:bg-[#f7f7f7] p-1 duration-100 rounded-sm">
                    <span>this action</span>
                </button>
            </li>
            <li>
                <button class="w-full flex gap-2 justify-between items-center active:bg-[#eee] hover:bg-[#f7f7f7] p-1 duration-100 rounded-sm">
                    <span>that action</span>
                </button>
            </li>
            <li>
                <button class="w-full flex gap-2 justify-between items-center active:bg-[#eee] hover:bg-[#f7f7f7] p-1 duration-100 rounded-sm" @click="muted = !muted">
                    <span :class="{'colRed':muted}"><span v-if="muted">un</span>mute conversavion</span>
                    <svg v-if="muted" xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M792-56 671-177q-25 16-53 27.5T560-131v-82q14-5 27.5-10t25.5-12L480-368v208L280-360H120v-240h128L56-792l56-56 736 736-56 56Zm-8-232-58-58q17-31 25.5-65t8.5-70q0-94-55-168T560-749v-82q124 28 202 125.5T840-481q0 53-14.5 102T784-288ZM650-422l-90-90v-130q47 22 73.5 66t26.5 96q0 15-2.5 29.5T650-422ZM480-592 376-696l104-104v208Zm-80 238v-94l-72-72H200v80h114l86 86Zm-36-130Z"/></svg>
                    <svg v-else xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M560-131v-82q90-26 145-100t55-168q0-94-55-168T560-749v-82q124 28 202 125.5T840-481q0 127-78 224.5T560-131ZM120-360v-240h160l200-200v640L280-360H120Zm440 40v-322q47 22 73.5 66t26.5 96q0 51-26.5 94.5T560-320ZM400-606l-86 86H200v80h114l86 86v-252ZM300-480Z"/></svg>
                </button>
            </li>
        </ul>
    </div>
</template>

<script>
    import useCounterStore from '../stores/store'
    import { ref, computed } from 'vue'
    export default{
        data(){
            return{
                showOpt: false,
                muted: false,
            }
        },
        setup(){
            const counterStore = useCounterStore();
            return {
                store: computed(() => counterStore),
            };
        },
    }
</script>

<style scoped>
    .colRed, .colRed + svg{
        color: #922;
        fill: #922;
    }
</style>