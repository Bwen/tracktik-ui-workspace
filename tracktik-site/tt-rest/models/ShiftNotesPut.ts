/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Label } from './Label';
import type { ShiftsId } from './ShiftsId';

export type ShiftNotesPut = {
    /**
     * Content
     */
    content: Label;
    /**
     * Type
     */
    type: ShiftNotesPut.type;
    /**
     * Shift
     */
    shift?: ShiftsId;
}

export namespace ShiftNotesPut {

    /**
     * Type
     */
    export enum type {
        NOTE = 'NOTE',
        LOG = 'LOG',
    }


}