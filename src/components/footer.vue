<template>
  <footer class="footer">
    <div class="content has-text-centered">
      <p v-html="$t('footer.title')" />
      <p>
        <a target="_blank" href="https://claviers-mecaniques.fr/">
          <img src="@/assets/MKFR_Logo.png"
            width="200"
            alt="MK Fr"
            style="width: 120px;"
          />
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
