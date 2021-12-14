/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Label } from './Label';
import type { LeavePolicyPaySettingsPut } from './LeavePolicyPaySettingsPut';
import type { LeaveTypesId } from './LeaveTypesId';

export type LeavePoliciesPut = {
    /**
     * The name of the leave policy
     */
    name: Label;
    /**
     * Time unit for displaying a leave (DAYS or HOURS)
     */
    displayLeaveIn: LeavePoliciesPut.displayLeaveIn;
    /**
     * Leave Type
     */
    leaveType: LeaveTypesId;
    /**
     * Pay Settings
     */
    paySettings: LeavePolicyPaySettingsPut;
}

export namespace LeavePoliciesPut {

    /**
     * Time unit for displaying a leave (DAYS or HOURS)
     */
    export enum displayLeaveIn {
        DAYS = 'DAYS',
        HOURS = 'HOURS',
    }


}