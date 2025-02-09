<template>
  <component :is="componentType"
             :tag="tag"
             v-bind="$attrs"
             v-on="hooks"
             move-class="collapse-move"
  >
    <slot />
  </component>
</template>

<script setup lang="ts">
import { buildProps, buildEmits, buildComponentType, buildTag } from "../../composable";
import { setStyles, setAbsolutePosition } from '../../composable/buildHooks'

const props = defineProps(buildProps())
const emit = defineEmits(buildEmits())

const componentType = buildComponentType(props)
const tag = buildTag(props)

const hooks = {
  beforeEnter(el) {
    let enterDuration = props.duration.enter ? props.duration.enter : props.duration
    el.style.transition = transitionStyle(enterDuration)
    if (!el.dataset) el.dataset = {};

    el.dataset.oldPaddingTop = el.style.paddingTop;
    el.dataset.oldPaddingBottom = el.style.paddingBottom;

    el.style.height = '0';
    el.style.paddingTop = 0;
    el.style.paddingBottom = 0;
    setStyles(props, el)
  },
  afterEnter(el) {
    // for safari: remove class then reset height is necessary
    el.style.transition = ''
    el.style.height = '';
    el.style.overflow = el.dataset.oldOverflow;
  },
  enter(el) {
    el.dataset.oldOverflow = el.style.overflow;
    if (el.scrollHeight !== 0) {
      el.style.height = el.scrollHeight + 'px';
      el.style.paddingTop = el.dataset.oldPaddingTop;
      el.style.paddingBottom = el.dataset.oldPaddingBottom;
    } else {
      el.style.height = '';
      el.style.paddingTop = el.dataset.oldPaddingTop;
      el.style.paddingBottom = el.dataset.oldPaddingBottom;
    }

    el.style.overflow = 'hidden';
  },
  beforeLeave(el) {
    if (!el.dataset) el.dataset = {};
    el.dataset.oldPaddingTop = el.style.paddingTop;
    el.dataset.oldPaddingBottom = el.style.paddingBottom;
    el.dataset.oldOverflow = el.style.overflow;

    el.style.height = el.scrollHeight + 'px';
    el.style.overflow = 'hidden';
    setStyles(props, el)
  },
  leave(el) {
    let leaveDuration = props.duration.leave ? props.duration.leave : props.duration
    if (el.scrollHeight !== 0) {
      // for safari: add class after set height, or it will jump to zero height suddenly, weired
      el.style.transition = transitionStyle(leaveDuration)
      el.style.height = 0;
      el.style.paddingTop = 0;
      el.style.paddingBottom = 0;
    }
    // necessary for transition-group
    setAbsolutePosition(props, el)
  },
  afterLeave (el) {
  el.style.transition = ''
  el.style.height = '';
  el.style.overflow = el.dataset.oldOverflow;
  el.style.paddingTop = el.dataset.oldPaddingTop;
  el.style.paddingBottom = el.dataset.oldPaddingBottom;
}
}

function transitionStyle(duration = 300) {
  let durationInSeconds = duration / 1000
  let style = `${durationInSeconds}s height ease-in-out, ${durationInSeconds}s padding-top ease-in-out, ${durationInSeconds}s padding-bottom ease-in-out`
  return style;
}
</script>

<style>
  .collapse-move { transition: transform .3s ease-in-out; }
</style>
