<!--|== Template =============================================================================== -->
<template>
  <main class="app">
    <SideNavigation/>
    <section class="app">
      <router-view />
    </section>
  </main>
</template>

<!--|== Scripts ================================================================================ -->
<script setup>
import SideNavigation from './components/SideNavigation.vue';
</script>

<!--|== CSS ==================================================================================== -->
<style lang="scss">
#app {
  width: 100%;
  height: 100%;
}
.app {
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
}
</style>
