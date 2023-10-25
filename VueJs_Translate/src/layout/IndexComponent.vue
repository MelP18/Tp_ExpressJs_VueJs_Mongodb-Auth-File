<template>
     <div class="block">
        <div class="block__cntent">
            <div class="index__layout">
                <HeaderComponent />
            </div>
            <div class="main">
                <RouterView />
            </div>
        </div>
    </div>
</template>


<script lang="ts" setup>

import { RouterView } from 'vue-router';
import HeaderComponent from '@/components/master/HeaderComponent.vue';

</script>