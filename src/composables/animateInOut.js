// ==|== Imports ===================================================================================
import { onMounted } from 'vue';
import { onBeforeRouteLeave } from 'vue-router'

export function animateInOut(el) {
  onMounted(() => {
    gsap.from(el.value, {
      duration: 0.5,
      x: '-1000',
      autoAlpha: 0,
      ease: Power2.easeOut,
    });
  });

  onBeforeRouteLeave((to, from, next) => {
    gsap.to(el.value, {
      duration: 0.5,
      x: '+1000',
      autoAlpha: 0,
      ease: Power2.easeIn,
      onComplete: () => {
        next();
      }
    });
  });
};
