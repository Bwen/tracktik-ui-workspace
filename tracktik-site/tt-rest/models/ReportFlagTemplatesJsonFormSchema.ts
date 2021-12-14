/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Display ReportTemplate as a JSON Form Schema
 */
export type ReportFlagTemplatesJsonFormSchema = {
    /**
     * Form Schema
     */
    schema?: {
/**
 * Title
 */
title?: string;
/**
 * Type
 */
type?: string;
/**
 * Required properties
 */
required?: string;
/**
 * Properties
 */
properties?: any;
/**
 * Properties definitions
 */
definitions?: any;
};
    /**
     * From Options
     */
    formOptions?: any;
    /**
     * Form values
     */
    values?: any;
    /**
     * Callback
     */
    callback?: {
/**
 * Method
 */
method?: string;
/**
 * URL
 */
url?: string;
};
}