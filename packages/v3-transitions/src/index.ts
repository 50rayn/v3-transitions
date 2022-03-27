import { App } from "vue";

import FadeTransition from './components/Fade/FadeTransition.vue'

import ZoomCenterTransition from './components/Zoom/ZoomCenterTransition.vue'
import ZoomXTransition from './components/Zoom/ZoomXTransition.vue'
import ZoomYTransition from './components/Zoom/ZoomYTransition.vue'
import ZoomUpTransition from './components/Zoom/ZoomUpTransition.vue'

import SlideYUpTransition from './components/Slide/SlideYUpTransition.vue'
import SlideYDownTransition from './components/Slide/SlideYDownTransition.vue'
import SlideXLeftTransition from './components/Slide/SlideXLeftTransition.vue'
import SlideXRightTransition from './components/Slide/SlideXRightTransition.vue'

import ScaleTransition from './components/Scale/ScaleTransition.vue'

import CollapseTransition from './components/Collapse/CollapseTransition.vue'


// let components = {
//     [FadeTransition.name]: FadeTransition,
//     [ZoomCenterTransition.name]: ZoomCenterTransition,
//     [ZoomXTransition.name]: ZoomXTransition,
//     [ZoomYTransition.name]: ZoomYTransition,
//     [CollapseTransition.name]: CollapseTransition,
//     [ScaleTransition.name]: ScaleTransition,
//     [SlideYUpTransition.name]: SlideYUpTransition,
//     [SlideYDownTransition.name]: SlideYDownTransition,
//     [SlideXLeftTransition.name]: SlideXLeftTransition,
//     [SlideXRightTransition.name]: SlideXRightTransition,
// }

export function install(Vue: App, options: { components: Array<{ name: string }> }) {
    // @ts-ignore
    if (Vue.$_vTooltipInstalled) return
    // @ts-ignore
    Vue.$_vTooltipInstalled = true

    Vue.component('FadeTransition', FadeTransition)

    Vue.component('ZoomCenterTransition', ZoomCenterTransition)
    Vue.component('ZoomXTransition', ZoomXTransition)
    Vue.component('ZoomYTransition', ZoomYTransition)
    Vue.component('ZoomUpTransition', ZoomUpTransition)

    Vue.component('SlideYUpTransition', SlideYUpTransition)
    Vue.component('SlideYDownTransition', SlideYDownTransition)
    Vue.component('SlideXLeftTransition', SlideXLeftTransition)
    Vue.component('SlideXRightTransition', SlideXRightTransition)

    Vue.component('ScaleTransition', ScaleTransition)

    Vue.component('CollapseTransition', CollapseTransition)

    // if (options && options.components) {
    //     options.components.forEach((c: { name: string }) => Vue.component(c.name, components[c.name]))
    // } else {
    //     Object.keys(components).forEach((key) => { Vue.component(key, components[key]) });
    // }
}

export {
    FadeTransition,
    ZoomCenterTransition,
    ZoomXTransition,
    ZoomYTransition,
    ZoomUpTransition,
    SlideYUpTransition,
    SlideYDownTransition,
    SlideXLeftTransition,
    SlideXRightTransition,
    ScaleTransition,
    CollapseTransition,
}

export default {
    // eslint-disable-next-line no-undef
    version: VERSION,
    install
}

