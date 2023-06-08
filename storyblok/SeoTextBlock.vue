<script setup lang="ts">
defineProps({
  blok: {
    type: Object,
    required: true
  }
})
// onMounted(() => {
//   console.log(props.blok)
// })
</script>
<template>
  <section v-if="blok" v-editable="blok" class="container row g100 nowrap text-block">
    <div class="container col g50 text-wrapper">
      <h2>
        {{ blok.heading }}
        <span>{{ blok.gradient_text }}</span>
      </h2>
      <div class="container col g25 paragraph-wrapper">
        <p v-for="i of blok.text" :key="i">
          {{ i.text }}
        </p>
      </div>
    </div>
    <img :src="blok.right_image" />
  </section>
</template>
