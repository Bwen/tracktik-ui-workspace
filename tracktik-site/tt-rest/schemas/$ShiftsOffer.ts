/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $ShiftsOffer = {
    properties: {
        users: {
    type: 'all-of',
    contains: [{
    type: 'JSON',
}],
    isRequired: true,
},
        method: {
    type: 'Enum',
},
        strategy: {
    type: 'Enum',
    isRequired: true,
},
        sequenceInterval: {
    type: 'number',
    isRequired: true,
},
        premium: {
    type: 'Enum',
},
        premiumFixedAmount: {
    type: 'number',
    isRequired: true,
},
        premiumTopAmount: {
    type: 'number',
    isRequired: true,
},
    },
} as const;