<template>
    <section class="max-w-[60rem] w-[90%] mx-auto my-8">
        <Transition
            enter-active-class="ease-out duration-700"
            enter-from-class="opacity-0 translate-y-12"
            enter-to-class="opacity-100 translate-y-0"
            leave-active-class="ease-in duration-700"
            leave-from-class="opacity-100 translate-y-0"
            leave-to-class="opacity-0 translate-y-12"
        >
            <Card class="transition-all" v-if="!isLoading">
                <ul>
                    <MealItem
                        :meal="meal"
                        v-for="meal in meals"
                        :key="meal.id"
                    />
                </ul>
            </Card>
        </Transition>
    </section>
</template>

<script>
import Card from '@/Components/UI/Card.vue'
import { onMounted, ref } from 'vue'
import MealItem from '@/Components/Meals/MealItem/MealItem.vue'

export default {
    name: "AvailableMeals",
    components: { Card, MealItem },
    setup() {
        const isLoading = ref(true)
        const meals = ref([])

        async function fetchMeals() {
            isLoading.value = true

            meals.value = []

            try {
                const response = await axios.get('/api/meals')
                meals.value = response.data.data
            } catch (error) {
                console.error(error)
            } finally {
                isLoading.value = false
            }
        }

        onMounted(() => {
            fetchMeals()
        })

        return { meals, isLoading }
    }
}
</script>