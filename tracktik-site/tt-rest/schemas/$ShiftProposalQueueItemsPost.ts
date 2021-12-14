/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $ShiftProposalQueueItemsPost = {
    properties: {
        viaSms: {
    type: 'all-of',
    contains: [{
    type: 'Label',
}],
},
        viaCall: {
    type: 'all-of',
    contains: [{
    type: 'Label',
}],
},
        shift: {
    type: 'all-of',
    contains: [{
    type: 'ShiftsId',
}],
    isRequired: true,
},
        employee: {
    type: 'all-of',
    contains: [{
    type: 'EmployeesId',
}],
    isRequired: true,
},
        sentOn: {
    type: 'all-of',
    contains: [{
    type: 'TimeStampNumber',
}],
},
        sentAt: {
    type: 'all-of',
    contains: [{
    type: 'TimeStampNumber',
}],
},
        answeredOn: {
    type: 'all-of',
    contains: [{
    type: 'TimeStampNumber',
}],
},
        answeredAt: {
    type: 'all-of',
    contains: [{
    type: 'TimeStampNumber',
}],
},
        expiresOn: {
    type: 'all-of',
    contains: [{
    type: 'TimeStampNumber',
}],
},
        expiresAt: {
    type: 'all-of',
    contains: [{
    type: 'TimeStampNumber',
}],
},
        answer: {
    type: 'all-of',
    contains: [{
    type: 'Label',
}],
},
        status: {
    type: 'Enum',
},
        email: {
    type: 'all-of',
    contains: [{
    type: 'Label',
}],
},
        smsNumber: {
    type: 'all-of',
    contains: [{
    type: 'Label',
}],
},
        callNumber: {
    type: 'all-of',
    contains: [{
    type: 'Label',
}],
},
        premiumType: {
    type: 'Enum',
},
        premiumFixedAmount: {
    type: 'all-of',
    contains: [{
    type: 'Label',
}],
},
        premiumTopAmount: {
    type: 'all-of',
    contains: [{
    type: 'Label',
}],
},
        effectiveRate: {
    type: 'all-of',
    contains: [{
    type: 'Label',
}],
},
        distributionSequenceIndex: {
    type: 'all-of',
    contains: [{
    type: 'Label',
}],
},
        distributionType: {
    type: 'Enum',
},
    },
} as const;