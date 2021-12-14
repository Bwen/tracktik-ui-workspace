/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Boolean } from './Boolean';
import type { Label } from './Label';
import type { Oauth2RefreshTokensId } from './Oauth2RefreshTokensId';
import type { TimeStampDate } from './TimeStampDate';

export type Oauth2RefreshTokensPut = {
    /**
     * Identifier
     */
    identifier: Label;
    /**
     * Expiry Date
     */
    expiresOn: TimeStampDate;
    /**
     * OAuth2 Access Token
     */
    accessToken: Oauth2RefreshTokensId;
    /**
     * Has the token been revoked?
     */
    isRevoked?: Boolean;
}