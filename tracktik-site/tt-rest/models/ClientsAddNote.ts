/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Label } from './Label';

export type ClientsAddNote = {
    /**
     * Content
     */
    note: Label;
    /**
     * Type
     */
    type: ClientsAddNote.type;
}

export namespace ClientsAddNote {

    /**
     * Type
     */
    export enum type {
        GENERAL_NOTE = 'GENERAL NOTE',
    }


}