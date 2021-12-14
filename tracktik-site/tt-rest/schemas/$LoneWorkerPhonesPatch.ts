/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $LoneWorkerPhonesPatch = {
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
},
        account: {
    type: 'all-of',
    contains: [{
    type: 'AccountsId',
}],
},
    },
} as const;