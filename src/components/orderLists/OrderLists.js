import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Orders } from './Orders';

export const OrderLists = () => {

    const [list, setList] = useState();

    const URI = 'http://localhost:4000/api/melonn';

    useEffect(() => {
        (async () => {
            try {
                const response = await axios.get(URI);
                if(response.data.ok) {
                    setList(response.data.data);
                }
            } catch(err) {
                console.log(err)
            }
        })()
    }, [])

    return (
        <div className="container">
            <h1 className="text-center">Order Lists</h1>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>Order Number</th>
                        <th>Seller Store</th>
                        <th>Creation Date</th>
                        <th>Promise Date</th>
                        <th>Shipping Method</th>
                        <th>Detail</th>
                    </tr>
                </thead>
                <tbody>
                    { list && list.map(item => <Orders key={item.internalOrderNum} {...item} />)}
                </tbody>
            </table>
        </div>
    )
}
