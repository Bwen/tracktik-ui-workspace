/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { DataViewCategoriesId } from './DataViewCategoriesId';
import type { JSON } from './JSON';
import type { Label } from './Label';

export type DataViewCategoriesPut = {
    /**
     * Name
     */
    name: Label;
    /**
     * Icon
     */
    iconClass?: Label;
    /**
     * Parent Category
     */
    parentCategory?: DataViewCategoriesId;
    /**
     * Options
     */
    options?: JSON;
}