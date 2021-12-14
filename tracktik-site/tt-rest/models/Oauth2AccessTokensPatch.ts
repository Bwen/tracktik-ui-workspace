/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Boolean } from './Boolean';
import type { JSON } from './JSON';
import type { Label } from './Label';
import type { Oauth2ClientsId } from './Oauth2ClientsId';
import type { TimeStampDate } from './TimeStampDate';
import type { UsersId } from './UsersId';

export type Oauth2AccessTokensPatch = {
    /**
     * Identifier
     */
    identifier?: Label;
    /**
     * Expiry Date
     */
    expiresOn?: TimeStampDate;
    /**
     * OAuth2 Client
     */
    client?: Oauth2ClientsId;
    /**
     * Token Owner
     */
    user?: UsersId;
    /**
     * Scopes
     */
    scopes?: JSON;
    /**
     * Has the token been revoked?
     */
    isRevoked?: Boolean;
}