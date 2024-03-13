import _ from "lodash";

export const paginate = (data, page, pageSize) => {
    const startIndex = page * pageSize - pageSize;
    return _(data).slice(startIndex).take(pageSize).value();
};
