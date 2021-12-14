/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { JSON } from './JSON';
import type { Label } from './Label';

export type SystemSettingsPatch = {
    /**
     * Setting tag
     */
    tag?: SystemSettingsPatch.tag;
    /**
     * Setting value
     */
    value?: JSON;
    /**
     * When an instance serves more than one domain,
 * * you can create more than one setting of each type
     */
    domainFilter?: Label;
}

export namespace SystemSettingsPatch {

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