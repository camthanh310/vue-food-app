<template>
    <button
        class="bg-organe-darker text-white py-3 px-12 flex justify-around items-center font-bold rounded-full hover:bg-dark-primary"
        :class="{ 'bump': isHighlighted }"
        @click="openCartHandler"
    >
        <span class="mr-2 w-5.4 h-5.4">
            <CartIcon />
        </span>
        <span>Your Cart</span>
        <span class="bg-organe-light py-1 px-4 rounded-full ml-4 font-bold hover:bg-organe-dark">{{ numberOfCartItems }}</span>
    </button>
</template>

<script>
import CartIcon from '@/Components/Cart/CartIcon.vue'
import { computed, inject, watch, ref } from 'vue'

export default {
    name: 'HeaderCartButton',
    components: {
        CartIcon
    },
    emits: ['on-show-cart'],
    setup(props, context) {
        const cartCtx = inject('Cart')

        const numberOfCartItems = computed(() => cartCtx.items.reduce((curNumber, item) => {
            return curNumber + item.amount
        }, 0))

        function openCartHandler() {
            context.emit('on-show-cart')
        }

        const isHighlighted = ref(false)

        watch(
            () => cartCtx.items,
            (items) => {
                if (items.length === 0) {
                    return
                }

                isHighlighted.value = true

                setTimeout(() => {
                    isHighlighted.value = false
                }, 300)
            },
            {
                deep: true
            }
        )

        return { openCartHandler, numberOfCartItems, isHighlighted }
    }
}
</script>

<style scoped>
.bump {
  animation: bump 300ms ease-out;
}

@keyframes bump {
  0% {
    transform: scale(1);
  }
  10% {
    transform: scale(0.9);
  }
  30% {
    transform: scale(1.1);
  }
  50% {
    transform: scale(1.15);
  }
  100% {
    transform: scale(1);
  }
}
</style>