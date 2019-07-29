<template>
  <section class="hero is-info">
    <div class="hero-body">
      <div class="container">
        <h1 class="title">{{ $t('header.title') }}</h1>
        <h2 class="subtitle">{{ $t('header.subTitle') }}</h2>
        Langue: <a v-bind:class="{ active: currentLang === 'en' }" href="#" v-on:click="switchLang('en')">EN</a> /
        <a
          v-bind:class="{ active: currentLang === 'fr' }"
          href="#"
          v-on:click="switchLang('fr')"
        >FR</a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'headerApp',
  computed: {
    currentLang: function() {
      return this.$root.$i18n.locale
    }
  },
  methods: {
    switchLang: function(lng) {
      this.$root.$i18n.locale = lng
    }
  }
}
</script>

<style>
a.active {
  font-weight: bold;
  color: black !important;
}
</style>
