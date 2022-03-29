# v3-transitions

[![NPM version](https://img.shields.io/npm/v/v3-transitions.svg?style=flat)](https://npmjs.com/package/v3-transitions) [![NPM downloads](https://img.shields.io/npm/dm/v3-transitions.svg?style=flat)](https://npmjs.com/package/v3-transitions)

It's a fork of [vue2-transitions](https://github.com/BinarCode/vue2-transitions), but added support of Vue3.

## Install :coffee:

```bash
npm i -S v3-transitions
```

## Local usage :rocket:

```vue
<template>
   <fade-transition>
      <div class="box" v-show="show">
        <p>Fade transition</p>
      </div>
    </fade-transition>
</template>

<script>
import 'v3-transitions/dist/style.css'
import { FadeTransition } from 'v3-transitions'

export default {
  components: {
    FadeTransition
  }
}
</script>
```

## Global usage
```js
import 'v3-transitions/dist/style.css'
import Transitions from 'v3-transitions'
import { createApp } from 'vue'

const app = createApp(App)
app.use(Transitions)
```

## List of available transitions
- FadeTransition
- ZoomCenterTransition
- ZoomXTransition
- ZoomYTransition
- SlideXLeftTransition
- SlideXRightTransition
- SlideYUpTransition
- SlideYDownTransition
- ScaleTransition
- :warning: CollapseTransition (still buggy)

## Props
```js
props: {
  /**
   * Transition duration. Number for specifying the same duration for enter/leave transitions
   * Object style {enter: 300, leave: 300} for specifying explicit durations for enter/leave
   */
  duration: {
    type: [Number, Object],
    default: 300
  }
  /**
   * Whether the component should be a `transition-group` component.
   */
  group: Boolean,
  /**
   * Transition tag, in case the component is a `transition-group`
   */
  tag: {
    type: String,
    default: 'span'
  },
  /**
   *  Transform origin property https://tympanus.net/codrops/css_reference/transform-origin/.
   *  Can be specified with styles as well but it's shorter with this prop
   */
  origin: {
    type: String,
    default: ''
  },
  /**
   * Element styles that are applied during transition. These styles are applied on @beforeEnter and @beforeLeave hooks
   */
  styles: {
    type: Object,
    default: () => {
      return {
        animationFillMode: 'both',  
        animationTimingFunction: 'ease-out'
      }
    }
  }
}
```

## Group transitions
Each transition can be used as a `transition-group` by adding the `group` prop to one of the desired transitions.
```html
<fade-transition group>
   <!--keyed children here-->
</fade-transition>
```
Gotchas/things to watch:
1. Elements inside `group` transitions should have `display: inline-block` or must be placed in a flex context:
   [Vue.js docs reference](https://vuejs.org/v2/guide/transitions.html#List-Move-Transitions)
2. Each transition has a `move` class [move class docs](https://vuejs.org/v2/guide/transitions.html#List-Move-Transitions).
   Unfortunately the duration for the move transition cannot be configured through props. By default each transition has a `move` class associated
   with `.3s` transition duration:

- Zoom
  ```css
   .zoom-move{
     transition: transform .3s ease-out;
   }
  ```
- Slide
  ```css
    .slide-move{
      transition: transform .3s ease-out;
    }
  ```
- Scale
  ```css
   .scale-move{
       transition: transform .3s cubic-bezier(.25,.8,.50,1);
   }
  ``` 
- Fade
  ```css
  .fade-move{
      transition: transform .3s ease-out;
  }
   ``` 
If you want to configure the duration, just redefine the class for the transition you use with the desired duration.

## License

MIT &copy; [50rayn](https://github.com/50rayn)

## Special thanks to

@cristijora (The UI for list transitions in the demo is inspired by [vue2-transitions](https://github.com/BinarCode/vue2-transitions) )  
