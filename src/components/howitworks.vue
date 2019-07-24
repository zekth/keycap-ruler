<template>
  <fragment>
    <section class="hero is-info">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">{{ $t("howItWorks.title") }}</h1>
        </div>
      </div>
    </section>

    <div class="container">
      <section class="section">
        <div class="content">
          <h3>{{ $t("howItWorks.why")}}</h3>
          <p v-html="$t('howItWorks.one')" />
          <h3>{{ $t("howItWorks.how")}}</h3>
          <p v-html="$t('howItWorks.two')" />
          <h3>{{ $t("howItWorks.broken")}}</h3>
          <p v-html="$t('howItWorks.three')" />
          <h3>{{ $t("howItWorks.whyUi")}}</h3>
          <p v-html="$t('howItWorks.four')" />
        </div>
      </section>
    </div>
  </fragment>
</template>

<script>
import { Fragment } from 'vue-fragment'

export default {
  name: 'howitworks',
  component: { Fragment }
}
</script>

<style>
</style>
