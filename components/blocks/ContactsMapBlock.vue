<script setup lang="ts">
import LogoBig from '~~/assets/vectors/logo-big.svg'
import HorizontalLine from '~~/assets/vectors/horizontal-line.svg'

defineProps({
  blok: {
    type: Object,
    required: true
  }
})
</script>
<template>
  <section class="container col g75 w100p align justify center contact-block">
    <LogoBig :font-controlled="false" filled="false" />
    <h4>{{ blok[0].text }}</h4>
    <div class="container rog g50 links-group">
      <ElementsShortLink
        v-for="i of blok[1].links_group"
        :key="i._uid"
        :text="i.text"
        :href="i.href.url"
      />
    </div>
    <div class="container col g50 p10 align justify center address">
      <h2>{{ blok[2].address }}</h2>
      <HorizontalLine :font-controlled="false" filled="false" />
      <NuxtLink :to="`tel:${blok[3].tel}`" class="phone">{{ blok[3].tel }}</NuxtLink>
    </div>
    <ElementsFooterMap />
    <GraphicsEmojiLayer />
  </section>
</template>
<style lang="scss">
.contact-block {
  position: relative;
  padding: 125px 0 0;

  overflow: hidden;

  h4 {
    @include text-style-h4;

    max-width: 700px;
    color: $color-dark;

    text-align: center;
  }

  .address {
    h2 {
      @include text-style-h1;
      @include gradient-text($color-gradient);

      text-align: center;
      text-transform: uppercase;
    }

    a.phone {
      font-weight: 400;
      font-size: 24px;
      line-height: 125%;
      letter-spacing: 0.02em;
      text-transform: capitalize;
      text-decoration: none;

      color: $color-dark;
    }
  }

  @include sm {
    padding: 15px;
    gap: 50px !important;
  }
}
</style>
