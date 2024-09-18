export function validator(data, config) {
    const errors = {};
    const validate = {
        isRequired: (propData, message) => {
            if (propData.trim() === "") return message;
        }
    };

    for (const [fieldName, content] of Object.entries(data)) {
        for (const [validateMethod, { message }] of Object.entries(
            config[fieldName]
        )) {
            const errorMessage = validate[validateMethod]?.(content, message);
            if (errorMessage) errors[fieldName] = errorMessage;
        }
    }

    return errors;
}
