/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $TaskSiteInstructionsItem = {
    properties: {
        taskType: {
    type: 'one-of',
    contains: [{
    type: 'TaskTypesId',
}, {
    type: 'TaskTypesItem',
}],
},
        site: {
    type: 'one-of',
    contains: [{
    type: 'AccountsId',
}, {
    type: 'AccountsItem',
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
    type: 'one-of',
    contains: [{
    type: 'CheckpointToursId',
}, {
    type: 'CheckpointToursItem',
}],
},
        priceTier: {
    type: 'one-of',
    contains: [{
    type: 'PriceTiersId',
}, {
    type: 'PriceTiersItem',
}],
},
        dispatchSla: {
    type: 'one-of',
    contains: [{
    type: 'DispatchSlasId',
}, {
    type: 'DispatchSlasItem',
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