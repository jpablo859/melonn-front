import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faList } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

export const Orders = ({internalOrderNum, externalOrderNum, seller, date, shippingMethod}) => {
    return (
        <tr>
            <td>{externalOrderNum}</td>
            <td>{seller}</td>
            <td>{date}</td>
            <td>{shippingMethod}</td>
            <td><Link to={`./detail/${internalOrderNum}`} className="btn btn-success btn-sm"><FontAwesomeIcon icon={faList} /></Link></td>
        </tr>
    )
}
