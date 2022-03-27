<template>
  <component :is="componentType"
             :tag="tag"
             v-bind="$attrs"
             v-on="hooks"
             enter-active-class="zoomInUp"
             move-class="zoom-move"
             leave-active-class="zoomOutUp">
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
        animationTimingFunction: 'ease-out'
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

  @keyframes zoomInUp {
    from {
      opacity: 0;
      transform: scaleY(0);
      transform-origin: top center;
    }

    50% { opacity: 1; }
    to { transform: scaleY(1); }
  }

  .zoomInUp { animation-name: zoomInUp; }

  @keyframes zoomOutUp {
    from { opacity: 1; }
    50% { transform: scaleY(0); }
    to { opacity: 0; }
  }

  .zoomOutUp { animation-name: zoomOutUp; }
</style>
