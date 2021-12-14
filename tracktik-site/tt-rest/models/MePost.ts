/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AddressesPost } from './AddressesPost';
import type { CSV } from './CSV';
import type { Date } from './Date';
import type { Email } from './Email';
import type { Label } from './Label';
import type { Password } from './Password';
import type { PhoneNumber } from './PhoneNumber';
import type { RegionsId } from './RegionsId';

export type MePost = {
    /**
     * Job Title
     */
    jobTitle?: Label;
    /**
     * Region
     */
    region?: RegionsId;
    /**
     * Only can be set during the creation
     */
    password?: Password;
    /**
     * Gender
     */
    gender?: MePost.gender;
    /**
     * Birthday
     */
    birthday?: Date;
    /**
     * Address
     */
    address?: AddressesPost;
    /**
     * Tags
     */
    tags?: CSV;
    /**
     * Only used when sending communications to the user
     */
    language?: MePost.language;
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

export namespace MePost {

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