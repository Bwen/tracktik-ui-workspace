/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $LoneWorkerPhonesPost = {
    properties: {
        description: {
    type: 'all-of',
    contains: [{
    type: 'Label',
}],
},
        phone: {
    type: 'all-of',
    contains: [{
    type: 'Label',
}],
    isRequired: true,
},
        account: {
    type: 'all-of',
    contains: [{
    type: 'AccountsId',
}],
    isRequired: true,
},
    },
} as const;