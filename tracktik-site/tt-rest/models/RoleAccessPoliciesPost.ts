/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { RegionsId } from './RegionsId';
import type { RolesId } from './RolesId';

export type RoleAccessPoliciesPost = {
    /**
     * Authorization
     */
    authorization?: RoleAccessPoliciesPost.authorization;
    /**
     * Region
     */
    region?: RegionsId;
    /**
     * Role
     */
    role: RolesId;
    /**
     * Scenario Code
     */
    scenarioCode?: RoleAccessPoliciesPost.scenarioCode;
}

export namespace RoleAccessPoliciesPost {

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