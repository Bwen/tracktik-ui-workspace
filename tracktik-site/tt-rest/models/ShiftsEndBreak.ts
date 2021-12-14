/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { BreakRuleConditionsId } from './BreakRuleConditionsId';

export type ShiftsEndBreak = {
    /**
     * The application or device being used to perform the action
     */
    endMethod: ShiftsEndBreak.endMethod;
    /**
     * Break Rule Condition
     */
    condition?: BreakRuleConditionsId;
    /**
     * Type of the exception
     */
    exceptionType?: ShiftsEndBreak.exceptionType;
    /**
     * Reason for the exception
     */
    reasonType: ShiftsEndBreak.reasonType;
}

export namespace ShiftsEndBreak {

    /**
     * The application or device being used to perform the action
     */
    export enum endMethod {
        DEVICE = 'DEVICE',
        ADMIN = 'ADMIN',
        PHONE = 'PHONE',
        BROWSER = 'BROWSER',
        BATCH = 'BATCH',
        KIOSK_APP = 'KIOSK_APP',
        SHIFT_APP = 'SHIFT_APP',
        API = 'API',
        GUARD_APP = 'GUARD_APP',
    }

    /**
     * Type of the exception
     */
    export enum exceptionType {
        INVOLUNTARY = 'INVOLUNTARY',
        VOLUNTARY = 'VOLUNTARY',
    }

    /**
     * Reason for the exception
     */
    export enum reasonType {
        SITE_ISSUE = 'SITE_ISSUE',
        SITE_NOT_RELATED = 'SITE_NOT_RELATED',
        OTHER_INVOLUNTARY = 'OTHER_INVOLUNTARY',
    }


}