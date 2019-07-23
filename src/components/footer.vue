<template>
  <footer class="footer">
    <div class="content has-text-centered">
      <p>
        {{ $t('footer.title') }}
        <a target="_blank" href="https://zekth.github.io/">Vincent Le Goff</a>.
      </p>
      <p>
        {{ $t('footer.proud') }}
        <br />
        <a target="_blank" href="https://bulma.io/">
          <img
            width="200"
            alt="bulma css"
            style="width: 120px;"
            src="https://bulma.io/images/bulma-logo.png"
          />
        </a>
        <a target="_blank" href="https://vuejs.org/">
          <img style="height: 30px;" alt="vuejs" src="https://vuejs.org/images/logo.png" />
        </a>
      </p>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'appFooter'
}
</script>
