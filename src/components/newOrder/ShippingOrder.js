import React, { useState } from 'react'

export const ShippingOrder = () => {

    const [shipping, setShipping] = useState({
        adress: '',
        city: '',
        region: ''
    });

    const handleChange = e => {
        setShipping({
            ...shipping,
            [e.target.name]: e.target.value
        })
    }

    const {adress, city, region} = shipping;

    return (
        <table className="table table-bordered table-sm">
            <thead>
                <tr>
                    <th>Shipping Adress</th>
                    <th>Shipping City</th>
                    <th>Shipping Region</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        <input
                            className="form-control"
                            name="adress"
                            value={adress}
                            onChange={handleChange}
                        />
                    </td>
                    <td>
                        <input
                            className="form-control"
                            name="city"
                            value={city}
                            onChange={handleChange}
                        />
                    </td>
                    <td>
                        <input
                            className="form-control"
                            name="region"
                            value={region}
                            onChange={handleChange}
                        />
                    </td>
                </tr>
            </tbody>
        </table>
    )
}
