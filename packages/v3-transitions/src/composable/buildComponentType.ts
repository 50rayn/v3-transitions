import { Transition, TransitionGroup } from 'vue';

export default (props) => props.group ? TransitionGroup : Transition
