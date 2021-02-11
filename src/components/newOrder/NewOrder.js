import { useState } from 'react';
import { ItemDetail } from '../orderLists/ItemDetail';
import { InfoOrder } from './InfoOrder';
import { ItemsOrder } from './ItemsOrder';
import { ShippingOrder } from './ShippingOrder';

export const NewOrder = () => {

    const [listItems, setListItems] = useState([]);

    const addItem = data => {
        setListItems([
            ...listItems,
            data
        ])
    }

    return (
        <div className="container">
            <h1 className="text-center">New Order</h1>
            <InfoOrder/>
            <ShippingOrder/>
            <ItemsOrder addItem={addItem}/>
            {listItems.length > 0 && 
                <table className="table table-bordered table-sm table-striped table-hover">
                    <thead>
                        <tr>
                            <th>Product Name</th>
                            <th>Quantity</th>
                            <th>Weight</th>
                        </tr>
                    </thead>
                    <tbody>
                        {listItems.map(item => <ItemDetail key={item.name} productName={item.name} {...item}/>)}
                    </tbody>
                </table>
            }
        </div>
    )
}
