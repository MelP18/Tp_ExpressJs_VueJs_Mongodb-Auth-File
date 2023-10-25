<template>
    <div class="home__layout">
        <div class="block">
            <div class="block__cntent flex">
                <div class="block__left">
                    <SidebarComponent/>
                </div>
                <div class="block__right w-full overflow-x-hidden">
                    <RouterView />
                </div>
            </div>
        </div>
    </div>
   
</template>


<script lang="ts" setup>

import { RouterView } from 'vue-router';
import SidebarComponent from '@/components/master/SidebarComponent.vue';

</script>