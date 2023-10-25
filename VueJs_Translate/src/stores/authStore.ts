import { defineStore } from "pinia";
import { computed, ref } from 'vue'
import http from "@/libs/http"
import router from '@/router';
import { required, email, sameAs } from "@vuelidate/validators";
import useVuelidate from "@vuelidate/core";
import { useToast } from 'vue-toast-notification';

export const useAuthenticationStore = defineStore('users', () => {
    const $toast = useToast();

    ////////////Registration    
    const userData = ref({
        username: '',
        surname: '',
        firstname: '',
        email: '',
        password: '',
        confirm_password: ''

    })

    const userDataRequired = computed(() => {
        return {
            username: {
                required
            },
            surname: {
                required
            },
            firstname: {
                required
            },
            email: {
                required,
                email
            },
            password: {
                required
            },
            confirm_password: {
                required,
                sameAs: sameAs(userData.value.password)
            }
        }
    })

    const vueUserData = useVuelidate(userDataRequired, userData)

    const registration = async () => {

        const vueUserDataValid = await vueUserData.value.$validate()

        console.log(vueUserDataValid);

        if (vueUserDataValid) {

            http.post('/auth/signup', userData.value)
                .then((response) => {
                    $toast.success('Inscription effectuée avec succès !',)
                })
                .catch(error => {
                    $toast.error(error.message)
                })

        } else {

            $toast.error('Echec ! Données Indisponibles')
        }
    }

    /////////////Connection   
    const data = ref({
        email: '',
        password: ''
    })

    const dataRequired = computed(() => {
        return {
            email: {
                required,
                email
            },
            password: {
                required
            }
        }
    })

    const vueConnectData = useVuelidate(dataRequired, data)

    const connection = async () => {
        const vueConnectValid = await vueConnectData.value.$validate()
        console.log(vueConnectValid)

        if (vueConnectValid) {

            http.post('/auth/signin', data.value)
            .then((response) => {

                const accessToken = response.data;
                console.log('accessToken', accessToken);
                http.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
                localStorage.setItem('tokenUser', accessToken);
                router.replace('/home');
            })
            .catch(error => {
                // La réponse contient un code d'état HTTP 400, ce qui signifie que les données de connexion sont incorrectes.   
                if (error.response.status === 400) {
                    // Extrait le message d'erreur de la réponse.
                    const errorResponse = error.response.data
                    $toast.error(errorResponse)

                } else {
                    $toast.error(error.message)
                }
            })

        } else {
            $toast.error('Données Indisponibles');
           
        }
    }

    return { connection, data, vueConnectData, registration, userData, vueUserData }
})