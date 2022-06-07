<!--|== Template =============================================================================== -->
<template>
  <div ref="container" class="page home container">
    <div class="row">
      <div ref="content" class="twelve columns">
        <h1>Headline Goes Here</h1>
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
        <p>
          Praesent eu molestie nisi. Sed nec tincidunt nibh. Ut molestie
          vestibulum ligula, vel interdum leo sollicitudin quis. Sed lectus ante,
          pellentesque eu efficitur ut, euismod sed enim. Vestibulum at sem ex.
          Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere
          cubilia curae; Fusce et lacus sit amet lorem faucibus aliquam vel quis
          libero. Donec quis pharetra augue. In rutrum odio vel lacus eleifend
          iaculis. Nunc lacus nisi, feugiat in quam eget, vulputate fringilla
          nunc. Nunc in mattis lectus. Quisque facilisis felis id enim viverra
          sagittis. Duis a lacus nunc.
        </p>
      </div>
    </div>
  </div>
</template>

<!--|== Scripts ================================================================================ -->
<script setup>
import { ref, onMounted } from 'vue';
import gsap from 'gsap';

const container = ref(null);
const content = ref(null);

onMounted(() => {
  gsap.from(container.value, {
    delay: 0.5,
    duration: 1,
    y: '+100',
    autoAlpha: 0,
    ease: "back.out(1.7)",
  });
});


</script>

<!--|== CSS ==================================================================================== -->
<style lang="scss" scoped>
.home {
}
</style>
