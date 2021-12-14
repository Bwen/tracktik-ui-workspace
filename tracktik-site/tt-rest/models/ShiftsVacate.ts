/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Boolean } from './Boolean';
import type { TextArea } from './TextArea';

export type ShiftsVacate = {
    /**
     * Publish on Open Shifts
     */
    shiftBoard: Boolean;
    /**
     * Enter note
     */
    note?: TextArea;
}