import React, { useEffect, useState } from 'react';

const ManageOrder = () => {

    const [orders,setOrders] = useState([]);

    useEffect(()=>{
        fetch("https://desolate-stream-72668.herokuapp.com/orders")
        .then(res=> res.json())
        .then(data=> setOrders(data))
    },[])
    
    console.log(orders);
    return (
        <div>
            <h1>This is manage order page {orders.length}</h1>
        </div>
    );
};

export default ManageOrder;