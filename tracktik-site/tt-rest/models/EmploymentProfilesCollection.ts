/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Boolean } from './Boolean';
import type { CurrencyRate } from './CurrencyRate';
import type { Date } from './Date';
import type { Decimal } from './Decimal';
import type { EmployeeClassesId } from './EmployeeClassesId';
import type { EmployeesId } from './EmployeesId';
import type { EmploymentTerminationReasonsId } from './EmploymentTerminationReasonsId';
import type { Integer } from './Integer';
import type { Label } from './Label';
import type { OvertimeRulesId } from './OvertimeRulesId';
import type { PayrollSchedulesId } from './PayrollSchedulesId';
import type { Uri } from './Uri';

export type EmploymentProfilesCollection = {
    /**
     * Employee
     */
    employee?: EmployeesId;
    /**
     * Employee Type
     */
    employeeType?: EmploymentProfilesCollection.employeeType;
    /**
     * Employee class
     */
    employeeClass?: EmployeeClassesId;
    /**
     * Employment Date
     */
    employmentDate?: Date;
    /**
     * Duration of Employment (Days)
     */
    seniority?: Decimal;
    /**
     * Pay Rate Type
     */
    payRateType?: EmploymentProfilesCollection.payRateType;
    /**
     * Pay Rate Type
     */
    hourlyRateType?: EmploymentProfilesCollection.hourlyRateType;
    /**
     * Default Pay Rate
     */
    hourlyRate?: CurrencyRate;
    /**
     * Yearly Salary
     */
    yearlyPayRate?: CurrencyRate;
    /**
     * Overtime Exempt
     */
    overtimeExempt?: Boolean;
    /**
     * Leave blank to use the default region schedule
     */
    payrollSchedule?: PayrollSchedulesId;
    /**
     * Grievance
     */
    hasGrievance?: Boolean;
    /**
     * Target hours per week
     */
    weeklyHoursTarget?: Integer;
    /**
     * Maximum hours per week
     */
    weeklyHoursMaximum?: Integer;
    /**
     * Minimum hours per week
     */
    weeklyHoursMinimum?: Integer;
    /**
     * Overtime Rule
     */
    overtimeRule?: OvertimeRulesId;
    /**
     * Termination Date
     */
    terminationDate?: Date;
    /**
     * Employment Termination Reason
     */
    terminationReason?: EmploymentTerminationReasonsId;
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

export namespace EmploymentProfilesCollection {

    /**
     * Employee Type
     */
    export enum employeeType {
        EMPLOYEE = 'EMPLOYEE',
        CONTRACTOR = 'CONTRACTOR',
    }

    /**
     * Pay Rate Type
     */
    export enum payRateType {
        HOURLY = 'HOURLY',
        SALARY = 'SALARY',
    }

    /**
     * Pay Rate Type
     */
    export enum hourlyRateType {
        DEFAULT = 'DEFAULT',
        EMPLOYEE_GROUP = 'EMPLOYEE_GROUP',
        EMPLOYEE_SPECIFIC = 'EMPLOYEE_SPECIFIC',
    }


}