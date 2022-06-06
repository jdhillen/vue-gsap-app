<!--|== Template =============================================================================== -->
<template>
  <div ref="container" class="page container">
    <div class="row">
      <div class="twelve columns">
        <h1>Animation Using Composables #2</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
          mollis laoreet lectus lobortis luctus. Aenean vel orci ante. Mauris sit
          amet consequat tortor. Mauris tristique sodales nisl, vel tincidunt
          turpis commodo quis. Phasellus sodales, diam nec euismod pretium, lectus
          lacus pharetra neque, quis laoreet justo nisl ut orci. Lorem ipsum dolor
          sit amet, consectetur adipiscing elit. Orci varius natoque penatibus et
          magnis dis parturient montes, nascetur ridiculus mus. Curabitur rutrum,
          quam non feugiat egestas, tortor sem rutrum mauris, eget semper ante
          justo vel mauris.
        </p>
        <div class="button-container">
          <router-link :to="{ name: 'Composables1' }" class="button button-primary">Page 1</router-link>
          <router-link :to="{ name: 'Composables2' }" class="button button-primary">Page 2</router-link>
          <router-link :to="{ name: 'Composables3' }" class="button button-primary">Page 3</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<!--|== Scripts ================================================================================ -->
<script setup>
import { ref } from 'vue';
import { animateInOut } from '@/composables/animateInOut';

const container = ref(null);

animateInOut(container);
</script>

<!--|== CSS ==================================================================================== -->
<style lang="scss" scoped>
</style>
