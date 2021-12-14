/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Password } from './Password';

export type MeChangePassword = {
    /**
     * New Password
     */
    newPassword: Password;
    /**
     * Old Password
     */
    oldPassword: Password;
    /**
     * Secret
     */
    secret: Password;
}