
const initialState = {
    featureList: [],
    compareList: {},
    listOfDDItems: {},
    listOfTotalItems: [],
    listOfItemsToDisplay: {}
};
const reducer = (state = initialState, action) => {
    const newState = { ...state };

    switch (action.type) {

        case "FETCH_ITEM":

            newState.listOfTotalItems = newState.listOfTotalItems;
            newState.listOfDDItems = newState.listOfDDItems;
            break;

        case "FETCH_ITEM_SUCCESS":
            console.log("Inside reducer", action.result)
            newState.featureList = action.result.products.featuresList; // dispaly list
            newState.compareList = action.result.products.compareSummary; //images and details list

            function genArr() {
                let x = [];
                Object.keys(action.result.products.compareSummary.productPricingSummary).map(item => {
                    x.push(item)
                })
                return x;
            }

            let objTemp = genArr();
            newState.listOfDDItems = {
                value: objTemp
            };
            newState.listOfTotalItems = genArr();

            break;

        case "ON_ADD_ITEM":
            console.log("add item itemm ::::::::::: addddddd ", action.payload.arr)
            newState.listOfDDItems = {};
            newState.listOfItemsToDisplay = {};
            break;

        case "ON_ADD_ITEM_SUCCESS":
            let aCT = action.payload;
            newState.listOfDDItems = {
                value: aCT
            };
            break;

        case "ON_DELETE_ITEM":

            newState.listOfDDItems = {};
            newState.listOfItemsToDisplay = {};
            break;

        case "ON_DELETE_ITEM_SUCCESS":
            // Add items again in dropdown options as it is removed from list
            let delAct = action.payload;
            newState.listOfDDItems = {
                value: delAct
            };
            break;
    }
    return newState;
};

export default reducer;