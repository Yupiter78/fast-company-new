import _ from "lodash";

export const paginate = (data, page, pageSize) => {
    const startIndex = (page - 1) * pageSize;
    return _(data).slice(startIndex).take(pageSize).value();
};
