<template>
    <div class="connection__component">
        <div class="connection h-[calc(100vh_-_64px)]">
            <div class="connection__content flex justify-center items-center w-full h-full">
                <form @submit.prevent="connection" class="w-2/5 shadow shadow-[2px_3px_5px] ">
                    <div class="fields flex flex-col gap-5">
                        <h2 class="px-5 py-3 bg-sky-950 text-white font-bold text-xl">CONNECTION</h2>
                        <div class="field__list flex flex-col gap-4 p-5">
                            <div class="field__list__item flex flex-col gap-1">
                                <label for="email" class="text-sky-950 font-bold">Email</label>
                                <input type="email" v-model="data.email" placeholder="no_replay@gmail.com"
                                    class="border py-2 px-4 outline-none text-gray-700 italic placeholder:text-gray-400 rounded-lg">
                            </div>
                            <div class="field__list__item flex flex-col gap-1">
                                <label for="password" class="text-sky-950 font-bold">Password</label>
                                <input type="password" v-model="data.password"
                                    class="border py-2 px-4 outline-none text-gray-700 placeholder:text-gray-400 rounded-lg">
                            </div>
                        </div>
                    </div>
                    <div class="submit__btn flex justify-end items-end p-5">
                        <button
                            class="px-10 py-1 border border-sky-950 rounded-2xl font-bold hover:text-sky-950">Envoyez</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>


<script lang="ts" setup>
import HeaderComponent from '@/components/master/HeaderComponent.vue';
import { useAuthenticationStore } from '@/stores/authStore';
import { storeToRefs } from 'pinia';
import { onMounted } from 'vue';

const { data, vueConnectData } = storeToRefs(useAuthenticationStore())
const { connection } = useAuthenticationStore()

onMounted(() => {
    connection
})
</script>