<template>
    <Cart :shown="shownCart" @on-close="hideCartHandler" />
    <AppHeader @on-show-cart="showCartHandler" />
    <main>
        <Meals />
    </main>
</template>

<script>
import AppHeader from '@/Components/Layout/Header.vue'
import Meals from '@/Components/Meals/Meals.vue'
import Cart from '@/Components/Cart/Cart.vue'
import { ref } from 'vue'

export default {
    name: "App",
    components: {
        AppHeader,
        Meals,
        Cart
    },
    setup() {
        const shownCart = ref(false)

        function showCartHandler() {
            shownCart.value = true
        }

        function hideCartHandler() {
            shownCart.value = false
        }

        return {
            shownCart,
            showCartHandler,
            hideCartHandler
        }
    }
};
</script>
