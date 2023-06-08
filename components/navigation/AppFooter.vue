<script setup lang="ts">
import VarekBig from '~~/assets/vectors/varek-big.svg'
import LogoRed from '~~/assets/vectors/logo-red.svg'

defineProps({
  blok: {
    type: Object,
    required: true
  }
})
</script>
<template>
  <footer class="container nowrap col relative">
    <div class="container row sbetween align center w100p nowrap bottom-links">
      <div class="container row g10 align justify center copyright">
        <LogoRed :font-controlled="false" filled="false" />
        <p>©{{ blok[0].copyright_year }}</p>
        <p>{{ blok[0].copyright_by }}</p>
      </div>
      <VarekBig class="mascote" :font-controlled="false" filled="false" />
      <div class="container row g25 align nowrap center">
        <NuxtLink v-for="i of blok[1].links" :key="i" target="_blank" :to="i.href.url">{{
          i.text
        }}</NuxtLink>
      </div>
    </div>
  </footer>
</template>
<style scoped lang="scss">
footer {
  justify-content: center;
  align-items: flex-start;
  padding: 150px 50px 50px;
  gap: 50px;
  width: 100svw;

  .mascote {
    @include absolute-center;
    top: unset;
    bottom: 0;

    transform: translate(-50%, 0);

    @include md {
      transform: translateX(-55vh);
    }

    @include sm {
      opacity: 0.05;
    }
  }

  a {
    @include animate-quick(color);

    text-decoration: none;

    color: $color-grey;

    &:hover {
      color: $color-dark;
    }
  }

  a,
  p {
    font-size: 14px;
  }

  > .links {
    align-items: flex-start;

    > .item {
      width: 100%;
      max-width: 280px;

      > h5 {
        font-size: 16px;
        line-height: 15px;
        letter-spacing: 0.02em;
      }

      @include sm {
        align-items: center;
        justify-content: center;

        > * {
          text-align: center;
        }
      }

      @include sm {
        display: none;
      }
    }

    @include sm {
      flex-wrap: nowrap !important;
      gap: 50px;
    }

    @include md {
      flex-wrap: wrap !important;
      align-items: center;
      justify-content: center;

      > .item {
        flex-basis: calc(50% - 10px);
        margin: 25px;
      }
    }
  }

  > .bottom-links {
    padding: 50px 0 0;

    @include sm {
      > .container {
        align-items: center;
        justify-content: center;
        flex-direction: column;
      }
    }

    @include md {
      align-items: center;
      justify-content: center;
      flex-direction: column;
      gap: 50px;
      padding-bottom: 25px;

      > .copyright {
        order: 1;
      }
    }

    @include xl {
      * {
        font-size: 13px;
      }
    }
  }

  @include sm {
    align-items: center;
    padding: 100px 14px;
    gap: 75px;
  }

  @include md {
    padding: 25px !important;
  }

  @include xl {
    padding: 50px;
  }
}
</style>
