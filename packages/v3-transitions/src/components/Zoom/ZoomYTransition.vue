<template>
  <component :is="componentType"
             :tag="tag"
             v-bind="$attrs"
             v-on="hooks"
             enter-active-class="zoomInY"
             move-class="zoom-move"
             leave-active-class="zoomOutY">
    <slot />
  </component>
</template>

<script lang="ts">
export const customProps = ({
  styles: {
    type: Object,
    default: () => {
      return {
        animationFillMode: 'both',
        animationTimingFunction: 'cubic-bezier(.55,0,.1,1)'
      }
    }
  }
})

export default {
  inheritAttrs: false
}
</script>

<script setup lang="ts">
import { buildProps, buildEmits, buildComponentType, buildTag, buildHooks } from "../../composable";

const props = defineProps(buildProps(customProps))
const emit = defineEmits(buildEmits())

const componentType = buildComponentType(props)
const tag = buildTag(props)
const hooks = buildHooks(props, emit)
</script>

<style lang="scss">
  @import "move";

  @keyframes zoomInY {
    from {
      opacity: 0;
      transform: scaleY(0);
    }

    50% {
      opacity: 1;
      transform: scaleY(1)
    }
  }

  .zoomInY { animation-name: zoomInY; }

  @keyframes zoomOutY {
    from { opacity: 1; }

    50% {
      opacity: 0;
      transform: scaleY(0);
    }

    to { opacity: 0; }
  }

  .zoomOutY { animation-name: zoomOutY; }
</style>
