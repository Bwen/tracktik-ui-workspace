/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Boolean } from './Boolean';
import type { JSON } from './JSON';
import type { Label } from './Label';

export type Oauth2ClientsPost = {
    /**
     * Name
     */
    name: Label;
    /**
     * Description
     */
    description?: Label;
    /**
     * Active
     */
    active: Boolean;
    /**
     * Redirect Uris
     */
    redirectUris: JSON;
    /**
     * Active
     */
    grants?: JSON;
    /**
     * Scopes
     */
    scopes?: JSON;
    /**
     * Post Logout Redirect Uris
     */
    postLogoutRedirectUris?: JSON;
}