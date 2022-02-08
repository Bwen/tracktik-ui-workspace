import type { v4 as uuidv4 } from 'uuid';
import type { Field } from './Field';
import type { Fieldset } from './Fieldset';

export class Manager {
    formId: uuidv4;
    fieldsets: Fieldset[];

    constructor(formId: uuidv4, fieldsets: Fieldset[]) {
        this.formId = formId;
        this.fieldsets = fieldsets;
    }

    hasErrors(): boolean {
        let hasErrors = false;
        this.fieldsets.forEach(fieldset => {
            fieldset.fields.forEach(field => {
                if (field.error) {
                    hasErrors = true;
                }
            });
        });

        return hasErrors;
    }

    getField(name: string): Field {
        let foundField = undefined;
        this.fieldsets.forEach(fieldset => {
            fieldset.fields.forEach(field => {
                if (field.name == name) {
                    foundField = field;
                }
            });
        });

        return foundField;
    }

    async validateFieldsets(): Promise<Fieldset[]> {
        this.resetFieldsError();

        return new Promise(async (resolve) => {
            // Need for loop to check if there is already an error set on the field to skip the next validators
            for (let i=0; i < this.fieldsets.length; i++) {
                const fields = this.fieldsets[i].fields;
                for (let j=0; j < fields.length; j++) {
                    const field = fields[j];
                    if (Object.hasOwnProperty.call(field, 'validators') && field.validators.length) {
                        for (let x=0; x < field.validators.length; x++) {
                            if (field.error) continue;

                            const isInvalid = field.validators[x];
                            let error = await isInvalid(field);
                            if (error) {
                                field.error = error;
                            }
                        }
                    }
                }
            }

            resolve(this.fieldsets);
        });
    }

    getFieldsets(): Fieldset[] {
        return this.fieldsets;
    }

    resetFieldsError(): Manager {
        this.fieldsets.forEach(fieldset => {
            fieldset.fields.forEach(field => {
                field.error = undefined;
            });
        });

        return this;
    }

    setFieldValue(name: string, value: string): Manager {
        this.fieldsets.forEach(fieldset => {
            fieldset.fields.forEach(field => {
                if (field.name == name) {
                    field.value = value;
                }
            });
        });

        return this;
    }

    setFieldError(name: string, error: string): Manager {
        this.fieldsets.forEach(fieldset => {
            fieldset.fields.forEach(field => {
                if (field.name == name) {
                    field.error = error;
                }
            });
        });

        return this;
    }
};
