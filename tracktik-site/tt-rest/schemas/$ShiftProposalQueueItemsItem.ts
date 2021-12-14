/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $ShiftProposalQueueItemsItem = {
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
    type: 'one-of',
    contains: [{
    type: 'ShiftsId',
}, {
    type: 'ShiftsItem',
}],
},
        employee: {
    type: 'one-of',
    contains: [{
    type: 'EmployeesId',
}, {
    type: 'EmployeesItem',
}],
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
        createdBy: {
    type: 'one-of',
    contains: [{
    type: 'EmployeesId',
}, {
    type: 'EmployeesItem',
}],
},
        createdOn: {
    type: 'all-of',
    contains: [{
    type: 'TimeStampNumber',
}],
},
        updatedBy: {
    type: 'one-of',
    contains: [{
    type: 'EmployeesId',
}, {
    type: 'EmployeesItem',
}],
},
        updatedOn: {
    type: 'all-of',
    contains: [{
    type: 'TimeStampNumber',
}],
},
    },
} as const;