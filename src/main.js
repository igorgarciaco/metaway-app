import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import "bootstrap/dist/css/bootstrap.css"

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faPlus, faTrash, faPen , faUser, faStar} from "@fortawesome/free-solid-svg-icons";

import './styles/global.css'

library.add(faPlus, faTrash, faPen, faUser, faStar);
const app = createApp(App).component("font-awesome-icon", FontAwesomeIcon).use(router)
app.use(router)

app.mount('#app')
import "bootstrap/dist/js/bootstrap.js"
