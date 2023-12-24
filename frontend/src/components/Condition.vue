<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { Description, IWeather } from '../interfaces/IWeather';
import { getWeatherByLocation } from '../service/http';

const conditions = ref<Array<Description>>([]);

const getCondition = async () => {
  return navigator.geolocation.getCurrentPosition(async ({
    coords: {
      latitude: lat, longitude: lon
    }
  }: GeolocationPosition) => {
    const request = await getWeatherByLocation({ endpoint: 'getLocation', lat, lon });

    const { description }: IWeather = await request.json();

    conditions.value = description;
  });

}

onMounted(() => getCondition());

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
