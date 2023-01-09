const recipeReducer = (state = {}, action) => {
    switch (action.type) {
        case 'SET_RECIPES':
            return action.payload;
        case 'UNSET_RECIPES':
            return {};
        default:
            return state;
    }
}

export default recipeReducer;