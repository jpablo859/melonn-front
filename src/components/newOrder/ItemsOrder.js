import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react'

export const ItemsOrder = ({addItem}) => {

    const [items, setItems] = useState({
        name: '',
        quantity: '',
        weight: ''
    });

    const handleChange = e => {
        setItems({
            ...items,
            [e.target.name]: e.target.value
        })
    }

    const {name, quantity, weight} = items;

    return (
        <table className="table table-bordered table-sm">
            <thead>
                <tr>
                    <th>Product Name</th>
                    <th>Quantity</th>
                    <th>Weight</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        <input
                            className="form-control"
                            name="name"
                            value={name}
                            onChange={handleChange}
                        />
                    </td>
                    <td>
                        <input
                            className="form-control"
                            name="quantity"
                            value={quantity}
                            onChange={handleChange}
                        />
                    </td>
                    <td>
                        <input
                            className="form-control"
                            name="weight"
                            value={weight}
                            onChange={handleChange}
                        />
                    </td>
                    <td>
                        <button 
                            className="btn btn-primary"
                            onClick={() => addItem(items)}
                        >
                            <FontAwesomeIcon icon={faPlus} />
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
    )
}
