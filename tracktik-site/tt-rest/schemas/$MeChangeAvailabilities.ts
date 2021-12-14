/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $MeChangeAvailabilities = {
    properties: {
        weekDay: {
    type: 'Enum',
    isRequired: true,
},
        availabilities: {
    type: 'all-of',
    contains: [{
    type: 'JSON',
}],
    isRequired: true,
},
    },
} as const;