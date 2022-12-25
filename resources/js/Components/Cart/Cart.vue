<template>
    <Modal :shown="shown" @on-close="onClose">
        <template #content>
            <ul class="max-h-80 overflow-auto">
                <CartItem v-for="meal in meals" :key="meal.id" :meal="meal" @on-add="cartItemAddHandler"
                    @on-remove="cartItemRemoveHandler" />
            </ul>
            <div class="flex justify-between items-center font-bold text-2xl my-4">
                <span>Total Amount</span>
                <span>{{ totalAmount }}</span>
            </div>
        </template>

        <template #footer>
            <div class="flex justify-end space-x-4">
                <button @click="onClose"
                    class="bg-transparent text-primary border-2 border-primary px-8 py-2 rounded-full hover:bg-organe-super-dakr hover:border-organe-super-dakr hover:text-white">
                    Close
                </button>
                <button
                    class="bg-primary text-white border-2 border-primary px-8 py-2 rounded-full hover:bg-organe-super-dakr hover:border-organe-super-dakr hover:text-white">
                    Order
                </button>
            </div>
        </template>
    </Modal>
</template>

<script setup>
import Modal from '@/Components/UI/Modal.vue'
import CartItem from '@/Components/Cart/CartItem.vue'
import { computed, inject } from 'vue'

const emit = defineEmits(['on-close'])
const props = defineProps({
    shown: {
        type: Boolean,
        default: false
    }
})
const cartCtx = inject('Cart')

function onClose() {
    emit('on-close')
}

const meals = computed(() => cartCtx.items)

const totalAmount = computed(() => `$${cartCtx.totalAmount.toFixed(2)}`)

function cartItemAddHandler(meal) {
    cartCtx.addItem({ ...meal, amount: 1 })
}

function cartItemRemoveHandler(mealId) {
    cartCtx.removeItem(mealId)
}
</script>
