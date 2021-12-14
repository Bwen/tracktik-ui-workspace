/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Integer } from './Integer';
import type { Label } from './Label';
import type { RegionsId } from './RegionsId';
import type { RolesId } from './RolesId';
import type { Uri } from './Uri';

export type RoleAccessPoliciesCollection = {
    /**
     * Authorization
     */
    authorization?: RoleAccessPoliciesCollection.authorization;
    /**
     * Region
     */
    region?: RegionsId;
    /**
     * Role
     */
    role?: RolesId;
    /**
     * Scenario Code
     */
    scenarioCode?: RoleAccessPoliciesCollection.scenarioCode;
    /**
     * System ID
     */
    id?: Integer;
    /**
     * Object URI
     */
    uri?: Uri;
    /**
     * Resource Type
     */
    resourceType?: Label;
}

export namespace RoleAccessPoliciesCollection {

    /**
     * Authorization
     */
    export enum authorization {
        BLOCK_ALL_TIME = 'BLOCK_ALL_TIME',
        BLOCK_UNLESS_WHITELISTED = 'BLOCK_UNLESS_WHITELISTED',
        GRANT = 'GRANT',
    }

    /**
     * Scenario Code
     */
    export enum scenarioCode {
        LOGIN = 'LOGIN',
        ONSITE_ACCESS = 'ONSITE_ACCESS',
        KIOSK_ACCESS = 'KIOSK_ACCESS',
        API = 'API',
    }


}