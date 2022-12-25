<template>
    <li class="flex justify-between m-4 pb-4 border-b-2 border-b-gray-200">
        <div>
            <h3 class="mb-1 font-bold text-lg">{{ meal.name }}</h3>
            <div class="italic">
                {{ meal.description }}
            </div>
            <div class="mt-1 font-bold text-xl text-organe-lighter">
                {{ price }}
            </div>
        </div>

        <div>
            <MealItemForm :meal-id="meal.id" @on-add-to-cart="addToCartHandler" />
        </div>
    </li>
</template>

<script setup>
import MealItemForm from '@/Components/Meals/MealItem/MealItemForm.vue'
import { computed, inject } from 'vue'

const props = defineProps({
    meal: {
        type: Object,
        default: () => ({})
    }
})

const cartCtx = inject('Cart')

const price = computed(() => `$${props.meal.price.toFixed(2)}`)

function addToCartHandler(amount) {
    cartCtx.addItem({
        id: props.meal.id,
        name: props.meal.name,
        amount: +amount,
        price: props.meal.price
    })
}

</script>