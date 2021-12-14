/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { EmployeesId } from './EmployeesId';
import type { EmployeesItem } from './EmployeesItem';
import type { Integer } from './Integer';
import type { JSON } from './JSON';
import type { Label } from './Label';
import type { TimeStampNumber } from './TimeStampNumber';
import type { Uri } from './Uri';

export type SystemSettingsItem = {
    /**
     * Setting tag
     */
    tag?: SystemSettingsItem.tag;
    /**
     * Setting value
     */
    value?: JSON;
    /**
     * When an instance serves more than one domain,
 * * you can create more than one setting of each type: *On demand*
     */
    domainFilter?: Label;
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
     * Created Date Time: *On demand*
     */
    createdOn?: TimeStampNumber;
    /**
     * Updated By: ID of the resource by default OR *on demand* JSON object of type [Employees](#operation/getOneEmployees)
     */
    updatedBy?: (EmployeesId | EmployeesItem);
    /**
     * Updated Date Time: *On demand*
     */
    updatedOn?: TimeStampNumber;
}

export namespace SystemSettingsItem {

    /**
     * Setting tag
     */
    export enum tag {
        APPLICATION_LOGO = 'APPLICATION-LOGO',
        HEADQUARTER = 'HEADQUARTER',
        GLOBAL_VOIP = 'GLOBAL-VOIP',
        HELP_BUTTON = 'HELP-BUTTON',
        LAYOUT_THEME = 'LAYOUT-THEME',
        MODULES = 'MODULES',
        SIGN_IN_SCREEN = 'SIGN-IN-SCREEN',
        OPENID = 'OPENID',
        FORCE_SITE_UID = 'FORCE-SITE-UID',
        GENERIC_LOGIN = 'GENERIC-LOGIN',
        EMAIL_NOTIFIER_FEATURE_FLAG = 'EMAIL-NOTIFIER-FEATURE-FLAG',
    }


}