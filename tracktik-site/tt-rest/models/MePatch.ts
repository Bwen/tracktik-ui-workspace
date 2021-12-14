/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AddressesPatch } from './AddressesPatch';
import type { CSV } from './CSV';
import type { Date } from './Date';
import type { Email } from './Email';
import type { Label } from './Label';
import type { PhoneNumber } from './PhoneNumber';

export type MePatch = {
    /**
     * Job Title
     */
    jobTitle?: Label;
    /**
     * Gender
     */
    gender?: MePatch.gender;
    /**
     * Birthday
     */
    birthday?: Date;
    /**
     * Address
     */
    address?: AddressesPatch;
    /**
     * Tags
     */
    tags?: CSV;
    /**
     * Only used when sending communications to the user
     */
    language?: MePatch.language;
    /**
     * Custom ID
     */
    customId?: Label;
    /**
     * First name
     */
    firstName?: Label;
    /**
     * Last name
     */
    lastName?: Label;
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

export namespace MePatch {

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