<template>
    <li class="flex justify-between items-center border-b-2 border-b-primary py-4 my-4">
        <div>
            <h2 class="mb-2 text-lighter-gray font-bold text-2xl">{{ meal.name }}</h2>
            <div class="w-40 flex justify-between items-center">
                <span class="font-bold text-primary">{{ price }}</span>
                <span class="font-bold border border-gray-200 py-1 px-3 rounded-md text-lighter-gray">x {{ meal.amount }}</span>
            </div>
        </div>
        <div class="flex flex-col md:flex-row md:space-x-4 items-center">
            <button
                class="font-bold text-2xl text-primary border border-primary w-12 text-center rounded-md bg-transparent p-1 hover:bg-primary hover:text-white"
                @click="onRemove"
            >
                -
            </button>
            <button
                class="font-bold text-2xl mt-3 md:mt-0 text-primary border border-primary w-12 text-center rounded-md bg-transparent p-1 hover:bg-primary hover:text-white"
                @click="onAdd"
            >
                +
            </button>
        </div>
    </li>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
    meal: {
        type: Object,
        default: () => ({})
    }
})
const emit = defineEmits(['on-add', 'on-remove'])

function onAdd() {
    emit('on-add', props.meal)
}

function onRemove() {
    emit('on-remove', props.meal.id)
}

const price = computed(() => `$${props.meal.price.toFixed(2)}`)
</script>