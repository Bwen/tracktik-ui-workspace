/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $RevenueProcessorOccurrencesPost = {
    properties: {
        startedOn: {
    type: 'all-of',
    contains: [{
    type: 'TimeStampDate',
}],
    isRequired: true,
},
        endedOn: {
    type: 'all-of',
    contains: [{
    type: 'TimeStampDate',
}],
    isRequired: true,
},
        site: {
    type: 'all-of',
    contains: [{
    type: 'ClientsId',
}],
},
        triggeredFrom: {
    type: 'Enum',
    isRequired: true,
},
    },
} as const;