export function validator(data, config) {
    const errors = {};
    const validate = (method, propData, message) => {
        switch (method) {
            case "isRequired":
                if (propData.trim() === "") return message;
                break;
        }
    };
    for (const [fieldName, content] of Object.entries(data)) {
        for (const [validateMethod, { message }] of Object.entries(
            config[fieldName]
        )) {
            const errorMessage = validate(validateMethod, content, message);
            if (errorMessage) errors[fieldName] = errorMessage;
        }
    }

    return errors;
}
