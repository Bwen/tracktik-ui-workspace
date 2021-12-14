/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Boolean } from './Boolean';
import type { CurrencyRate } from './CurrencyRate';
import type { Date } from './Date';
import type { EmployeeClassesId } from './EmployeeClassesId';
import type { EmployeesId } from './EmployeesId';
import type { Integer } from './Integer';
import type { OvertimeRulesId } from './OvertimeRulesId';
import type { PayrollSchedulesId } from './PayrollSchedulesId';

export type EmploymentProfilesPut = {
    /**
     * Employee
     */
    employee: EmployeesId;
    /**
     * Employee Type
     */
    employeeType: EmploymentProfilesPut.employeeType;
    /**
     * Employee class
     */
    employeeClass?: EmployeeClassesId;
    /**
     * Employment Date
     */
    employmentDate: Date;
    /**
     * Pay Rate Type
     */
    payRateType: EmploymentProfilesPut.payRateType;
    /**
     * Pay Rate Type
     */
    hourlyRateType: EmploymentProfilesPut.hourlyRateType;
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
}

export namespace EmploymentProfilesPut {

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