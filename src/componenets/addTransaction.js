import React, { useContext } from 'react'

// Import the Global State


export const Transaction = ({ transaction }) => {

    return (
        <li>
            {transaction.description}
            <span>{transaction.amount}</span>
        </li>
    )
}