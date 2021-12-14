/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Label } from './Label';
import type { RegionsId } from './RegionsId';

export type LeaveTypesPost = {
    /**
     * The name of the leave type
     */
    name: Label;
    /**
     * Region, it can not be modified after creation
     */
    region: RegionsId;
}