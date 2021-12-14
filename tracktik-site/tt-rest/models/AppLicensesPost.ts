/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AccountsId } from './AccountsId';
import type { EmployeesId } from './EmployeesId';
import type { PositionsId } from './PositionsId';
import type { TimeStampNumber } from './TimeStampNumber';

export type AppLicensesPost = {
    /**
     * Name
     */
    name?: string;
    /**
     * Number
     */
    number?: string;
    /**
     * Account
     */
    account: AccountsId;
    /**
     * Position
     */
    position: PositionsId;
    /**
     * Current User
     */
    user?: EmployeesId;
    /**
     * Start Date & Time
     */
    startedOn?: TimeStampNumber;
    /**
     * This field was deprecated in favor of `startedOn`
     */
    startTime?: TimeStampNumber;
    /**
     * App
     */
    applicationId: AppLicensesPost.applicationId;
    /**
     * Installation Code
     */
    installationCode?: string;
}

export namespace AppLicensesPost {

    /**
     * App
     */
    export enum applicationId {
        GUARD_TOUR = 'GUARD_TOUR',
        PATROL_BROWSER = 'PATROL_BROWSER',
        CLOUD_STORAGE = 'CLOUD_STORAGE',
        DISPATCH_PRO = 'DISPATCH_PRO',
        KIOSK = 'KIOSK',
    }


}