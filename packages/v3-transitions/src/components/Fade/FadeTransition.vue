<template>
  <component :is="componentType"
             :tag="tag"
             v-bind="$attrs"
             v-on="hooks"
             enter-active-class="fadeIn"
             move-class="fade-move"
             leave-active-class="fadeOut"
  >
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

<style>
  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }

  .fadeIn { animation-name: fadeIn; }

  @keyframes fadeOut {
    from { opacity: 1; }
    to { opacity: 0; }
  }

  .fadeOut { animation-name: fadeOut; }

  .fade-move { transition: transform .3s ease-out; }
</style>
