export function validator(data, config) {
    const errors = {};
    const validate = {
        isRequired: (propData, message) => {
            if (propData.trim() === "") return message;
        },
        isEmail: (propData, message) => {
            const emailRegExp = /^\S+@\S+\.\S+$/g;
            if (!emailRegExp.test(propData)) return message;
        }
    };

    for (const [fieldName, content] of Object.entries(data)) {
        for (const [validateMethod, { message }] of Object.entries(
            config[fieldName]
        )) {
            const errorMessage = validate[validateMethod]?.(content, message);
            if (errorMessage && !errors[fieldName]) {
                errors[fieldName] = errorMessage;
            }
        }
    }

    return errors;
}
