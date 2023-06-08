<script setup lang="ts">
defineProps({
  blok: {
    type: Object,
    required: true
  }
})
</script>
<template>
  <section
    v-for="i of blok"
    :key="i._uid"
    class="container col g55 w100p align justify center menu-block"
  >
    <ElementsMenuHeading :text="i.name" :icon="i.icon" />
    <div class="container row w100p g20 items-wrapper">
      <ElementsMenuCard
        v-for="k in i.items"
        :key="k._uid"
        :product-name="k.name"
        :product-specs="k.specs"
        :product-price="k.price"
        :product-link="k.product_link.url"
        :images="k.images"
      />
    </div>
  </section>
</template>
<style lang="scss">
.menu-block {
  --grid-cols: 4;

  display: flex;

  padding: 50px 100px;

  .items-wrapper {
    display: grid;

    grid-template-columns: repeat(var(--grid-cols), 1fr);

    row-gap: 60px;

    max-width: 1245px;

    .menu-card {
      width: 100%;
    }
  }

  @include md {
    --grid-cols: 3;

    padding: 50px 25px;
  }

  @include sm {
    --grid-cols: 2;
  }
}
</style>
