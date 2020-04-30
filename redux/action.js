// exporting default actions;

const actions = {
    FETCH_ITEM: "FETCH_ITEM",
    FETCH_ITEM_SUCCESS: "FETCH_ITEM_SUCCESS",
    FETCH_ITEM_FAILURE: "FETCH_ITEM_FAILURE",

    ON_ADD_ITEM: "ON_ADD_ITEM",
    ON_ADD_ITEM_SUCCESS: "ON_ADD_ITEM_SUCCESS",

    ON_DELETE_ITEM: "ON_DELETE_ITEM",
    ON_DELETE_ITEM_SUCCESS: "ON_DELETE_ITEM_SUCCESS",

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


    onAddItem: (payload) => ({
        type: actions.ON_ADD_ITEM,
        payload
    }),

    onAddItemSuccess: (payload) => ({
        type: actions.ON_ADD_ITEM_SUCCESS,
        payload
    }),

    onDeleteItem: (payload) => ({
        type: actions.ON_DELETE_ITEM,
        payload
    }),

    onDeleteItemSuccess: (payload) => ({
        type: actions.ON_DELETE_ITEM_SUCCESS,
        payload
    }),


}


export default actions;