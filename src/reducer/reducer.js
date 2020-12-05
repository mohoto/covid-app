export const initialState = {
    countryCode: "worldwide"
}

export const actionTypes = {
    SET_COUNTRY_CODE: 'SET_COUNTRY_CODE'
}

const reducer = (state, action) => {
    switch (action.type) {
        case actionTypes.SET_COUNTRY_CODE:
            return {
                ...state,
                countryCode: action.country
            }
        default:
            return state
    }

}

export default reducer;