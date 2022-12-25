<template>
    <Teleport to="#overlays">
        <div v-show="open">
            <Transition
                enter-active-class="ease-out duration-300"
                enter-from-class="opacity-0 -translate-y-12"
                enter-to-class="opacity-100 translate-y-0"
                leave-active-class="ease-in duration-300"
                leave-from-class="opacity-100 translate-y-0"
                leave-to-class="opacity-0 -translate-y-12"
            >
                <div class="fixed top-0 left-0 w-full h-screen z-20 bg-black opacity-75" @click="onClose"></div>
            </Transition>
            <Transition
                enter-active-class="ease-out duration-300"
                enter-from-class="opacity-0 -translate-y-12"
                enter-to-class="opacity-100 translate-y-0"
                leave-active-class="ease-in duration-300"
                leave-from-class="opacity-100 translate-y-0"
                leave-to-class="opacity-0 -translate-y-12"
            >
            <div v-if="open" class="transition-all fixed top-[20vh] w-[90%] left-[5%] md:w-[40rem] md:left-[calc(50%-20rem)] bg-white p-4 rounded-2xl shadow-3xl z-30">
                <div>
                    <slot name="content" />
                    <slot name="footer" />
                </div>
            </div>
            </Transition>
        </div>
    </Teleport>
</template>

<script>
import { ref, watch } from 'vue'

export default {
    name: 'Modal',
    props: {
        shown: {
            type: Boolean,
            default: false
        }
    },
    emits: ['on-close'],
    setup(props, context) {
        const open = ref(false)

        function onClose() {
            context.emit('on-close')
        }

        watch(
            () => props.shown,
            (shown) => {
                open.value = shown
            }
        )

        return { open, onClose }
    }
}
</script>