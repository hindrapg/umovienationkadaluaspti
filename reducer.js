export const initialState ={
    watchList: [],
};

const reducer=(state, action)=> {
console.log(action);
    switch(action.type) {
        case "ADD_TO_WATCHLIST":
            return{
                ...state,
                watchList :  [...state.watchList, action.item],
            };

        default:
            return state;
    }
};

export default reducer;