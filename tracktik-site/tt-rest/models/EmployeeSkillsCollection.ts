/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { EmployeesId } from './EmployeesId';
import type { Integer } from './Integer';
import type { JSON } from './JSON';
import type { Label } from './Label';
import type { SkillsId } from './SkillsId';
import type { TimeStampDate } from './TimeStampDate';
import type { TimeStampNumber } from './TimeStampNumber';
import type { Uri } from './Uri';

export type EmployeeSkillsCollection = {
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
     * This field was deprecated in favor of `skillLabel1Value`
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
     * Object of custom fields like {'label1': {'label': 'Gun permit', 'value': '0222', 'type':'string'}, ...}
     */
    skillCustomFields?: JSON;
    /**
     * Status of the `skill` for the `employee`
     */
    status?: EmployeeSkillsCollection.status;
    /**
     * Comments
     */
    comments?: Label;
    /**
     * Skill
     */
    skill?: SkillsId;
    /**
     * Employee
     */
    employee?: EmployeesId;
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

export namespace EmployeeSkillsCollection {

    /**
     * Status of the `skill` for the `employee`
     */
    export enum status {
        ACTIVE = 'ACTIVE',
        EXPIRED = 'EXPIRED',
        EXPIRING_SOON = 'EXPIRING_SOON',
    }


}