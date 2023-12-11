import { createApp } from 'vue'
import Demo from './Demo.vue'
import LoadScript from 'vue-plugin-load-script'

const app = createApp(Demo)
app.use(LoadScript)

app.mount('#app')
