
const initialState = {
    featureList: [],
    compareList: {},
};
const reducer = (state = initialState, action) => {
    const newState = { ...state };

    switch (action.type) {
        case "FETCH_ITEM_SUCCESS":
            console.log("Inside reducer", action.result)
            newState.featureList = action.result.products.featuresList;
            newState.compareList = action.result.products.compareSummary;
            break;
    }
    return newState;
};

export default reducer;