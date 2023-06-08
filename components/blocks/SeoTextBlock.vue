<script setup lang="ts">
defineProps({
  blok: {
    type: Object,
    required: true
  },
  header: {
    type: Object,
    required: true
  }
})
</script>
<template>
  <div class="text-block-wrapper">
    <NavigationAppHeader :blok="header" />
    <section v-if="blok" v-editable="blok" class="container row nowrap sbetween text-block">
      <div class="container col g50 text-wrapper">
        <h2>
          {{ blok[0].text }}
          <span>{{ blok[0].hightlighted_text }}</span
          ><br />
          {{ blok[0].text_after }}
        </h2>
        <div class="container col g25 paragraph-wrapper">
          <p v-for="i of blok[1].content" :key="i._uid">
            {{ i.text }}
          </p>
        </div>
      </div>
      <img :src="blok[2].right_picture" />
    </section>
  </div>
</template>
<style lang="scss">
.text-block-wrapper {
  transform: translateY(-75px);

  .text-block {
    width: 90vw;
    margin-left: 5vw;
    padding: 80px;

    background: $color-white;

    .text-wrapper {
      width: 100%;
      max-width: 575px;

      h2 {
        @include text-style-h2;

        text-transform: uppercase;

        span {
          @include gradient-text($color-gradient);
        }
      }

      .paragraph-wrapper {
        padding-right: 75px;

        p {
          @include text-style-p;
          color: $color-grey;
        }
      }
    }

    > img {
      position: sticky;

      align-self: flex-start;

      width: 50%;
      height: auto;
      max-width: 720px;

      top: 125px;

      object-fit: contain;

      aspect-ratio: 720 / 716;

      @include md {
        display: none;
      }
    }

    @include sm {
      width: 100vw;
      padding: 18px;

      margin: 0;

      .paragraph-wrapper {
        padding-right: 0 !important;
      }
    }
  }
}
</style>
