import Vue from 'vue';
import { Transports, TransportInput, TransportVector, VMRegister } from '../types';
export declare type WormholeCallback = () => void;
export declare const Wormhole: import("vue/types/vue").ExtendedVue<Vue, {
    transports: Transports;
    targets: VMRegister;
    sources: VMRegister;
    trackInstances: boolean;
    changeCallbacks: WormholeCallback[];
}, {
    open(transport: TransportInput): void;
    close(transport: TransportVector, force?: boolean): void;
    registerTarget(target: string, vm: Vue, force?: boolean | undefined): void;
    unregisterTarget(target: string): void;
    registerSource(source: string, vm: Vue, force?: boolean | undefined): void;
    unregisterSource(source: string): void;
    hasTarget(to: string): true;
    hasSource(to: string): true;
    hasContentFor(to: string): boolean;
    addOnChangeListener(callback: WormholeCallback): void;
    removeOnChangeListener(callback?: WormholeCallback | undefined): void;
    removeOnChangeListeners(): void;
    $_processChange(): void;
    $_getTransportIndex({ to, from }: TransportVector): number;
}, unknown, Record<never, any>>;
declare const wormhole: import("vue/types/vue").CombinedVueInstance<{
    transports: Transports;
    targets: VMRegister;
    sources: VMRegister;
    trackInstances: boolean;
    changeCallbacks: WormholeCallback[];
} & {
    open(transport: TransportInput): void;
    close(transport: TransportVector, force?: boolean): void;
    registerTarget(target: string, vm: Vue, force?: boolean | undefined): void;
    unregisterTarget(target: string): void;
    registerSource(source: string, vm: Vue, force?: boolean | undefined): void;
    unregisterSource(source: string): void;
    hasTarget(to: string): true;
    hasSource(to: string): true;
    hasContentFor(to: string): boolean;
    addOnChangeListener(callback: WormholeCallback): void;
    removeOnChangeListener(callback?: WormholeCallback | undefined): void;
    removeOnChangeListeners(): void;
    $_processChange(): void;
    $_getTransportIndex({ to, from }: TransportVector): number;
} & Record<never, any> & Vue, object, object, object, Record<never, any>>;
export { wormhole };
