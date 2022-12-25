<template>
    <MealsSummary />
    <AvailableMeals />
</template>

<script>
import MealsSummary from '@/Components/Meals/MealsSummary.vue'
import AvailableMeals from '@/Components/Meals/AvailableMeals.vue'

export default {
    name: "Meals",
    components: { MealsSummary, AvailableMeals }
}
</script>
