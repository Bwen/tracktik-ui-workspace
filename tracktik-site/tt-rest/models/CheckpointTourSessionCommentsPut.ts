/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CheckpointTourSessionsId } from './CheckpointTourSessionsId';
import type { FilesId } from './FilesId';
import type { Label } from './Label';

export type CheckpointTourSessionCommentsPut = {
    /**
     * Tour Session
     */
    session: CheckpointTourSessionsId;
    /**
     * Content
     */
    content: Label;
    /**
     * Pictures
     */
    pictures?: Array<FilesId>;
}