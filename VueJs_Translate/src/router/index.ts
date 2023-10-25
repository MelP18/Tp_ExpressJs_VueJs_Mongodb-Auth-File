import { createRouter, createWebHistory } from 'vue-router'
import Index from '@/views/master/Index.vue'
import Home from "@/views/master/Home.vue"
import WelcomeIndex from "@/views/indexViews/Index.vue"
import SignUp from "@/views/indexViews/SignUp.vue"
import SignIn from "@/views/indexViews/SignIn.vue"
import Profil from "@/views/homeViews/Profil.vue"
import Input from "@/views/homeViews/Input.vue"
import File from "@/views/homeViews/File.vue"
import WelcomeHome from "@/views/homeViews/Index.vue"
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path:"/",
            name:"index",
            component:Index,
            children:[
                {
                    path:"",
                    name:"welcomeIndex",
                    component:WelcomeIndex
                },
                {
                    path:"/signup",
                    name:"signup",
                    component:SignUp
                },
                {
                    path:"/signin",
                    name:"signin",
                    component:SignIn
                },
            ]
        },
        {
            path:"/",
            name:"home",
            component:Home,
            children:[
                {
                    path:"/home",
                    name:"welcomeHome",
                    component:WelcomeHome
                },
                {
                    path:"/profil",
                    name:"profil",
                    component:Profil
                },
               
                {
                    path:"/input",
                    name:"input",
                    component:Input
                },
                {
                    path:"/file",
                    name:"file",
                    component:File
                },
            ]
        }
        
        
    ]
})

export default router
