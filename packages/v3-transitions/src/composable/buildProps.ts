const defaultProps = {
    /**
     * Transition duration. Number for specifying the same duration for enter/leave transitions
     * Object style {enter: 300, leave: 300} for specifying explicit durations for enter/leave
     */
    duration: {
        type: [Number, Object],
        default: 300
    },
    /**
     * Transition delay. Number for specifying the same delay for enter/leave transitions
     * Object style {enter: 300, leave: 300} for specifying explicit durations for enter/leave
     */
    delay: {
        type: [Number, Object],
        default: 0
    },
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


export default (customProps?: any) => ({...defaultProps, ...(customProps || {})})
