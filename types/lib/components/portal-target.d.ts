import Vue from 'vue';
import { VNode } from 'vue';
import { Transport, PropWithComponent } from '../types';
declare const _default: import("vue/types/vue").ExtendedVue<Vue, {
    transports: import("../types").Transports;
    firstRender: boolean;
}, {
    children(): VNode[];
    noWrapper(): boolean;
}, {
    ownTransports: Transport[];
    passengers: VNode[];
}, {
    multiple: boolean;
    name: string;
    slim: boolean;
    slotProps: any;
    tag: string;
    transition: PropWithComponent;
}>;
export default _default;
