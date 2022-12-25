<template>
    <div class="flex items-center mb-2">
        <label class="font-bold mr-4">{{ label }}</label>
        <input
            class="rounded-md ring-1 ring-gray-200 pl-2 py-px"
            v-bind="{ ...input }"
            :value="modelValue"
            @input="$emit('update:modelValue', $event.target.value)"
        >
    </div>
</template>

<script>
export default {
    name: 'Input',
    props: {
        label: {
            type: String,
            default: ''
        },
        input: {
            type: Object,
            default: () => ({})
        },
        modelValue: {},
    },
    emits: ['update:modelValue']
}
</script>
