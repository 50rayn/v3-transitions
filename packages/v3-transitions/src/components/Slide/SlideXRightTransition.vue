<template>
  <component :is="componentType"
             :tag="tag"
             v-bind="$attrs"
             v-on="hooks"
             enter-active-class="slideXRightIn"
             move-class="slide-move"
             leave-active-class="slideXRightOut">
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
        animationTimingFunction: 'cubic-bezier(.25,.8,.50,1)'
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

  @keyframes slideXRightIn {
    from {
      opacity: 0;
      transform: translateX(15px);
    }

    to { opacity: 1; }
  }

  .slideXRightIn { animation-name: slideXRightIn; }

  @keyframes slideXRightOut {
    from { opacity: 1; }

    to {
      opacity: 0;
      transform: translateX(15px);
    }
  }

  .slideXRightOut { animation-name: slideXRightOut; }
</style>
