/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $TaskSiteInstructionsCollection = {
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
        id: {
    type: 'all-of',
    contains: [{
    type: 'Integer',
}],
},
        uri: {
    type: 'all-of',
    contains: [{
    type: 'Uri',
}],
},
        resourceType: {
    type: 'all-of',
    contains: [{
    type: 'Label',
}],
},
    },
} as const;