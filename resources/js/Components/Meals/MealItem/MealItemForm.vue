<template>
    <form class="text-right" @submit.prevent="submitHandler">
        <AppInput
            label="Amount"
            :input="{
                id: 'amount_' + mealId,
                type: 'number',
                min: '1',
                max: '5',
                step: '1',
                defaultValue: '1'
            }"
            v-model="enteredAmount"
        />
        <button type="submit"
            class="bg-primary border-primary text-white rounded-full font-bold py-1 px-8 hover:bg-organe-darkest hover:border-organe-darkest active:bg-organe-darkest active:border-organe-darkest">
            + Add
        </button>
        <p v-if="errors">
            {{ errors }}
        </p>
    </form>
</template>

<script>
import AppInput from '@/Components/UI/Input.vue'
import { ref } from 'vue'

export default {
    name: 'MealItemForm',
    props: {
        mealId: {
            type: [Number, String],
            required: true
        }
    },
    components: {
        AppInput,
    },
    emits: {
        'on-add-to-cart': (amount) => {
            if (amount > 0) {
                return true
            } else {
                console.error('Amount must be greater than 0')
                return false
            }
        }
    },
    setup(props, context) {
        const enteredAmount = ref(1)
        const errors = ref('')

        function submitHandler() {
            if (enteredAmount.value < 1 || enteredAmount.value > 5) {
                errors.value = 'Please enter a valid amount (1-5).'

                return
            }

            context.emit('on-add-to-cart', enteredAmount.value)
        }

        return { enteredAmount, submitHandler, errors }
    }
}
</script>
