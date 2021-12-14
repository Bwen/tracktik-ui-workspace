/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Label } from './Label';
import type { ShiftsId } from './ShiftsId';

export type ShiftNotesPatch = {
    /**
     * Content
     */
    content?: Label;
    /**
     * Type
     */
    type?: ShiftNotesPatch.type;
    /**
     * Shift
     */
    shift?: ShiftsId;
}

export namespace ShiftNotesPatch {

    /**
     * Type
     */
    export enum type {
        NOTE = 'NOTE',
        LOG = 'LOG',
    }


}