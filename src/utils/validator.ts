import { IFormData } from "../types/types";

interface IValidationOptions {
    message: string;
    value?: number;
}

type ValidationConfig = {
    [key in keyof IFormData]?: {
        [key: string]: IValidationOptions;
    };
};

type ValidatorReturnType = string | undefined;

type IValidator = (
    data: string,
    options: IValidationOptions
) => ValidatorReturnType;

type ValidateMethod = {
    [key: string]: IValidator;
};

export function validator(
    data: Record<keyof IFormData, string>,
    config: ValidationConfig
) {
    const errors: Record<string, string> = {};
    const validate: ValidateMethod = {
        isRequired: (data, { message }) => {
            if (data.trim() === "") return message;
        },
        isEmail: (data, { message }) => {
            const emailRegExp = /^\S+@\S+\.\S+$/g;
            if (!emailRegExp.test(data)) return message;
        },
        hasUpperCase: (data, { message }) => {
            const uppercaseRegExp = /[A-Z]/;
            if (!uppercaseRegExp.test(data)) return message;
        },
        hasDigit: (data, { message }) => {
            const digitRegExp = /\d/;
            if (!digitRegExp.test(data)) return message;
        },
        hasSpecialChar: (data, { message }) => {
            const specialCharRegExp = /[.,?!@#$%^&*]/;
            if (!specialCharRegExp.test(data)) return message;
        },
        minLength: (data, { message, value }) => {
            if (value) {
                if (data.length < value) return message;
            }
        }
    };

    for (const [fieldName, content] of Object.entries(data)) {
        const validationOptions = config[fieldName as keyof IFormData];
        if (validationOptions) {
            for (const [validateMethod, options] of Object.entries(
                validationOptions
            )) {
                const errorMessage = validate[validateMethod]?.(
                    content,
                    options
                );
                if (errorMessage && !errors[fieldName]) {
                    errors[fieldName] = errorMessage;
                }
            }
        }
    }

    return errors;
}
