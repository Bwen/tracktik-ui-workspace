/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AddressesPut } from './AddressesPut';
import type { ClientsId } from './ClientsId';
import type { CSV } from './CSV';
import type { Email } from './Email';
import type { EmployeesPut } from './EmployeesPut';
import type { GeoFencesId } from './GeoFencesId';
import type { Label } from './Label';
import type { PhoneNumber } from './PhoneNumber';
import type { Uri } from './Uri';

export type ClientsPut = {
    /**
     * Company Name
     */
    company: Label;
    /**
     * UID
     */
    customId?: Label;
    /**
     * Parent Client
     */
    parentClient: ClientsId;
    /**
     * First Name
     */
    firstName?: Label;
    /**
     * Last Name
     */
    lastName?: Label;
    /**
     * Job Title
     */
    jobTitle?: Label;
    /**
     * Primary Phone
     */
    primaryPhone?: PhoneNumber;
    /**
     * Secondary Phone
     */
    secondaryPhone?: PhoneNumber;
    /**
     * Type of Record
     */
    type: ClientsPut.type;
    /**
     * Address
     */
    address?: AddressesPut;
    /**
     * Email
     */
    email?: Email;
    /**
     * Fax number
     */
    faxNumber?: PhoneNumber;
    /**
     * Web site URL
     */
    website?: Uri;
    /**
     * Tags
     */
    tags?: CSV;
    /**
     * Sales Representative
     */
    salesRepresentative?: EmployeesPut;
    /**
     * Account Representative
     */
    accountRepresentative?: EmployeesPut;
    /**
     * Allowed Areas
     */
    allowedAreas?: Array<GeoFencesId>;
    /**
     * Restricted Areas
     */
    restrictedAreas?: Array<GeoFencesId>;
}

export namespace ClientsPut {

    /**
     * Type of Record
     */
    export enum type {
        CLIENT = 'CLIENT',
        SERVICE_LOCATION = 'SERVICE_LOCATION',
        MULTI_LOCATION_CLIENT = 'MULTI_LOCATION_CLIENT',
    }


}