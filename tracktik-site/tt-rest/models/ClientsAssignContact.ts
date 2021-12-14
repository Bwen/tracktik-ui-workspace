/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Boolean } from './Boolean';
import type { Integer } from './Integer';

export type ClientsAssignContact = {
    /**
     * Contact to assign
     */
    contact?: Integer;
    /**
     * Use the contact's address as billing address
     */
    useAsBillingAddress: Boolean;
}