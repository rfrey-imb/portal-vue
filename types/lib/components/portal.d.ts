import Vue from 'vue';
import { VNode } from 'vue';
declare const _default: import("vue/types/vue").ExtendedVue<Vue, unknown, {
    clear(target?: string | undefined): void;
    normalizeSlots(): Function[] | VNode[] | undefined;
    normalizeOwnChildren(children: VNode[] | Function): VNode[];
    sendUpdate(): void;
}, unknown, {
    disabled: boolean;
    name: string;
    order: number;
    slim: boolean;
    slotProps: any;
    tag: string;
    to: string;
}>;
export default _default;
