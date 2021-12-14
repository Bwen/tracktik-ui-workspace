/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Boolean } from './Boolean';
import type { TextArea } from './TextArea';

export type DispatchTasksAddNote = {
    /**
     * The note's text content
     */
    note: TextArea;
    /**
     * If true, the note will shown on invoices and billing reports
     */
    showOnInvoiceAndBillingReport?: Boolean;
}