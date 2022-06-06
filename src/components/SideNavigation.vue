<!--|== Template =============================================================================== -->
<template>
  <div class="side-navigation">
    <router-link :to="{ name: 'Home' }">Home</router-link>
    <router-link :to="{ name: 'Timeline' }">Timeline</router-link>
    <router-link :to="{ name: 'Composables1' }">Composables</router-link>
    <router-link :to="{ name: 'Transitions' }">Transitions</router-link>
    <router-link :to="{ name: 'TransitionsComponent' }">Transitions Component</router-link>
    <router-link :to="{ name: 'Numbers' }">Numbers</router-link>
  </div>
</template>

<!--|== Scripts ================================================================================ -->
<script setup></script>

<!--|== CSS ==================================================================================== -->
<style lang="scss">
.side-navigation {
  z-index: 100;
  display: flex;
  flex-direction: column;
  width: 150px;
  height: 100%;
  background-color: $black;
  padding: 20px;

  a {
    color: $white;
    text-decoration: none;
    margin-bottom: 15px;
  }
}
</style>