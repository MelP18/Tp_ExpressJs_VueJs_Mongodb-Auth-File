<template>
    <div class="profil__component">
        <div class="profil h-[calc(100vh_-_64px)]">
            <div class="profil__content h-full">
                <div class="user__info">
                    <ul class="user__info__list">
                        <li class="user__info__list__item flex gap-2">
                            <h4 class="font-bold text-sky-950 ">Pseudonime : </h4>
                            <p class="italic">{{ userData.username }}</p>
                        </li>
                        <li class="user__info__list__item flex gap-2">
                            <h4 class="font-bold text-sky-950 ">Nom : </h4>
                            <p class="italic">{{ userData.surname }}</p>
                        </li>
                        <li class="user__info__list__item flex gap-2">
                            <h4 class="font-bold text-sky-950 ">Prénom(s)</h4>
                            <p class="italic">{{ userData.firstname }}</p>
                        </li>
                        <li class="user__info__list__item flex gap-2">
                            <h4 class="font-bold text-sky-950 ">E-mail</h4>
                            <p class="italic">{{ userData.email }}</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>


<script lang="ts" setup>
import http from '@/libs/http';
import { useToast } from 'vue-toast-notification';
import { ref } from "vue";
import router from '@/router';

const $toast = useToast()
const userData = ref({
    username: '',
    surname: '',
    firstname: '',
    email: '',
})

// Récupérer le token depuis le localStorage
/* const token = localStorage.getItem('tokenUser')
console.log(token);
const $toast = useToast();
if (token) {
    // Diviser le token en trois parties (en supposant qu'il soit au format "Bearer token")
    const tokenParts = token.split(".");
    console.log(tokenParts);

    if (tokenParts.length === 3) {
        // Récupérer la partie du token qui doit être décodée (la seconde partie)
        const tokenToDecode = tokenParts[1];

        // Décoder le token (en supposant que le token est au format JWT)
        const decodedToken = JSON.parse(atob(tokenToDecode));
        userData.value.username = decodedToken.username;
        userData.value.surname = decodedToken.surname;
        userData.value.firstname = decodedToken.firstname;
        userData.value.email = decodedToken.email;

        console.log(decodedToken);
    } else {
        console.error('Format de Token Invalid');
    }
} else {
    $toast.error('Données Non Conforme')
} */
const token = localStorage.getItem('tokenUser')
const user = async () => {
    if (token) {
        try {
            const response = await http.get('/home')
            if (response) {
                userData.value.username = response.data.username
                userData.value.surname = response.data.surname;
                userData.value.firstname = response.data.firstname;
                userData.value.email = response.data.email;
            }
        } catch (error) {
            $toast.error(error.message)
        }
    }else{
        router.replace('/signin')
    }

}
user()
</script>