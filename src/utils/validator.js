export function validator(data, config) {
    const errors = {};
    const validate = {
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
            if (data.length < value) return message;
        }
    };

    for (const [fieldName, content] of Object.entries(data)) {
        for (const [validateMethod, options] of Object.entries(
            config[fieldName]
        )) {
            const errorMessage = validate[validateMethod]?.(content, options);
            if (errorMessage && !errors[fieldName]) {
                errors[fieldName] = errorMessage;
            }
        }
    }

    return errors;
}
