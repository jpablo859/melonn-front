import React from 'react'

export const ItemDetail = ({productName, quantity, weight}) => {
    return (
        <tr>
            <td>{productName}</td>
            <td>{quantity}</td>
            <td>{weight}</td>
        </tr>
    )
}
