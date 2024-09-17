import { createApp } from 'vue'
import vant from 'vant';
import App from './App.vue'
import 'vant/lib/index.css';
import './index.css'

createApp(App).use(vant).mount('#app')