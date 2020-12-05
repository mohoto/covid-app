import { createContext, useContext, useReducer } from 'react'

const CountryContext = createContext()

export const CountryContextProvider = ({ reducer, initialState, children }) => {
    return (
        <CountryContext.Provider value={useReducer(reducer, initialState)}>
            {children}
        </CountryContext.Provider>
    )

}

export const useStateValue = () => useContext(CountryContext);

