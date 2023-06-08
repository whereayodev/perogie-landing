<script setup lang="ts">
defineProps({
  blok: {
    type: Object,
    required: true
  }
})
</script>
<template>
  <section v-if="blok" class="container relative fullscreen align justify center hero-block">
    <div class="container col g50 align justify center hero-text">
      <div class="container col g35 align justify center text">
        <h1>{{ blok.big_text.heading }}</h1>
        <p>{{ blok.big_text.description }}</p>
      </div>
      <div class="container row g10 buttons"></div>
    </div>
    <GraphicsHeroBackground />
  </section>
</template>
<style lang="scss">
.hero-block {
  min-height: 100vh;

  .hero-text {
    .text {
      h1 {
        @include text-style-h1;
        color: $color-dark;
      }

      p {
        @include text-style-p;
        color: $color-grey;
      }
    }
  }
}
</style>
