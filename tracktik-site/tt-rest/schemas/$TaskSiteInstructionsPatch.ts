/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $TaskSiteInstructionsPatch = {
    properties: {
        taskType: {
    type: 'all-of',
    contains: [{
    type: 'TaskTypesId',
}],
},
        site: {
    type: 'all-of',
    contains: [{
    type: 'AccountsId',
}],
},
        jobInstructions: {
    type: 'all-of',
    contains: [{
    type: 'TextArea',
}],
},
        generalInstructions: {
    type: 'string',
},
        checkPointTour: {
    type: 'all-of',
    contains: [{
    type: 'CheckpointToursId',
}],
},
        priceTier: {
    type: 'all-of',
    contains: [{
    type: 'PriceTiersId',
}],
},
        dispatchSla: {
    type: 'all-of',
    contains: [{
    type: 'DispatchSlasId',
}],
},
        generalDispatchSla: {
    type: 'string',
},
    },
} as const;