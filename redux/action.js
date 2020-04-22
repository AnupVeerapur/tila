// exporting default actions;

const actions = {
    FETCH_ITEM: "FETCH_ITEM",
    FETCH_ITEM_SUCCESS: "FETCH_ITEM_SUCCESS",
    FETCH_ITEM_FAILURE: "FETCH_ITEM_FAILURE",


    onFetchItem: () => ({
        type: actions.FETCH_ITEM
    }),

    onFetchItemSuccess: (result) => ({
        type: actions.FETCH_ITEM_SUCCESS,
        result
    }),

    onFetchItemError: (result) => ({
        type: actions.FETCH_ITEM_FAILURE,
        result
    }),

}


export default actions;