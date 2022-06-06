<!--|== Template =============================================================================== -->
<template>
  <Transition
    name="scale-transition"
    @before-enter="onBeforeEnter"
    @enter="onEnter"
    :css="false"
    appear
  >
    <slot></slot> <!-- pass down slot content -->
  </Transition>
</template>

<!--|== Scripts ================================================================================ -->
<script setup>
import gsap from 'gsap';

function onBeforeEnter(el) {
  gsap.set(el, {
    scale: 0.5,
    autoAlpha: 0,
  })
};

function onEnter(el, done) {
  gsap.to(el, {
    delay: 1,
    duration: 0.5,
    scale: 1,
    autoAlpha: 1,
    ease: Power2.easeOut,
    onComplete: done
  });
}
</script>

<!--|== CSS ==================================================================================== -->
<style lang="scss"></style>