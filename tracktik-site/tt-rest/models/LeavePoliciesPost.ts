/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Label } from './Label';
import type { LeavePolicyPaySettingsPost } from './LeavePolicyPaySettingsPost';
import type { LeaveTypesId } from './LeaveTypesId';
import type { RegionsId } from './RegionsId';

export type LeavePoliciesPost = {
    /**
     * The name of the leave policy
     */
    name: Label;
    /**
     * Time unit for displaying a leave (DAYS or HOURS)
     */
    displayLeaveIn: LeavePoliciesPost.displayLeaveIn;
    /**
     * Region
     */
    region: RegionsId;
    /**
     * Leave Type
     */
    leaveType: LeaveTypesId;
    /**
     * Pay Settings
     */
    paySettings: LeavePolicyPaySettingsPost;
}

export namespace LeavePoliciesPost {

    /**
     * Time unit for displaying a leave (DAYS or HOURS)
     */
    export enum displayLeaveIn {
        DAYS = 'DAYS',
        HOURS = 'HOURS',
    }


}