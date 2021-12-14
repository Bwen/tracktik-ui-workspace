/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AccountsId } from './AccountsId';
import type { EmployeesId } from './EmployeesId';
import type { PositionsId } from './PositionsId';
import type { TimeStampNumber } from './TimeStampNumber';

export type MobileDevicesPost = {
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
     * Installation Code
     */
    installationCode?: string;
}