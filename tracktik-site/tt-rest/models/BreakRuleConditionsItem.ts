/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { BreakRulesId } from './BreakRulesId';
import type { BreakRulesItem } from './BreakRulesItem';
import type { EmployeesId } from './EmployeesId';
import type { EmployeesItem } from './EmployeesItem';
import type { Integer } from './Integer';
import type { Label } from './Label';
import type { Minutes } from './Minutes';
import type { TimeStampDate } from './TimeStampDate';
import type { Uri } from './Uri';

export type BreakRuleConditionsItem = {
    /**
     * Break Rule: ID of the resource by default OR *on demand* JSON object of type [BreakRules](#operation/getOneBreakRules)
     */
    breakRule?: (BreakRulesId | BreakRulesItem);
    /**
     * Type
     */
    type?: BreakRuleConditionsItem.type;
    /**
     * Duration
     */
    duration?: Minutes;
    /**
     * Offset Type
     */
    offsetType?: BreakRuleConditionsItem.offsetType;
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
    hasReminder?: BreakRuleConditionsItem.hasReminder;
    /**
     * Reminder
     */
    reminderMinutes?: Minutes;
    /**
     * Status
     */
    status?: BreakRuleConditionsItem.status;
    /**
     * Requires Acknowledgment
     */
    requiresAcknowledgement?: BreakRuleConditionsItem.requiresAcknowledgement;
    /**
     * System ID
     */
    id?: Integer;
    /**
     * Object URI: *On demand*
     */
    uri?: Uri;
    /**
     * Resource Type: *On demand*
     */
    resourceType?: Label;
    /**
     * Created By: ID of the resource by default OR *on demand* JSON object of type [Employees](#operation/getOneEmployees)
     */
    createdBy?: (EmployeesId | EmployeesItem);
    /**
     * Created On: *On demand*
     */
    createdOn?: TimeStampDate;
    /**
     * Last Updated By: ID of the resource by default OR *on demand* JSON object of type [Employees](#operation/getOneEmployees)
     */
    updatedBy?: (EmployeesId | EmployeesItem);
    /**
     * Last Updated On: *On demand*
     */
    updatedOn?: TimeStampDate;
}

export namespace BreakRuleConditionsItem {

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