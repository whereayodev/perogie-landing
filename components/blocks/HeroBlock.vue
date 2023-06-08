<script setup lang="ts">
import LogoBig from '~~/assets/vectors/logo-big.svg'

defineProps({
  blok: {
    type: Object,
    required: true
  }
})
</script>
<template>
  <section v-if="blok" class="container relative fullscreen align justify center hero-block">
    <LogoBig :font-controlled="false" filled="false" />
    <ElementsDataSausage :text="blok[2].text" :link="blok[2].link.url">
      <SvgoLocation :font-controlled="false" filled="false" />
    </ElementsDataSausage>
    <ElementsDataSausage :text="blok[3].text" :link="blok[3].link.url">
      <SvgoPhone :font-controlled="false" filled="false" />
    </ElementsDataSausage>
    <div class="container col g50 align justify center hero-text">
      <div class="container col g10 align justify center mobile-data">
        <ElementsDataSausage :text="blok[2].text" :link="blok[2].link.url">
          <SvgoLocation :font-controlled="false" filled="false" />
        </ElementsDataSausage>
        <ElementsDataSausage :text="blok[3].text" :link="blok[3].link.url">
          <SvgoPhone :font-controlled="false" filled="false" />
        </ElementsDataSausage>
      </div>
      <div class="container col g35 align justify center text">
        <h1>{{ blok[0].heading }}</h1>
        <p>{{ blok[0].description }}</p>
      </div>
      <div class="container row g10 buttons">
        <NuxtLink
          v-for="i of blok[1].button"
          :key="i._uid"
          class="button"
          :to="i.link"
          :style="{ background: i.color }"
        >
          {{ i.text }}
          <SvgoArrowRight v-if="i.arrow" :font-controlled="false" filled="false" />
        </NuxtLink>
      </div>
    </div>
    <GraphicsHeroBackground />
  </section>
</template>
<style lang="scss">
.hero-block {
  min-height: 100vh;

  > svg {
    z-index: 1;
    pointer-events: none;
    position: absolute;
    top: 50px;

    @include sm {
      top: 15px;

      width: 40vw;
    }
  }

  > .data-sausage {
    @include sm {
      display: none;
    }
  }

  .hero-text {
    @include absolute-center;
    z-index: 1;

    > .mobile-data .data-sausage {
      display: none;
    }

    .text {
      max-width: 600px;

      > * {
        text-align: center;
      }

      h1 {
        @include text-style-h1;
        color: $color-dark;
      }

      p {
        @include text-style-p;
        color: $color-grey;

        font-weight: 500;

        font-style: italic;
      }
    }

    @include sm {
      width: 90vw;

      padding-top: 50px;

      > .mobile-data > .data-sausage {
        display: flex;

        position: static;
      }
    }
  }
}
</style>
