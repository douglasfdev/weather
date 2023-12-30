<script setup lang="ts">
  defineProps({
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
  <main class="column">
    <section id="cloud">
      <div class="info">
        <p>
          Atual: <span>{{ temperature }}ºC </span>
        </p>
        <p>
          Sentimento: <span> {{ feelsLike }}ºC </span>
        </p>
        <p>
          Miníma: <span> {{ minTemperature }}ºC </span>
        </p>
        <p>
          Máxima: <span> {{ maxTemperature }}ºC </span>
        </p>
        <p>
          Pressão do ar: <span> {{ airPressure }}hPa </span>
        </p>
        <p>
          Umidade: <span> {{ airHumidity }}% </span>
        </p>
      </div>
      <span class="shadow">
      </span>
    </section>
  </main>
</template>

<style scoped>
body {
	background: #ACEAFF;
}

.info {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  font-size: medium;
  position: relative;
  bottom: 2rem;
}

span {
  font-size: x-large;
}

#cloud {
	width: 375px;
  height: 186px;
  background: #f2f9fe;

  background: -webkit-gradient(linear, 0 0, 0 100%, color-stop(0.05, #f2f9fe), to(#d6f0fd));
  background: -webkit-linear-gradient(#f2f9fe 5%, #d6f0fd 100%);
  background: -moz-linear-gradient(#f2f9fe 5%, #d6f0fd 100%);
  background: -o-linear-gradient(#f2f9fe 5%, #d6f0fd 100%);
  background: linear-gradient(#f2f9fe 5%, #d6f0fd 100%);

  border-radius: 100px;
  position: relative;
  margin: 70px auto 100px;
}

#cloud:after, #cloud:before {
  content: "";
  position: absolute;
  background: #f2f9fe;
  z-index: -1;
}

#cloud:after {
  width: 100px;
  height: 100px;
  top: -50px;
  left: 50px;
  border-radius: 100px;
}

#cloud:before {
  width: 180px;
  height: 180px;
  top: -90px;
  right: 50px;
  border-radius: 200px;
}

.shadow {
  width: 300px;
  position: absolute;
  bottom: -10px;
  left: 20px;
  background: #000;
  z-index: -1;
  -webkit-box-shadow: 0 0 25px 8px rgba(0,0,0,0.4);
  box-shadow: 0 0 25px 3px rgba(0,0,0,0.3);
  border-radius: 50%;
}

.black-font {
  color: #000; /* Cor do texto dentro da nuvem */
}
</style>