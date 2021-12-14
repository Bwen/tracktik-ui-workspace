/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AddressesPut } from './AddressesPut';
import type { CSV } from './CSV';
import type { Date } from './Date';
import type { Email } from './Email';
import type { Label } from './Label';
import type { PhoneNumber } from './PhoneNumber';

export type EmployeesPut = {
    /**
     * Job Title
     */
    jobTitle?: Label;
    /**
     * Gender
     */
    gender?: EmployeesPut.gender;
    /**
     * Birthday
     */
    birthday?: Date;
    /**
     * Address
     */
    address?: AddressesPut;
    /**
     * Tags
     */
    tags?: CSV;
    /**
     * Only used when sending communications to the user
     */
    language?: EmployeesPut.language;
    /**
     * Custom ID
     */
    customId?: Label;
    /**
     * First name
     */
    firstName: Label;
    /**
     * Last name
     */
    lastName: Label;
    /**
     * Primary phone
     */
    primaryPhone?: PhoneNumber;
    /**
     * Secondary phone
     */
    secondaryPhone?: PhoneNumber;
    /**
     * UserName (Sign-in)
     */
    username?: string;
    /**
     * Email
     */
    email?: Email;
}

export namespace EmployeesPut {

    /**
     * Gender
     */
    export enum gender {
        M = 'M',
        F = 'F',
        B = 'B',
    }

    /**
     * Only used when sending communications to the user
     */
    export enum language {
        EN_US = 'EN_US',
        FR = 'FR',
        RO = 'RO',
        ES = 'ES',
        DE = 'DE',
        NL = 'NL',
        PT = 'PT',
        SV = 'SV',
        ZH_HANS = 'ZH-HANS',
        TH = 'TH',
    }


}