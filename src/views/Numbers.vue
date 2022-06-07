<!--|== Template =============================================================================== -->
<template>
  <div class="page container">
    <div class="row">
      <div class="twelve columns">
        <h1>Tweened Numbers</h1>
        <h3>Original: {{ data.num }}</h3>
        <h3>Tweened: {{ formatedNum }}</h3>
        <button class="button button-primary" @click="increaseCount">Increase +</button>
      </div>
    </div>
  </div>
</template>

<!--|== Scripts ================================================================================ -->
<script setup>
import { reactive, watch, computed } from 'vue';
import gsap from 'gsap';

const data = reactive({
  num: 0,
  tweenedNum: 0,
});

function increaseCount() {
  data.num = data.num + 10;
}

watch(data, (newValue, oldValue) => {
  tween(newValue.num);
});

function tween(newNumber) {
  gsap.to(data, {
    duration: 0.5,
    tweenedNum: newNumber,
    ease: 'none',
  });
}

const formatedNum = computed(() => {
  return Math.round(data.tweenedNum);
});
</script>

<!--|== CSS ==================================================================================== -->
<style lang="scss" scoped></style>
