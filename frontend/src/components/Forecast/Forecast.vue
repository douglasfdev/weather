<script setup lang="ts">
import { onBeforeMount, ref } from 'vue';
import { getWeatherByLocation } from '../../service/http';
import Climate from './Climate.vue';
import Temperature from './Temperature.vue';
import { IForecastToFourDays } from '../../interfaces/IForecastToFourDays';

const forecasts = ref<Array<IForecastToFourDays>>([]);

const getForecast = async () => {
  const request = await getWeatherByLocation({ endpoint: 'getWeatherToFourDays' });

  const response: Array<IForecastToFourDays> = await request.json();

  forecasts.value = response;
}

onBeforeMount(() => getForecast());
</script>

<template>
  <main class="row columns is-multiline">
    <section
      class="column box is-half"
      v-for="(forecast, index) in forecasts"
      :key="index"
    >
      <p class="is-size-3">
        {{ forecast.region }}
      </p>
      <Temperature
        class="section"
        :index="index"
        :climate="forecast.climate"
        :temperature="forecast.forecast.temp"
        :feels-like="forecast.forecast.feels_like"
        :min-temperature="forecast.forecast.temp_min"
        :max-temperature="forecast.forecast.temp_max"
        :air-pressure="forecast.forecast.pressure"
        :air-humidity="forecast.forecast.humidity"
      />
    </section>
  </main>
</template>