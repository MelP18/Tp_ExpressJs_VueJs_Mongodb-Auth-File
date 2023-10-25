<template>
    <div class="connection__component">
        <div class="connection h-screen"><!-- h-[calc(100vh_-_64px)] -->
            <div class="connection__content flex justify-center items-center  h-full">
                <form enctype="multipart/form-data" @submit.prevent="addFile" class="w-2/5 shadow shadow-[2px_3px_5px] ">
                    <div class="fields flex flex-col gap-5">
                        <h2 class="px-5 py-3 bg-sky-950 text-white font-bold text-xl">AJOUTER UN FICHIER</h2>
                        <div class="field__list flex flex-col gap-4 p-5">
                            <div class="field__list__item flex flex-col gap-1">
                                <label for="file" class="text-sky-950 font-bold">Sélectionnez un fichier</label>
                                <input type="file" ref="fil.picture" @change="file"
                                    class="border py-2 px-4 outline-none text-gray-700 italic placeholder:text-gray-400 rounded-lg">
                            </div>
                            <div class="field__list__item flex flex-col gap-1">
                                <label for="title" class="text-sky-950 font-bold">Nom du fichier</label>
                                <input type="text" v-model="fileElement.title"
                                    class="border py-2 px-4 outline-none text-gray-700 placeholder:text-gray-400 rounded-lg">
                            </div>
                            <div class="field__list__item flex flex-col gap-1">
                                <label for="description" class="text-sky-950 font-bold">Description</label>
                                <input type="text" v-model="fileElement.description"
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
import { useFileStore } from '@/stores/fileStore'
import { storeToRefs } from 'pinia';
import { onMounted } from 'vue';
const { fileData, fileElement, filpaths } = storeToRefs(useFileStore())
const { file, addFile } = useFileStore()

onMounted(() => {
    file;
    addFile;

})

</script>