<template>
    <div class="file__component">
        <div class="file h-screen">
            <div class="file__content connection__content flex justify-center items-center  h-full">
                <div class="file__list flex flex-wrap justify-left items-center gap-5 px-10">
                    <div v-for="path in filpaths" class="file__list__item 
                    shadow-[0_3px_20px] shadow-gray-300 flex flex-col gap-2 p-3 h-70">
                        <div class="img w-[200px] h-[150px] flex flex-col gap-1">
                            <img :src="path.file" alt="" class=" w-full h-full object-cover">
                            <div class="download flex justify-end items-end">
                                <RouterLink to="" @click="downloadImage(path.file)">
                                    <i class="fa-solid fa-download text-sky-950 text-xl text-right" title="télécharger l'image"></i>
                                </RouterLink>
                            </div>
                        </div>
                        <div class="details flex flex-col gap-2 ">
                            <h4 class="text-sky-950 italic font-bold text-center"> {{ path.title }} </h4>
                            <p class="max-w-[172px] line-clamp-1"> {{ path.description }} </p>
                        </div>
                       <div class="see__more flex justify-center items-center">
                            <RouterLink to="" 
                            class="italic px-4 py-1 border border-sky-200 bg-sky-200 rounded-2xl font-bold hover:text-sky-950 text-xs">Voir Plus</RouterLink>
                       </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { useFileStore } from '@/stores/fileStore'
import { storeToRefs } from 'pinia';
import { onMounted } from 'vue';
const { filpaths } = storeToRefs(useFileStore())
const { getFile } = useFileStore()

onMounted(() => {
    getFile()
})  
const downloadImage = (dataURL:string) =>{
    const a = document.createElement('a');
    a.href = dataURL
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
}

</script>