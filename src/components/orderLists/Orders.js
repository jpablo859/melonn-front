import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faList } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

export const Orders = ({internalOrderNum, orderNum, seller, date, minPromise, maxPromise, shippingMethod}) => {
    return (
        <tr>
            <td>{orderNum}</td>
            <td>{seller}</td>
            <td>{date}</td>
            <td>Between {minPromise} And {maxPromise}</td>
            <td>{shippingMethod.value}</td>
            <td><Link to={`./detail/${internalOrderNum}`} className="btn btn-success btn-sm"><FontAwesomeIcon icon={faList} /></Link></td>
        </tr>
    )
}
