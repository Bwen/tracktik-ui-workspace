/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Label } from './Label';
import type { ShiftsId } from './ShiftsId';

export type ShiftNotesPost = {
    /**
     * Content
     */
    content: Label;
    /**
     * Type
     */
    type: ShiftNotesPost.type;
    /**
     * Shift
     */
    shift?: ShiftsId;
}

export namespace ShiftNotesPost {

    /**
     * Type
     */
    export enum type {
        NOTE = 'NOTE',
        LOG = 'LOG',
    }


}