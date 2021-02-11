import { useState } from 'react';
import { ItemDetail } from '../orderLists/ItemDetail';
import { InfoOrder } from './InfoOrder';
import { ItemsOrder } from './ItemsOrder';
import { ShippingOrder } from './ShippingOrder';
import axios from 'axios';

export const NewOrder = () => {

    const [infOrder, setInfOrder] = useState({
        seller: '',
        shippingMethod: {
            key: '',
            value: ''
        },
        orderNum: '',
        buyerName: '',
        buyerPhone: '',
        buyerEmail: '',
        adress: '',
        city: '',
        region: '',
        country: ''
    });

    const handleChange = e => {
        setInfOrder({
            ...infOrder,
            [e.target.name]: e.target.value
        })
    }

    const optionChange = e => {

        let index = e.target.selectedIndex;

        setInfOrder({
            ...infOrder,
            [e.target.name]: {
                key: e.target.value,
                value: e.target[index].text
            } 
        })

    }

    const [listItems, setListItems] = useState([]);

    const addItem = data => {

        if (data.name === "" || data.quantity === "" || data.weight === "") {
            alert('The item fields are required')
            return false;
        } 

        const validation = listItems.find(({name}) => name === data.name);

        if (validation) {
            alert('The item has already been added')
            return false;
        }

        setListItems([
            ...listItems,
            data
        ])


    }

    const deleteItem = data => {
        const filter = listItems.filter(({name}) => name !== data);
        setListItems(filter);
    }

    const saveSale = async () => {

        try {

            const validate = Object.values(infOrder).find(item => !item);
    
            if (validate === "") {
                alert('All fields are required');
                return false;
            }

            if (infOrder.shippingMethod.value === "") {
                alert('Select a shipping method');
                return false;
            }
    
            if (!listItems) {
                alert('You must add at least one item');
                return false;
            }
    
            const data = {
                ...infOrder,
                items:listItems
            }
    
            const {data:response} = await axios.post('http://localhost:4000/api/melonn/saveSale', data);
    
            alert(response.data.message);

        } catch (err) {
            alert(err);
        }
        
    }

    return (
        <div className="container">
            <h1 className="text-center">New Order</h1>
            <InfoOrder handleChange={handleChange} optionChange={optionChange} {...infOrder}/>
            <ShippingOrder handleChange={handleChange} {...infOrder}/>
            <ItemsOrder addItem={addItem} />
            {listItems.length > 0 && 
            <>
                <table className="table table-bordered table-sm table-striped table-hover" width="100%">
                    <tbody>
                        {listItems.map(item => <ItemDetail key={item.name} deleteItem={deleteItem} {...item}/>)}
                    </tbody>
                </table>
                <div className="d-flex justify-content-end mb-5">
                    <button 
                        className="btn btn-dark"
                        onClick={saveSale}
                    >Save Sale</button>
                </div>
            </>
            }
        </div>
    )
}
