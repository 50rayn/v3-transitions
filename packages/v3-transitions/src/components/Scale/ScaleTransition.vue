<template>
  <component :is="componentType"
             :tag="tag"
             v-bind="$attrs"
             v-on="hooks"
             enter-active-class="scaleIn"
             move-class="scale-move"
             leave-active-class="scaleOut">
    <slot />
  </component>
</template>


<script lang="ts">
export const customProps = ({
  origin: {
    type: String,
    default: 'top left'
  },
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

<style>
  @keyframes scaleIn {
    from {
      opacity: 0;
      transform: scale(0)
    }

    to { opacity: 1; }
  }

  .scaleIn { animation-name: scaleIn; }

  @keyframes scaleOut {
    from { opacity: 1; }

    to {
      opacity: 0;
      transform: scale(0);
    }
  }

  .scaleOut { animation-name: scaleOut; }
  .scale-move { transition: transform .3s cubic-bezier(.25, .8, .50, 1); }
</style>
