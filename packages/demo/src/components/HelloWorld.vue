<template>
  <fade-transition group>
    <template v-for="i in list" :key="i">
      <img v-if="show" alt="Vue logo" src="./../assets/logo.png" />
    </template>
  </fade-transition>
  <div>
    <button type="button" @click="list++">Show</button>
  </div>
</template>

<script>
import { FadeTransition } from 'v3-transitions'
import { defineComponent } from "vue";

export default defineComponent({
  name: "HelloWorld",
  components: {
    FadeTransition
  },
  data () {
    return {
      show: true,
      list: 10
    }
  }
})
</script>

