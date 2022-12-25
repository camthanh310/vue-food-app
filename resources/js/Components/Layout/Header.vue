<template>
    <header class="fixed top-0 left-0 z-10 w-full h-20 bg-primary text-white flex justify-between items-center px-[10%] py-0 shadow-3xl">
        <h1 class="font-weight text-4xl tracking-wider">VueMeals</h1>
        <HeaderCartButton @on-show-cart="onShowCart" />
    </header>
    <div class="w-full h-100 z-0 overflow-hidden">
        <img src="/images/meals.jpg" alt="A table full of delicious food!" class="w-full scale-110 h-full object-cover -rotate-[5deg] -translate-x-4 -translate-y-16">
    </div>
</template>

<script>
import HeaderCartButton from '@/Components/Layout/HeaderCartButton.vue'

export default {
    name: "Header",
    components: { HeaderCartButton },
    emits: ['on-show-cart'],
    setup(props, context) {
        function onShowCart() {
            context.emit('on-show-cart')
        }

        return { onShowCart }
    }
}
</script>