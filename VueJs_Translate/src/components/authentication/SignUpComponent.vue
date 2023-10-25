<template>
    <div class="registration__compnent">
        <main class="p-5 h-[calc(100vh_-_64px)] overflow-scroll">
            <div class="registration ">
                <div class="registration__content flex justify-center items-center w-full">
                    <form @submit.prevent="registration" class="w-2/5 shadow shadow-[2px_3px_5px] ">
                        <div class="fields flex flex-col gap-5">
                            <h2 class="px-5 py-3 bg-sky-950 text-white font-bold text-xl">INSCRIPTION</h2>
                            <div class="field__list flex flex-col gap-4 p-5">
                                <div class="field__list__item flex flex-col gap-1">
                                    <label for="username" class="text-sky-950 font-bold">Pseudo</label>
                                    <input type="text" v-model="userData.username"
                                        class="border py-2 px-4 outline-none text-gray-700 italic placeholder:text-gray-400 rounded-lg">
                                </div>
                                <div class="field__list__item flex flex-col gap-1">
                                    <label for="surname" class="text-sky-950 font-bold">Nom</label>
                                    <input type="text" v-model="userData.surname"
                                        class="border py-2 px-4 outline-none text-gray-700 italic placeholder:text-gray-400 rounded-lg">
                                </div>
                                <div class="field__list__item flex flex-col gap-1">
                                    <label for="firstname" class="text-sky-950 font-bold">Prénom(s)</label>
                                    <input type="text" v-model="userData.firstname"
                                        class="border py-2 px-4 outline-none text-gray-700 italic placeholder:text-gray-400 rounded-lg">
                                </div>
                                <div class="field__list__item flex flex-col gap-1">
                                    <label for="email" class="text-sky-950 font-bold">Email</label>
                                    <input type="email" v-model="userData.email" placeholder="no_replay@gmail.com"
                                        class="border py-2 px-4 outline-none text-gray-700 italic placeholder:text-gray-400 rounded-lg">
                                </div>
                                <div class="field__list__item flex flex-col gap-1">
                                    <label for="password" class="text-sky-950 font-bold">Mot de Passe</label>
                                    <input type="password" v-model="userData.password"
                                        class="border py-2 px-4 outline-none text-gray-700 italic placeholder:text-gray-400 rounded-lg">
                                </div>
                                <div class="field__list__item flex flex-col gap-1">
                                    <label for="password" class="text-sky-950 font-bold">Mot de Passe</label>
                                    <input type="password" v-model="userData.confirm_password"
                                        class="border py-2 px-4 outline-none text-gray-700 italic placeholder:text-gray-400 rounded-lg">
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
        </main>

    </div>
</template>


<script lang="ts" setup>
import HeaderComponent from '@/components/master/HeaderComponent.vue';
import { useAuthenticationStore } from '@/stores/authStore';
import { storeToRefs } from 'pinia';
import { onMounted } from 'vue';

const { registration } = useAuthenticationStore()
const { userData, vueUserData } = storeToRefs(useAuthenticationStore())

onMounted(() => {
    registration
})
</script>