import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export const ItemDetail = ({name, quantity, weight, deleteItem}) => {
    
    return (
        <tr>
            <td>{name}</td>
            <td>{quantity}</td>
            <td>{weight}</td>
            {deleteItem && <td width="5%">
                <button
                    className="btn btn-danger btn-sm"
                    onClick={() => deleteItem(name)}
                >
                    <FontAwesomeIcon icon={faTrash}/>
                </button>
            </td>}
            
        </tr>
    )
}
