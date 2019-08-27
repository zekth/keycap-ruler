<template>
  <Fragment>
    <section class="hero is-info">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">{{ $t('contribute.feelFree') }}</h1>
        </div>
      </div>
    </section>

    <div class="container">
      <section class="section">
        <div class="content">
          <h3>{{ $t('contribute.howTo') }}</h3>
          <p>
            {{ $t('contribute.goOn') }}
            <a href="https://github.com/mkbdfr/keycap-ruler">Github</a>
            , {{ $t('contribute.fork') }}
          </p>
        </div>
      </section>
    </div>
  </Fragment>
</template>

<script>
import { Fragment } from 'vue-fragment'
export default {
  name: 'contribute',
  components: { Fragment }
}
</script>
