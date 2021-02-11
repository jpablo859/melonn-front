import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ItemDetail } from './ItemDetail';

export const Detail = () => {

    const {id} = useParams();

    const [order, setOrder] = useState();

    useEffect(() => {
        
        (async () => {
            try {
                const response = await axios.get(`http://localhost:4000/api/melonn/detail/${id}`);
                setOrder(response.data.data);
            } catch (err) {
                //console.log(err)
            }
        })()

    }, [])

    return (

        <div className="container">
            <div className="col-12">
                <h1 className="text-center">Detail</h1>
                {order && 
                    <>
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th className="text-center" colSpan="4">Order information</th>
                                </tr>
                                <tr>
                                    <th>External Order Number</th>
                                    <th>Buyer Name</th>
                                    <th>Buyer Phone Number</th>
                                    <th>Buyer Email</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{order.orderNum}</td>
                                    <td>{order.buyerName}</td>
                                    <td>{order.buyerPhone}</td>
                                    <td>{order.buyerEmail}</td>
                                </tr>
                            </tbody>
                        </table>
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th className="text-center" colSpan="4">Shipping info</th>
                                </tr>
                                <tr>
                                    <th>Shipping Address</th>
                                    <th>Shipping City</th> 
                                    <th>Shipping Region</th> 
                                    <th>Shipping Country</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{order.adress}</td>
                                    <td>{order.city}</td>
                                    <td>{order.region}</td>
                                    <td>{order.country}</td>
                                </tr>
                            </tbody>
                        </table>

                        <hr/>

                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th className="text-center" colSpan="3">Items</th>
                                </tr>
                                <tr>
                                    <th>Product Name</th>
                                    <th>Quantity</th> 
                                    <th>Weight</th> 
                                </tr>
                            </thead>
                            <tbody>
                                {order.items.map(item => <ItemDetail key={item.name} {...item}/>)}
                            </tbody>
                        </table>
                    </>
                }
            </div>
        </div>
    )
}
