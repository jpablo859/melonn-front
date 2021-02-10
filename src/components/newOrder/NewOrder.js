import { InfoOrder } from './InfoOrder';

export const NewOrder = () => {

    

    return (
        <div className="container-fluid">
            <h1 className="text-center">New Order</h1>
            <InfoOrder/>
                
            <table className="table">
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
                                name="orderNum"
                                
                            />
                        </td>
                        <td>
                            <input
                                className="form-control"
                                name="buyerName"
                                
                            />
                        </td>
                        <td>
                            <input
                                className="form-control"
                                name="buyerPhone"
                                
                            />
                        </td>
                    </tr>
                </tbody>
            </table>
            {/* <table className="table">
                <thead>
                    <tr>Items</tr>
                    <tr>
                        <th>Product Name</th>
                        <th>Quantity</th>
                        <th>Weright</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <input
                                className="form-control"
                                name="orderNum"
                                value={orderNum}
                                
                            />
                        </td>
                        <td>
                            <input
                                className="form-control"
                                name="buyerName"
                                value={buyerName}
                                
                            />
                        </td>
                        <td>
                            <input
                                className="form-control"
                                name="buyerPhone"
                                value={buyerPhone}
                                
                            />
                        </td>
                        <td>
                            <input
                                className="form-control"
                                name="buyerEmail"
                                value={buyerEmail}
                                
                            />
                        </td>
                    </tr>
                </tbody>
            </table> */}
        </div>
    )
}
