<script setup lang="ts">
defineProps({
  country: {
    required: true,
    type: String
  },
  neighboorhood: {
    required: true,
    type: String
  },
  currentHour: {
    required: true,
    type: String
  }
})
</script>

<template>
  <main class="column is-half">
    <section class="clock-container box">
      <div class="has-text-centered">
        <p class="title is-1 black-font">
          {{ currentHour }}
        </p>

        <hr />

        <div class="has-text-centered">
          <p class="subtitle is-4 black-font" id="bairro">
            {{ neighboorhood }}
          </p>
        </div>

        <hr />

        <div class="has-text-centered">
          <p class="subtitle is-5 black-font">
            {{ country }}
          </p>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
.black-font {
  color: #000;
  padding: 0rem 1rem;
}

.clock-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 16rem;
      background-color: rgba(228, 215, 215, 0.8);
      backdrop-filter: blur(10px);
      border-radius: 10px;
    }

</style>
