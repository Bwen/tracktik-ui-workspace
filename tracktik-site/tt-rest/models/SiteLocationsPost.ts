/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AccountsId } from './AccountsId';
import type { TextArea } from './TextArea';

export type SiteLocationsPost = {
    /**
     * Location Name
     */
    name: string;
    /**
     * Optional Details
     */
    details?: TextArea;
    /**
     * Type
     */
    type?: SiteLocationsPost.type;
    /**
     * Account
     */
    account: AccountsId;
}

export namespace SiteLocationsPost {

    /**
     * Type
     */
    export enum type {
        FLOOR = 'FLOOR',
        SECTION = 'SECTION',
        PARKING = 'PARKING',
        UNIT = 'UNIT',
        UTILITY_ROOM = 'UTILITY_ROOM',
        WASH_ROOM = 'WASH_ROOM',
        STAIR_CASE = 'STAIR_CASE',
        HALLWAY = 'HALLWAY',
        ELEVATOR = 'ELEVATOR',
        STREET_OR_INTERSECTION = 'STREET_OR_INTERSECTION',
        OTHER = 'OTHER',
    }


}