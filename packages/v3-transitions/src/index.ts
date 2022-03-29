import { App } from "vue";

import PrivateFadeTransition from './components/Fade/FadeTransition.vue'

import PrivateZoomCenterTransition from './components/Zoom/ZoomCenterTransition.vue'
import PrivateZoomXTransition from './components/Zoom/ZoomXTransition.vue'
import PrivateZoomYTransition from './components/Zoom/ZoomYTransition.vue'
import PrivateZoomUpTransition from './components/Zoom/ZoomUpTransition.vue'

import PrivateSlideYUpTransition from './components/Slide/SlideYUpTransition.vue'
import PrivateSlideYDownTransition from './components/Slide/SlideYDownTransition.vue'
import PrivateSlideXLeftTransition from './components/Slide/SlideXLeftTransition.vue'
import PrivateSlideXRightTransition from './components/Slide/SlideXRightTransition.vue'

import PrivateScaleTransition from './components/Scale/ScaleTransition.vue'

import PrivateCollapseTransition from './components/Collapse/CollapseTransition.vue'

interface Options {
    casing?: 'PascalCase' | 'kebab-case'
    components?: Array<'FadeTransition'|'ZoomCenterTransition'|'ZoomXTransition'|'ZoomYTransition'|'ZoomUpTransition'|'SlideYUpTransition'|'SlideYDownTransition'|'SlideXLeftTransition'|'SlideXRightTransition'|'ScaleTransition'|'CollapseTransition'>
}

const components = {
    'FadeTransition': PrivateFadeTransition,
    'ZoomCenterTransition': PrivateZoomCenterTransition,
    'ZoomXTransition': PrivateZoomXTransition,
    'ZoomYTransition': PrivateZoomYTransition,
    'ZoomUpTransition': PrivateZoomUpTransition,
    'SlideYUpTransition': PrivateSlideYUpTransition,
    'SlideYDownTransition': PrivateSlideYDownTransition,
    'SlideXLeftTransition': PrivateSlideXLeftTransition,
    'SlideXRightTransition': PrivateSlideXRightTransition,
    'ScaleTransition': PrivateScaleTransition,
    'CollapseTransition': PrivateCollapseTransition
}

export {
    PrivateFadeTransition as FadeTransition,
    PrivateZoomCenterTransition as ZoomCenterTransition,
    PrivateZoomXTransition as ZoomXTransition,
    PrivateZoomYTransition as ZoomYTransition,
    PrivateZoomUpTransition as ZoomUpTransition,
    PrivateSlideYUpTransition as SlideYUpTransition,
    PrivateSlideYDownTransition as SlideYDownTransition,
    PrivateSlideXLeftTransition as SlideXLeftTransition,
    PrivateSlideXRightTransition as SlideXRightTransition,
    PrivateScaleTransition as ScaleTransition,
    PrivateCollapseTransition as CollapseTransition
}

export function install(app: App, options: Options) {
    // @ts-ignore
    if (app.$_v3TransitionsInstalled) return
    // @ts-ignore
    app.$_v3TransitionsInstalled = true

    const componentNameCasing = {
        'PascalCase': str => str,
        'kebab-case': str => `${str.slice(0, 1)}${str.slice(1).replace(/[A-Z]/g, '-$&')}`.toLocaleLowerCase()
    }

    const nameFormat = componentNameCasing[options?.casing ?? 'kebab-case']

    if (options && options?.components) {
        options.components.forEach((name: string) => app.component(nameFormat(name), components[name]))
    } else {
        Object.entries(components).forEach(([key, component]) => app.component(nameFormat(key), component));
    }
}

export default {
    // eslint-disable-next-line no-undef
    version: VERSION,
    install
}

