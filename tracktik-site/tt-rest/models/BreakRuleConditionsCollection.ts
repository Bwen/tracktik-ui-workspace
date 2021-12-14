/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { BreakRulesId } from './BreakRulesId';
import type { EmployeesId } from './EmployeesId';
import type { Integer } from './Integer';
import type { Label } from './Label';
import type { Minutes } from './Minutes';
import type { TimeStampDate } from './TimeStampDate';
import type { Uri } from './Uri';

export type BreakRuleConditionsCollection = {
    /**
     * Break Rule
     */
    breakRule?: BreakRulesId;
    /**
     * Type
     */
    type?: BreakRuleConditionsCollection.type;
    /**
     * Duration
     */
    duration?: Minutes;
    /**
     * Offset Type
     */
    offsetType?: BreakRuleConditionsCollection.offsetType;
    /**
     * Offset start
     */
    offsetStart?: Minutes;
    /**
     * Offset end
     */
    offsetEnd?: Minutes;
    /**
     * Has Reminder
     */
    hasReminder?: BreakRuleConditionsCollection.hasReminder;
    /**
     * Reminder
     */
    reminderMinutes?: Minutes;
    /**
     * Status
     */
    status?: BreakRuleConditionsCollection.status;
    /**
     * Requires Acknowledgment
     */
    requiresAcknowledgement?: BreakRuleConditionsCollection.requiresAcknowledgement;
    /**
     * System ID
     */
    id?: Integer;
    /**
     * Object URI
     */
    uri?: Uri;
    /**
     * Resource Type
     */
    resourceType?: Label;
    /**
     * Created By
     */
    createdBy?: EmployeesId;
    /**
     * Created On
     */
    createdOn?: TimeStampDate;
    /**
     * Last Updated By
     */
    updatedBy?: EmployeesId;
    /**
     * Last Updated On
     */
    updatedOn?: TimeStampDate;
}

export namespace BreakRuleConditionsCollection {

    /**
     * Type
     */
    export enum type {
        REST = 'REST',
        MEAL = 'MEAL',
    }

    /**
     * Offset Type
     */
    export enum offsetType {
        SPECIFIC_TIME = 'SPECIFIC_TIME',
        ANYTIME = 'ANYTIME',
    }

    /**
     * Has Reminder
     */
    export enum hasReminder {
        NO = 'NO',
        YES = 'YES',
    }

    /**
     * Status
     */
    export enum status {
        INACTIVE = 'INACTIVE',
        ACTIVE = 'ACTIVE',
    }

    /**
     * Requires Acknowledgment
     */
    export enum requiresAcknowledgement {
        NO = 'NO',
        YES = 'YES',
    }


}