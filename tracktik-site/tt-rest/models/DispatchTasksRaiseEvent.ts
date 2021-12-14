/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { JSON } from './JSON';
import type { TextArea } from './TextArea';

export type DispatchTasksRaiseEvent = {
    /**
     * Name of the event to raise
     */
    event: TextArea;
    /**
     * An array of fields used by the report/form defined on the transition
     */
    reportFields?: JSON;
}