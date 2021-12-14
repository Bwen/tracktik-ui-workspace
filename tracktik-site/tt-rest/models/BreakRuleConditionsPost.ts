/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { BreakRulesId } from './BreakRulesId';
import type { Minutes } from './Minutes';

export type BreakRuleConditionsPost = {
    /**
     * Break Rule
     */
    breakRule?: BreakRulesId;
    /**
     * Type
     */
    type?: BreakRuleConditionsPost.type;
    /**
     * Duration
     */
    duration?: Minutes;
    /**
     * Offset Type
     */
    offsetType?: BreakRuleConditionsPost.offsetType;
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
    hasReminder?: BreakRuleConditionsPost.hasReminder;
    /**
     * Reminder
     */
    reminderMinutes?: Minutes;
    /**
     * Status
     */
    status?: BreakRuleConditionsPost.status;
    /**
     * Requires Acknowledgment
     */
    requiresAcknowledgement: BreakRuleConditionsPost.requiresAcknowledgement;
}

export namespace BreakRuleConditionsPost {

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