<script setup lang="ts">
import { onBeforeMount, ref } from 'vue';
import { Description, IWeather } from '../interfaces/IWeather';
import { getWeatherByLocation } from '../service/http';
import Condition from './Condition.vue';
import Location from './Location.vue';
import Temperature from './Temperature.vue';

const country = ref<string>('');
const neighboorhood = ref<string>('');
const currentHour = ref<string>('');
const temperature = ref<number>(0);
const feelsLike = ref<number>(0);
const minTemperature = ref<number>(0);
const maxTemperature = ref<number>(0);
const airPressure = ref<number>(0);
const airHumidity = ref<number>(0);
const conditions = ref<Array<Description>>([]);

const getLocation = async () => {
  const request = await getWeatherByLocation<IWeather>({ endpoint: 'getLocation' });

  const {
    country: countryName,
    name: neighboorhoodName,
    currentHour: currentTime,
    temperature: {
      temp, feels_like, temp_min, temp_max, pressure, humidity
    },
    description,
  } = await request.json();

  country.value = countryName;
  neighboorhood.value = neighboorhoodName;
  currentHour.value = currentTime;
  temperature.value = temp;
  feelsLike.value = feels_like;
  minTemperature.value = temp_min;
  maxTemperature.value = temp_max;
  airPressure.value = pressure;
  airHumidity.value = humidity;
  conditions.value = description;
}

onBeforeMount(() => getLocation());
</script>

<template>
  <main class="section">
    <div class="column is-mobile">
      <Condition :conditions="conditions" />
    </div>
    <section class="columns is-centered is-mobile">
      <Location :country="country" :neighboorhood="neighboorhood" :current-hour="currentHour" />
      <Temperature :temperature="temperature" :feels-like="feelsLike" :min-temperature="minTemperature"
        :max-temperature="maxTemperature" :air-pressure="airPressure" :air-humidity="airHumidity" />
    </section>
  </main>
</template>

<style scoped></style>
