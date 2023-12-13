import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import Main from './Main.vue'
import Demo from './Demo.vue'
import Admin from './AdminPanel.vue'

const routes = [
    { path: '/', component: Demo },
    { path: '/admin', component: Admin }
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes,
})

const app = createApp(Main)
app.use(router)

app.mount('#app')
