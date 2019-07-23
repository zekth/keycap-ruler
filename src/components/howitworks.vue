<template>
  <fragment>
    <section class="hero is-info">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">{{ $t("howItWorks") }}</h1>
        </div>
      </div>
    </section>

    <div class="container">
      <section class="section">
        <div class="content">
          <h3>{{ $t("whyUsingThis")}}</h3>
          <p>
            If you're in the mech keyboard hobby (addiction? Drug? WHAT NANI?!), you've sometimes struggled to find a way
            to check the size of your keycaps. 2.25U or 2.5U?! Y U DO DIZ?!
            So instead of comparing key between themselves (if you have reference keys), here is a chart of keys.
          </p>
          <h3>How could i be sure it's the good size for my screen?</h3>
          <p>
            You can see there is a referal image of a credit card. Credit cards are normalized with the rule
            <a target="_blank" href="https://en.wikipedia.org/wiki/ISO/IEC_7810">ISO 7810 ID-1</a>. So the chart presented here is done in
            referal of this. If you don't have a credit card: Rob the bank or stole you mum's one.
          </p>
          <h3>My credit card doesn't fit, DIZ IZ BROKEN!</h3>
          <p>
            No. All screen does not have the same DPI and pixel size. That's why there is a Zoom slider which gives you
            the possibility to adjust the chart to your screen.
          </p>
          <h3>Why weird User Interface?</h3>
          <p>
            This app is optimized on Google Chrome, done my best to fit with Firefox, but it seems that the responsive is not really compliant with the zoom in this browser. See
            <a target="_blank" href="https://bugzilla.mozilla.org/show_bug.cgi?id=856306">here</a>. And if you want, another weird issue on firefox :
            <a target="_blank" href="https://bugzilla.mozilla.org/show_bug.cgi?id=353599">here</a>
          </p>
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
