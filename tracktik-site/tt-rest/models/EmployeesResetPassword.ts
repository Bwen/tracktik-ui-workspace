/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type EmployeesResetPassword = {
    /**
     * Method
     */
    method: EmployeesResetPassword.method;
}

export namespace EmployeesResetPassword {

    /**
     * Method
     */
    export enum method {
        BROWSER = 'BROWSER',
        SHIFT_APP = 'SHIFT_APP',
        GUARD_APP = 'GUARD_APP',
    }


}