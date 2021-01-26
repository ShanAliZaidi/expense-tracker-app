import React, {createContext,useReducer} from 'react';
import Reducer from './Reducer'

const initialState = {
    transaction: []
};

const GlobalContext = createContext(initialState);


const GlobalProvider = ({children}) => {
    const [state,dispatch] = useReducer(Reducer,initialState);

    function addTransaction(obj) {
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: {
                id: obj.id,
                description: obj.description,
                amount: parseFloat(obj.amount),
                type: obj.type
            }
        })
    }
    
    function delTransaction(obj) {
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: {id: obj.id}
        });
    }


    return(
        <GlobalContext.Provider value={
            {
                transaction:    state.transaction,
                addTransaction,
                delTransaction
                                
            }
        }>
            {children}
        </GlobalContext.Provider>
    )

}

export {GlobalContext};
export default GlobalProvider;
