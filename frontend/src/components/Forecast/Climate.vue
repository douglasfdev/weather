<script setup lang="ts">
defineProps({
  index: {
    required: true,
    type: Number,
  },
  climate: {
    required: true,
    type: String,
  }
});

function getDay(dayAfterNow: number) {
  const today = new Date();
  const targetDate = new Date();

  targetDate.setDate(today.getDate() + dayAfterNow)

  return targetDate;
}
</script>

<template>
  <main>
    <section class="box has-text-centered">
      <p class="is-size-3 is-capitalized">
        {{ Intl.DateTimeFormat('pt-BR', { weekday: 'long' }).format(getDay(index)) }}
      </p>
      <p class="is-size-3">
        {{
          Intl.DateTimeFormat('pt-BR', {
            day: '2-digit',
            month: '2-digit',
            year: '2-digit'
          }).format(getDay(index))
        }}
      </p>
      <p class="title is-1">
        {{ climate }}
      </p>
    </section>
  </main>
</template>
