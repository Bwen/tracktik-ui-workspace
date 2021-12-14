/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AccountsId } from './AccountsId';
import type { Boolean } from './Boolean';
import type { LoneWorkerPhonesId } from './LoneWorkerPhonesId';
import type { Minutes } from './Minutes';

export type LoneWorkerTimeKeepingSettingsPut = {
    /**
     * Account
     */
    account?: AccountsId;
    /**
     * Use this option to enable lone worker check-ins.
     */
    checkInEnabled?: Boolean;
    /**
     * Restricts check ins to specific phone numbers. When set to off, guards can check in from any phone number
     */
    restrictPhoneNumber?: Boolean;
    /**
     * Number of minutes after which a check in is considered late.
     */
    lateAfterMinutes?: Minutes;
    /**
     * Have the guards receive a call at check in time.
     */
    automaticCheckInCall?: Boolean;
    /**
     * Phone numbers that the guards should use to check-in.
     */
    loneWorkerPhones?: Array<LoneWorkerPhonesId>;
}