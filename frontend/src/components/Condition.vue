<script setup lang="ts">
import { Description } from '../interfaces/IWeather';
defineProps({
  conditions: {
    required: true,
    type: Array<Description>
  }
})
</script>

<template>
    <main class="column is-four-fifths">
      <section class="clock-container box">
        <div class="has-text-centered">
          <p
            class="title is-1 black-font condition"
            v-for="condition in conditions"
            :key="condition.description"
          >
            {{ condition.description }}
          </p>
        </div>
      </section>
    </main>
</template>

<style scoped>
.condition::first-letter {
  text-transform: uppercase;
}
</style>
