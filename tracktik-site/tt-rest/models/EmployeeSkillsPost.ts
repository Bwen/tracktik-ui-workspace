/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { EmployeesId } from './EmployeesId';
import type { Label } from './Label';
import type { SkillsId } from './SkillsId';
import type { TimeStampNumber } from './TimeStampNumber';

export type EmployeeSkillsPost = {
    /**
     * This field was deprecated in favor of `skillDateLabelValue`
     */
    expiryDate?: TimeStampNumber;
    /**
     * This field was deprecated in favor of `skillDateLabelValue`
     */
    expiresOn?: TimeStampNumber;
    /**
     * Value for the `Skill` property `dateLabel`
     */
    skillDateLabelValue?: TimeStampNumber;
    /**
     * This field was deprecated in favor of `skillLabel1Value`
     */
    label1?: Label;
    /**
     * Value for the `Skill` property `label1`
     */
    skillLabel1Value?: Label;
    /**
     * This field was deprecated in favor of `skillLabel2Value`
     */
    label2?: Label;
    /**
     * Value for the `Skill` property `label2`
     */
    skillLabel2Value?: Label;
    /**
     * This field was deprecated
     */
    label3?: Label;
    /**
     * Comments
     */
    comments?: Label;
    /**
     * Skill
     */
    skill: SkillsId;
    /**
     * Employee
     */
    employee: EmployeesId;
}