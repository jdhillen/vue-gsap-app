<!--|== Template =============================================================================== -->
<template>
  <section class="page-not-found">
    <h1>404</h1>
    <router-link class="button" :to="{ name: 'Home' }"
      >Back to the home page</router-link
    >
  </section>
</template>

<!--|== Scripts ================================================================================ -->
<script setup></script>

<!--|== CSS ==================================================================================== -->
<style lang="scss" scoped>
.page-not-found {
}
</style>
