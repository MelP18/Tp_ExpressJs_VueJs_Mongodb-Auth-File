import './assets/base.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import axios from 'axios'
import VueAxios from 'vue-axios'

import {useToast} from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-sugar.css';

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(VueAxios, axios)

app.use(useToast)

/* const $toast = useToast();
let instance = $toast.success('You did it!');

// Force dismiss specific toast
instance.dismiss();

// Dismiss all opened toast immediately
$toast.clear(); */

app.mount('#app')
