<script setup lang="ts">
import Climate from './Climate.vue';

defineProps({
  index: {
    required: true,
    type: Number,
  },
  climate: {
    required: true,
    type: String,
  },
  temperature: {
    required: true,
    type: Number,
  },
  feelsLike: {
    required: true,
    type: Number,
  },
  minTemperature: {
    required: true,
    type: Number,
  },
  maxTemperature: {
    required: true,
    type: Number,
  },
  airPressure: {
    required: true,
    type: Number,
  },
  airHumidity: {
    required: true,
    type: Number,
  },
})
</script>

<template>
  <main>
    <Climate :index="index" :climate="climate" />
    <section class="column">
      <p class="is-size-3">
        Previsto: <span>{{ temperature }}ºC </span>
      </p>
      <p class="is-size-3">
        Sentimento de: <span> {{ feelsLike }}ºC </span>
      </p>
      <p class="is-size-3">
        Miníma: <span> {{ minTemperature }}ºC </span>
      </p>
      <p class="is-size-3">
        Máxima: <span> {{ maxTemperature }}ºC </span>
      </p>
      <p class="is-size-3">
        Pressão do ar: <span> {{ airPressure }}hPa </span>
      </p>
      <p class="is-size-3">
        Umidade: <span> {{ airHumidity }}% </span>
      </p>
    </section>
  </main>
</template>