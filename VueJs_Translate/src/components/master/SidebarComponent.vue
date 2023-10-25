/*=============================+++ HTML +++==============================*/
<template>
    <div class="sidebar__component">
        <div class="sidebar">
            <div class="sidebar__content w-60 bg-sky-200 h-screen flex flex-col justify-between px-5">
                <div class="sidebar__top flex flex-col gap-10 py-10">
                    <div class="logo flex justify-center">
                        <LogoComponent />
                    </div>
                    <div class="sidebar__menu">
                        <ul class="sidebar__menu__list flex flex-col gap-4">
                            <li class="sidebar__menu__list__item">
                                <RouterLink to="/home" 
                                class="flex gap-3 items-center hover:bg-white/50 rounded-xl">
                                    <div class="icon w-10 h-10 rounded-full flex items-center justify-center">
                                        <i class="fa-solid fa-house text-sky-950"></i>
                                    </div>
                                   
                                    <h4 class="font-bold text-sky-950 hover:italic">Accueil</h4>
                                </RouterLink>
                            </li>
                            <li class="sidebar__menu__list__item">
                                <RouterLink to="/input" 
                                class="flex gap-3 items-center hover:bg-white/50 rounded-xl">
                                    <div class="icon w-10 h-10 rounded-full flex items-center justify-center">
                                      
                                        <i class="fa-solid fa-file-circle-plus text-sky-950"></i>
                                    </div>
                                    <h4 class="font-bold text-sky-950 hover:italic">Fichier</h4>
                                </RouterLink>
                            </li>
                            <li class="sidebar__menu__list__item">
                                <RouterLink to="/file" 
                                class="flex gap-3 items-center hover:bg-white/50 rounded-xl">
                                    <div class="icon w-10 h-10  rounded-full flex items-center justify-center">
                                        <i class="fa-solid fa-list text-sky-950"></i>
                                    </div>
                            
                                    <h4 class="font-bold text-sky-950 hover:italic">Fichiers</h4>
                                </RouterLink>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="sidebar__footer">
                    <div class="footer__title border-t border-gray-400 flex items-center">
                        <i class="fa-regular fa-copyright font-bold text-sky-950"></i>
                        <p class="text-center p-2  text-[9px]"> - Name 2023 Tous droits réservés</p>         
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


/*=============================+++ JS +++==============================*/
<script lang="ts" setup>
import LogoComponent from './LogoComponent.vue';
</script>