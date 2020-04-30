
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
            console.log("add item itemm ::::::::::: ", aCT)

            // let tempDispArr = a.dispArrItems;
            // tempDispArr.push(a.itemId)

            // to remove selected item from dd ,  as to remove duplication of comparision
            // let a = ["TVSF2WYXTKAR7RAF", "TVSF2WYUE4PWNJKM", "TVSE8FMZ9AQMEGC6", "TVSF3J7HUJF5XUBT"]
            // let ad = ["TVSF2WYXTKAR7RAF", "TVSF2WYUE4PWNJKM", "TVSE8FMZ9AQMEGC6"]

            console.log("add item itemm all ::::::::::: ", aCT);
            newState.listOfDDItems = {
                value: aCT
            };
            // newState.listOfItemsToDisplay = {
            //     value: aCT
            // };

            break;

        case "ON_DELETE_ITEM":

            newState.listOfAllItemsRed = [];
            newState.dispArrItemsRed = [];
            break;

        case "ON_DELETE_ITEM_SUCCESS":

            let b = action.payload.payload;
            let tempArrDel = b.listOfAllItems;
            tempArrDel.push(b.itemId);

            let tempDispArr = b.dispArrItems;
            console.log("temp disp arrr ::::::::::: ", tempDispArr)
            let xindel = tempDispArr.indexOf(b.itemId);
            tempDispArr.splice(xindel, 1)
            console.log("temp disp arrr ::::::::::: after >>>>>>>>", tempDispArr)
            newState.listOfAllItemsRed = tempArrDel;
            newState.dispArrItemsRed = tempDispArr;
            break;



    }
    return newState;
};

export default reducer;