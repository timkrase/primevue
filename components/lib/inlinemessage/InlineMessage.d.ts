/**
 *
 * InlineMessage component is useful in cases where a single message needs to be displayed related to an element such as forms. It has one property, severity of the message.
 *
 * [Live Demo](https://www.primevue.org/inlinemessage/)
 *
 * @module inlinemessage
 *
 */
import { VNode } from 'vue';
import { ClassComponent, GlobalComponentConstructor } from '../ts-helpers';

export declare type InlineMessagePassThroughOptionType = InlineMessagePassThroughAttributes | ((options: InlineMessagePassThroughMethodOptions) => InlineMessagePassThroughAttributes) | null | undefined;

/**
 * Custom passthrough(pt) option method.
 */
export interface InlineMessagePassThroughMethodOptions {
    props: InlineMessageProps;
    state: InlineMessageState;
}

/**
 * Custom passthrough(pt) options.
 * @see {@link InlineMessageProps.pt}
 */
export interface InlineMessagePassThroughOptions {
    /**
     * Uses to pass attributes to the root's DOM element.
     */
    root?: InlineMessagePassThroughOptionType;
    /**
     * Uses to pass attributes to the icon's DOM element.
     */
    icon?: InlineMessagePassThroughOptionType;
    /**
     * Uses to pass attributes to the text's DOM element.
     */
    text?: InlineMessagePassThroughOptionType;
}

/**
 * Custom passthrough attributes for each DOM elements
 */
export interface InlineMessagePassThroughAttributes {
    [key: string]: any;
}

/**
 * Defines current inline state in InlineMessage component.
 */
export interface InlineMessageState {
    /**
     * Current visible state as a boolean.
     * @defaultValue false
     */
    visible: boolean;
}

/**
 * Defines valid properties in InlineMessage component.
 */
export interface InlineMessageProps {
    /**
     * Severity level of the message.
     * @defaultValue info
     */
    severity?: 'success' | 'info' | 'warn' | 'error' | string | undefined;
    /**
     * Display a custom icon for the message.
     * @deprecated since v3.27.0. Use 'icon' slot.
     */
    icon?: string | undefined;
}
/**
 * Defines valid slots in InlineMessage slots.
 */
export interface InlineMessageSlots {
    /**
     * Default custom slot.
     */
    default(): VNode[];
    /**
     * Custom message icon template.
     */
    icon(): VNode[];
}

export interface InlineMessageEmits {}

/**
 * **PrimeVue - InlineMessage**
 *
 * _InlineMessage component is useful in cases where a single message needs to be displayed related to an element such as forms. It has one property, severity of the message._
 *
 * [Live Demo](https://www.primevue.org/inlinemessage/)
 * --- ---
 * ![PrimeVue](https://primefaces.org/cdn/primevue/images/logo-100.png)
 *
 * @group Component
 *
 */
declare class InlineMessage extends ClassComponent<InlineMessageProps, InlineMessageSlots, InlineMessageEmits> {}

declare module '@vue/runtime-core' {
    interface GlobalComponents {
        InlineMessage: GlobalComponentConstructor<InlineMessage>;
    }
}

export default InlineMessage;
