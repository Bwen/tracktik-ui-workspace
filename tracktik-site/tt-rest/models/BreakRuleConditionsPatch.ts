/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { BreakRulesId } from './BreakRulesId';
import type { Minutes } from './Minutes';

export type BreakRuleConditionsPatch = {
    /**
     * Break Rule
     */
    breakRule?: BreakRulesId;
    /**
     * Type
     */
    type?: BreakRuleConditionsPatch.type;
    /**
     * Duration
     */
    duration?: Minutes;
    /**
     * Offset Type
     */
    offsetType?: BreakRuleConditionsPatch.offsetType;
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
    hasReminder?: BreakRuleConditionsPatch.hasReminder;
    /**
     * Reminder
     */
    reminderMinutes?: Minutes;
    /**
     * Status
     */
    status?: BreakRuleConditionsPatch.status;
    /**
     * Requires Acknowledgment
     */
    requiresAcknowledgement?: BreakRuleConditionsPatch.requiresAcknowledgement;
}

export namespace BreakRuleConditionsPatch {

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