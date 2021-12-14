/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { BreakRulesId } from './BreakRulesId';
import type { Minutes } from './Minutes';

export type BreakRuleConditionsPut = {
    /**
     * Break Rule
     */
    breakRule?: BreakRulesId;
    /**
     * Type
     */
    type?: BreakRuleConditionsPut.type;
    /**
     * Duration
     */
    duration?: Minutes;
    /**
     * Offset Type
     */
    offsetType?: BreakRuleConditionsPut.offsetType;
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
    hasReminder?: BreakRuleConditionsPut.hasReminder;
    /**
     * Reminder
     */
    reminderMinutes?: Minutes;
    /**
     * Status
     */
    status?: BreakRuleConditionsPut.status;
    /**
     * Requires Acknowledgment
     */
    requiresAcknowledgement: BreakRuleConditionsPut.requiresAcknowledgement;
}

export namespace BreakRuleConditionsPut {

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