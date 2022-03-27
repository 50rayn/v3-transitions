<template>
  <FadeTransition group>
    <template v-for="i in list" :key="i">
      <img v-if="show" alt="Vue logo" src="./../assets/logo.png" />
    </template>
  </FadeTransition>
  <div>
    <button type="button" @click="list++">Show</button>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "HelloWorld",
  data () {
    return {
      show: true,
      list: 10
    }
  }
})
</script>

