/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AclRule } from './AclRule';
import type { DataViewCategoriesId } from './DataViewCategoriesId';
import type { EmployeesId } from './EmployeesId';
import type { Integer } from './Integer';
import type { JSON } from './JSON';
import type { Label } from './Label';
import type { TimeStampNumber } from './TimeStampNumber';
import type { Uri } from './Uri';

export type DataViewCategoriesCollection = {
    /**
     * Name
     */
    name?: Label;
    /**
     * Icon
     */
    iconClass?: Label;
    /**
     * Parent Category
     */
    parentCategory?: DataViewCategoriesId;
    /**
     * Owner
     */
    ownedBy?: EmployeesId;
    /**
     * User who wrote the note
     */
    archivedBy?: EmployeesId;
    /**
     * Access Control List
     */
    aclRule?: AclRule;
    /**
     * Options
     */
    options?: JSON;
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
     * Created Date Time
     */
    createdOn?: TimeStampNumber;
    /**
     * Updated By
     */
    updatedBy?: EmployeesId;
    /**
     * Updated Date Time
     */
    updatedOn?: TimeStampNumber;
}