/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { EmployeesId } from './EmployeesId';
import type { EmployeesItem } from './EmployeesItem';
import type { Integer } from './Integer';
import type { JSON } from './JSON';
import type { Label } from './Label';
import type { SkillsId } from './SkillsId';
import type { SkillsItem } from './SkillsItem';
import type { TimeStampDate } from './TimeStampDate';
import type { TimeStampNumber } from './TimeStampNumber';
import type { Uri } from './Uri';

export type EmployeeSkillsItem = {
    /**
     * Value of the Skill `dateLabel` field.
     */
    skillDateLabel?: Label;
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
     * Value of the Skill `label1` field.
     */
    skillLabel1?: Label;
    /**
     * This field was deprecated in favor of `skillLabel1Value`: *On demand*
     */
    label1?: Label;
    /**
     * Value for the `Skill` property `label1`
     */
    skillLabel1Value?: Label;
    /**
     * Value of the Skill `label2` field.
     */
    skillLabel2?: Label;
    /**
     * This field was deprecated in favor of `skillLabel2Value`: *On demand*
     */
    label2?: Label;
    /**
     * Value for the `Skill` property `label2`
     */
    skillLabel2Value?: Label;
    /**
     * This field was deprecated: *On demand*
     */
    label3?: Label;
    /**
     * Object of custom fields like {'label1': {'label': 'Gun permit', 'value': '0222', 'type':'string'}, ...}
     */
    skillCustomFields?: JSON;
    /**
     * Status of the `skill` for the `employee`
     */
    status?: EmployeeSkillsItem.status;
    /**
     * Comments
     */
    comments?: Label;
    /**
     * Skill: ID of the resource by default OR *on demand* JSON object of type [Skills](#operation/getOneSkills)
     */
    skill?: (SkillsId | SkillsItem);
    /**
     * Employee: ID of the resource by default OR *on demand* JSON object of type [Employees](#operation/getOneEmployees)
     */
    employee?: (EmployeesId | EmployeesItem);
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

export namespace EmployeeSkillsItem {

    /**
     * Status of the `skill` for the `employee`
     */
    export enum status {
        ACTIVE = 'ACTIVE',
        EXPIRED = 'EXPIRED',
        EXPIRING_SOON = 'EXPIRING_SOON',
    }


}