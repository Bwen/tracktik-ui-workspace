/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $HolidayGroupsItem = {
    properties: {
        region: {
    type: 'one-of',
    contains: [{
    type: 'RegionsId',
}, {
    type: 'RegionsItem',
}],
},
        name: {
    type: 'all-of',
    contains: [{
    type: 'Label',
}],
},
        summary: {
    type: 'array',
    contains: {
        type: 'HolidayDateToClassesItem',
    },
},
        holidayDateRelations: {
    type: 'array',
    contains: {
        type: 'HolidayGroupDateRelationsItem',
    },
},
        isDefault: {
    type: 'all-of',
    contains: [{
    type: 'Boolean',
}],
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