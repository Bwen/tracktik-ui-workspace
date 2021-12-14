/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { EmployeesId } from './EmployeesId';
import type { Integer } from './Integer';
import type { JSON } from './JSON';
import type { Label } from './Label';
import type { TimeStampNumber } from './TimeStampNumber';
import type { Uri } from './Uri';

export type SystemSettingsCollection = {
    /**
     * Setting tag
     */
    tag?: SystemSettingsCollection.tag;
    /**
     * Setting value
     */
    value?: JSON;
    /**
     * When an instance serves more than one domain,
 * * you can create more than one setting of each type
     */
    domainFilter?: Label;
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

export namespace SystemSettingsCollection {

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