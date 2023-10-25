import { defineStore } from "pinia";
import { required, email, sameAs } from "@vuelidate/validators";
import useVuelidate from "@vuelidate/core";
import { computed, ref } from "vue"
import { useToast } from 'vue-toast-notification';
import http from "@/libs/http";

const $toast = useToast()

export const useFileStore = defineStore('files', ()=>{
    const fileElement = ref({
        file: '',
        title: '',
        description: ''
    })
    
    const file = (event: any) => {
        console.log(fileElement.value);
    
        //get the file input value 
        const file = event.target.files
        console.log(file);
    
        //checking file 
        if (file[0].type !== "image/jpeg"
            && file[0].type !== "image/jpg"
            && file[0].type !== "image/png"
            && file[0].type !== "image/pdf"
            && file[0].type !== "image/docx"
            && file[0].type !== "image/csv") {
            $toast.error('Fichier Invalid! Format accepté .png, .jpeg, .jpg, .pdf, .docx, .csv')
        } else if (file[0].size > 16000000) {//checking file length
            $toast.error('Fichier trop lourd! Taille maximale accepté 16MB')
        } else {
            fileElement.value.file = file[0]
            console.log(fileElement.value.file);
    
            return fileElement.value.file
        }
    }
    
    const fileRequired = computed(() => {
        return {
            file: {
                required
            },
            title: {
                required
            },
            description: {
                required
            }
        }
    })
    
    const fileData = useVuelidate(fileRequired, fileElement)
    
    const addFile = async () => {
        const file = await fileData.value.$validate()
        console.log(file, fileElement.value);
    
        if (file) {
            http.post('/file', fileElement.value, {
                headers: {
                    'Content-Type': 'multipart/form-data' // Spécifiez le type de contenu comme 'multipart/form-data'
                }
            })
                .then((response) => {
                    $toast.success(response.data)
                })
                .catch(error => {
                    if (error.response && error.response.status === 400) {
                        // Extrait le message d'erreur de la réponse.
                        const errorResponse = error.response.data
                        $toast.error(errorResponse)
    
                    } else {
                        $toast.error(error.message)
                    }
                })
        } else {
            $toast.error('Oops... Erreur')
        }
    }
    
    const filpaths = ref()
    
    const getFile = async () => {
    
        try {
            const response = await http.get('/file/getfile')
            if (response) {
      
                filpaths.value = response.data
                console.log(filpaths.value);
                console.log(response.data);
                return filpaths.value
            }
        }catch (error) {
            $toast.error(error.message)
        }
    
    }
    
    return { file, fileElement, fileData, addFile, getFile, filpaths}
})