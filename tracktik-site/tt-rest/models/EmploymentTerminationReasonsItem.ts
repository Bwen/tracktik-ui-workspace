/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Boolean } from './Boolean';
import type { EmployeesId } from './EmployeesId';
import type { EmployeesItem } from './EmployeesItem';
import type { EmploymentProfilesItem } from './EmploymentProfilesItem';
import type { Integer } from './Integer';
import type { Label } from './Label';
import type { TimeStampDate } from './TimeStampDate';
import type { Uri } from './Uri';

export type EmploymentTerminationReasonsItem = {
    /**
     * The Termination Reason Name
     */
    name?: Label;
    /**
     * Is Voluntary
     */
    isVoluntary?: Boolean;
    /**
     * Comment Required
     */
    commentRequired?: Boolean;
    /**
     * Employment profiles with this termination reason: *On demand*. List of JSON objects of type [EmploymentProfiles](#operation/getOneEmploymentProfiles)
     */
    employmentProfiles?: Array<EmploymentProfilesItem>;
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