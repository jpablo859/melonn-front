import React from 'react'

export const ShippingOrder = ({adress, city, region, country,handleChange}) => {

    return (
        <table className="table table-bordered table-sm">
            <thead>
                <tr>
                    <th>Shipping Adress</th>
                    <th>Shipping City</th>
                    <th>Shipping Region</th>
                    <th>Shipping Country</th>
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
                    <td>
                        <input
                            className="form-control"
                            name="country"
                            value={country}
                            onChange={handleChange}
                        />
                    </td>
                </tr>
            </tbody>
        </table>
    )
}
