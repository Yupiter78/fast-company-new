export function validator(data, config) {
    const errors = {};
    // for (const field in config) {
    //     for (const checkOption in config[field]) {
    //         const message = config[field][checkOption]?.method(data[field]);
    //
    //         if (message) errors[field] = message;
    //     }
    // }
    // return errors;
    for (const [field, checks] of Object.entries(config)) {
        for (const [checkName, check] of Object.entries(checks)) {
            console.log("checkName: ", checkName, "check: ", check);
            const messageErrors = check.method(data[field]);
            if (messageErrors) errors[field] = messageErrors;
        }
    }

    return errors;
}
