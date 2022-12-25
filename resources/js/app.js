import './bootstrap';

import { createApp } from 'vue'

import Cart from '@/store/Cart.js'

import App from './App.vue'

const app = createApp(App)

app.provide('Cart', Cart)
app.mount('#app')
