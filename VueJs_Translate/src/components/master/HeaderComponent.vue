<template>
    <div class="header__component">
        <header class="py-2 shadow">
            <div class="container">
                <div class="header__content flex justify-between items-center">
                    <div class="header__logo ">
                        <LogoComponent />
                    </div>
                    <div class="header__menus">
                        <ul class="hrader__menu__list flex gap-10">
                            <li class="header__menu__list__item">
                                <RouterLink to="/signup"
                                    class="px-10 py-2 border rounded-2xl text-sky-950 font-bold hover:bg-gray-100">
                                    S'inscrire</RouterLink>
                            </li>
                            <li class="header__menu__list__item">
                                <RouterLink to="/signin"
                                    class="px-10 py-2 border rounded-2xl text-sky-950 font-bold hover:bg-gray-100">Se
                                    connecter</RouterLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

        </header>
    </div>
</template>


<script lang="ts" setup>
    import LogoComponent from './LogoComponent.vue';
</script>