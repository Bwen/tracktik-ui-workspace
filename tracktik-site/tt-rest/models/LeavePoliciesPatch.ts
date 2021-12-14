/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Label } from './Label';
import type { LeavePolicyPaySettingsPatch } from './LeavePolicyPaySettingsPatch';
import type { LeaveTypesId } from './LeaveTypesId';

export type LeavePoliciesPatch = {
    /**
     * The name of the leave policy
     */
    name?: Label;
    /**
     * Time unit for displaying a leave (DAYS or HOURS)
     */
    displayLeaveIn?: LeavePoliciesPatch.displayLeaveIn;
    /**
     * Leave Type
     */
    leaveType?: LeaveTypesId;
    /**
     * Pay Settings
     */
    paySettings?: LeavePolicyPaySettingsPatch;
}

export namespace LeavePoliciesPatch {

    /**
     * Time unit for displaying a leave (DAYS or HOURS)
     */
    export enum displayLeaveIn {
        DAYS = 'DAYS',
        HOURS = 'HOURS',
    }


}