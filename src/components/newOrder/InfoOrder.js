import  React, { useEffect, useState } from 'react'
import axios from 'axios'

export const InfoOrder = () => {

    const API_KEY = '8hu71URNzm7FCLV9LfDPd9Gz61zN2diV6kG2hDEw';

    const [shpMethod, setShpMethod] = useState();

    const [state, setState] = useState({
        seller: '',
        shippingMethod: '',
        orderNum: '',
        buyerName: '',
        buyerPhone: '',
        buyerEmail: ''
    });

    useEffect(() => {
        (async () => {
            try {
                const response = await axios.get(`https://yhua9e1l30.execute-api.us-east-1.amazonaws.com/sandbox/shipping-methods`, {
                    headers: {
                        'x-api-key': API_KEY
                    }
                });
                setShpMethod(response.data);
            } catch (err) {

            }
        })()
    }, [])
    
    const {orderNum, buyerName, buyerPhone, buyerEmail, seller, shippingMethod} = state;

    const fnChange = e => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }

    return (
        <table className="table table-bordered table-sm">
            <thead>
                <tr>
                    <th>Seller</th>
                    <th>Shipping Method</th>
                    <th>Order Number</th>
                </tr>
            </thead>
            <tbody>

                <tr>
                    <td>
                        <input
                            className="form-control"
                            name="seller"
                            value={seller}
                            onChange={fnChange}
                        />
                    </td>
                    <td>
                        <select 
                            className="form-control"
                            onChange={fnChange}
                            name="shippingMethod"
                        >
                            <option key={0}></option>
                            {shpMethod && shpMethod.map(({id, name}) => <option key={id}>{name}</option>)}
                        </select>
                    </td>
                    <td>
                        <input
                            className="form-control"
                            name="orderNum"
                            value={orderNum}
                            onChange={fnChange}
                        />
                    </td>
                </tr>
            </tbody>
            <thead>
                <tr>
                    <th>Buyer Full Name</th>
                    <th>Buyer Phone Number</th>
                    <th>Buyer Email</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        <input
                            className="form-control"
                            name="buyerName"
                            value={buyerName}
                            onChange={fnChange}
                        />
                    </td>
                    <td>
                        <input
                            className="form-control"
                            name="buyerPhone"
                            value={buyerPhone}
                            onChange={fnChange}
                        />
                    </td>
                    <td>
                        <input
                            className="form-control"
                            name="buyerEmail"
                            value={buyerEmail}
                            onChange={fnChange}
                        />
                    </td>
                </tr>
            </tbody>
        </table>
    )
}
