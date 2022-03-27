<template>
  <component :is="componentType"
             :tag="tag"
             v-bind="$attrs"
             v-on="hooks"
             enter-active-class="zoomIn"
             move-class="zoom-move"
             leave-active-class="zoomOut">
    <slot />
  </component>
</template>

<script lang="ts">
export default {
  inheritAttrs: false
}
</script>

<script setup lang="ts">
import { buildProps, buildEmits, buildComponentType, buildTag, buildHooks } from "../../composable";

const props = defineProps(buildProps())
const emit = defineEmits(buildEmits())

const componentType = buildComponentType(props)
const tag = buildTag(props)
const hooks = buildHooks(props, emit)
</script>

<style lang="scss">
  @import "move";

  @keyframes zoomIn {
    from {
      opacity: 0;
      transform: scale3d(.3, .3, .3);
    }

    50% { opacity: 1; }
  }

  .zoomIn { animation-name: zoomIn; }

  @keyframes zoomOut {
    from { opacity: 1; }

    50% {
      opacity: 0;
      transform: scale3d(.3, .3, .3);
    }

    to { opacity: 0; }
  }

  .zoomOut { animation-name: zoomOut; }
</style>
