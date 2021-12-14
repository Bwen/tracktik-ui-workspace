/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $TaskSiteInstructionsPut = {
    properties: {
        taskType: {
    type: 'all-of',
    contains: [{
    type: 'TaskTypesId',
}],
    isRequired: true,
},
        site: {
    type: 'all-of',
    contains: [{
    type: 'AccountsId',
}],
    isRequired: true,
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